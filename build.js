const fs = require('fs');
const path = require('path');
const manifest = require('./manifest.json');

// Violentmonkey/Tampermonkey 元数据头
const headerContent = `
// ==UserScript==
// @name        ${manifest.name}
// @namespace   https://figma.cool
// @match       *://*.figma.com/*
// @version     ${manifest.version}
// @description ${manifest.description}
// @author      figma.cool,Yancy Min,Coiven,YorKun,Pluwen,Neko,诺墨 and ts8zs
// @license     GPL-3.0 license
// @homepageURL ${manifest.homepage_url}
// @run-at      document-end
// @grant       none
// ==/UserScript==

`;

const contentFilePath = path.join(__dirname, 'js/content.js');
const translationsFilePath = path.join(__dirname, 'js/translations.js');
const outputFolderPath = path.join(__dirname, 'dist');
// 输出 .user.js 以便脚本管理器识别安装
const outputFilePath = path.join(outputFolderPath, 'main.user.js');

// 读取 content.js 与 translations.js，拼装为单文件 userscript
fs.readFile(contentFilePath, 'utf8', (contentErr, contentJs) => {
  if (contentErr) {
    console.error('Error reading content file:', contentErr);
    return;
  }

  fs.readFile(translationsFilePath, 'utf8', (transErr, translationsJs) => {
    if (transErr) {
      console.error('Error reading translations file:', transErr);
      return;
    }

    // 用内联数据替换原本的异步获取与 chrome.runtime 依赖
    const loaderPattern = /async function loadTranslationData\(\)\s*\{[\s\S]*?\}\s*\n\s*\/\/\s*启动加载\s*\n\s*loadTranslationData\(\);\s*/;
    const transformedContent = contentJs.replace(
      loaderPattern,
      `// 内联 translations，直接初始化
initializeTranslation(translations);
`
    );

    // IIFE 包裹，避免全局变量泄漏；先定义 translations 再执行初始化逻辑
    const bundled = `(function () {
${translationsJs}

${transformedContent}
})();\n`;

    const finalContent = headerContent + bundled;

    try {
      if (!fs.existsSync(outputFolderPath)) {
        fs.mkdirSync(outputFolderPath, { recursive: true });
      }
    } catch (mkdirErr) {
      console.error(mkdirErr);
    }

    fs.writeFile(outputFilePath, finalContent, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing to output file:', writeErr);
        return;
      }
      console.log('Userscript built at', outputFilePath);
    });
  });
});
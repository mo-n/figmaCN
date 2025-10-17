const fs = require('fs');
const path = require('path');
const manifest = require('./manifest.json');


// 要添加到文件头部的内容
const headerContent = `
// ==UserScript==
// @name        ${manifest.name}
// @namespace   Violentmonkey Scripts
// @match       *://*.figma.com/*
// @grant       none
// @version     ${manifest.version}
// @author      figma.cool,Yancy Min,Coiven,YorKun,Pluwen,Neko,诺墨 and ts8zs
// @description ${manifest.description}
// @license     GPL-3.0 license
// ==/UserScript==

`;

const inputFilePath = path.join(__dirname, 'js/content.js');
const outputFolderPath = path.join(__dirname, 'dist');
const outputFilePath = path.join(outputFolderPath, 'main.js');

fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading input file:', err);
    return;
  }

  const newContent = headerContent + data;

  try {
    if (!fs.existsSync(outputFolderPath)) {
      fs.mkdirSync(outputFolderPath);
    }
  } catch (err) {
    console.error(err);
  }

  fs.writeFile(outputFilePath, newContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to output file:', err);
      return;
    }

    console.log('File successfully updated and saved to', outputFilePath);
  });
});
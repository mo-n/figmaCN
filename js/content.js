const allData = [
  [` autosave `, ` 个自动保存 `],
  [` Copy link`, `复制链接`],
  [` Follower`, ` 关注者`],
  [` Following`, ` 正在关注`],
  [` for all team files.`, `给所有团队文件`],
  [` Get embed code`, `获取嵌入代码`],
  [` Learn more`, ` 了解更多`],
  [` Projects`, ` 项目`],
  [` Sign up`, `注册`],
  [` Team Libraries`, ` 团队资源库`],
  [` to create your own plugin and manage any plugins currently in development.`, ` 来创建你自己的插件，以及管理在开发中的插件`],
  [` to create your own plugin.`, ` 创建你自己的插件`],
  [` Version History`, ` 版本历史`],
  [` Viewers`, `查看者`],
  [` when you choose the Annual Plan.`, ` 当你选择年付计划时。`],
  [`(best for 9+ seats)`, `（建议 9 个人以上）`],
  [`(Threads you're involved in)`, `（我参与的主题）`],
  [`(You)`, `(你)`],
  [`/mo.`, `/月`],
  [`↓ Duplicate`, `↓ 创建副本`],
  [`↓ Install`, `↓ 安装`],
  [`✓  Installed`, `✓ 已安装`],
  [`100% – Display at full size`, `100% - 以完整尺寸显示`],
  [`About us`, `关于我们`],
  [`Account Settings`, `账号设置`],
  [`Account`, `帐户`],
  [`Activity from other users`, `其他用户的活动`],
  [`Add a description`, `添加简介`],
  [`Add a location`, `添加位置`],
  [`Add a Project to your Favorites to see it here`, `添加项目到你的收藏，就会在此处显示`],
  [`Add a website`, `添加网站`],
  [`Add another`, `添加更多`],
  [`Add Auto Layout`, `增加自动布局`],
  [`Add background behind overlay`, `在叠加后添加背景`],
  [`Add Comment (C)`, `添加评论（C）`],
  [`Add Description`, `添加简介`],
  [`Add Emoji`, `添加 Emoji 表情`],
  [`Add New Page`, `添加新页面`],
  [`Add team members`, `添加团队成员`],
  [`Add to Favorites`, `添加到收藏`],
  [`Add to version history while editing.`, `当编辑时添加到历史版本`],
  [`Add your collaborators`, `添加协作者`],
  [`Add/Show Comments`, `添加/显示评论`],
  [`Adjust Font Size`, `调整字体大小`],
  [`Adjust Font Weight`, `调整字体粗细`],
  [`Adjust Letter Spacing`, `调整字间距`],
  [`Adjust Line Height`, `调整行高`],
  [`Admin Dashboard`, `管理员仪表盘`],
  [`admin`, `管理员`],
  [`Advanced options`, `高级选项`],
  [`Advanced Stroke`, `高级边框`],
  [`After creating a team, you can invite others to join.`, `团队创建完成后，你可以邀请其他人加入。`],
  [`After Delay`, `延迟触发`],
  [`After selecting points…`, `选择点后…`],
  [`Align Bottom`, `底部对齐`],
  [`Align Center`, `居中对齐`],
  [`Align Centers`, `居中对齐`],
  [`Align Horizontal Centers`, `水平居中`],
  [`Align Left/Right`, `左/右对齐`],
  [`Align Left`, `左对齐`],
  [`Align Middle`, `垂直居中`],
  [`Align Right`, `右对齐`],
  [`Align Top/Bottom`, `上/下对齐`],
  [`Align Top`, `顶部对齐`],
  [`Align Vertical Centers`, `垂直居中`],
  [`Align`, `对齐`],
  [`Alignment`, `对齐`],
  [`All comments`, `全部评论`],
  [`All team files`, `所有团队文件`],
  [`All team projects`, `所有团队项目`],
  [`All Templates`, `所有模板`],
  [`All`, `全部`],
  [`Allow Figma to access your local fonts`, `允许 Figma 访问你的本地字体`],
  [`Allow viewers to copy, share, and export from this file`, `允许查看者复制、分享以及从这个文件中导出`],
  [`Alphabetical`, `字母顺序`],
  [`An error occurred while opening the editor`, `打开编辑器时遇到点问题`],
  [`Angular`, `角度渐变`],
  [`Animation`, `动画`],
  [`Annual billing only`, `仅限年付订单`],
  [`Annual Plan`, `年付计划`],
  [`Anyone with the link`, `知道链接的任何人`],
  [`Anyone`, `所有人`],
  [`Are you sure?`, `你确定吗？`],
  [`Arrange`, `排列`],
  [`Arrow Tool`, `箭头工具`],
  [`Arrow`, `箭头`],
  [`Ascending`, `升序`],
  [`Assets`, `资源`],
  [`Author`, `作者`],
  [`Auto Height`, `自动高度`],
  [`Auto Layout`, `自动布局`],
  [`Auto Width`, `自动宽度`],
  [`Auto`, `自动`],
  [`Back to Files`, `返回文件列表`],
  [`Back`, `后退`],
  [`Background Blur`, `背景模糊`],
  [`Background`, `背景`],
  [`Bend Tool`, `弯曲工具`],
  [`Best Practices`, `最佳实践`],
  [`Beta`, `测试`],
  [`Big nudge`, `大微调`],
  [`Blank Canvas`, `空白画布`],
  [`Blank Presets`, `空白预设`],
  [`Blend Mode`, `混合模式`],
  [`Blog`, `博客`],
  [`Bold`, `加粗`],
  [`Boolean Groups`, `布尔组合`],
  [`Bottom Center`, `底部中间`],
  [`Bottom Left`, `底部左侧`],
  [`Bottom Right`, `底部右侧`],
  [`Bottom`, `底部`],
  [`Brainstorming`, `头脑风暴`],
  [`Brainstorms and Sprints`, `头脑风暴和冲刺`],
  [`Bring Forward`, `上移一层`],
  [`Bring to Front`, `移到顶层`],
  [`Browse `, `浏览 `],
  [`Browse all plugins`, `浏览所有插件`],
  [`Browse libraries...`, `浏览资源库…`],
  [`can access`, `可以访问`],
  [`can edit`, `可以编辑`],
  [`can view prototype only`, `仅可以查看原型`],
  [`can view`, `可以查看`],
  [`Cancel Professional plan`, `取消专业版计划`],
  [`Cancel`, `取消`],
  [`Cap`, `端点`],
  [`Capital Spacing`, `大写字母间隔`],
  [`Careers`, `工作机会`],
  [`Case`, `大小写`],
  [`Center`, `居中`],
  [`Centered`, `居中`],
  [`Centralized Teams`, `中心化的团队`],
  [`Change email`, `修改邮箱`],
  [`Change Handle`, `修改地址`],
  [`Change Icon`, `修改图标`],
  [`Change name`, `修改名字`],
  [`Change password`, `修改密码`],
  [`Change your unique profile handle`, `修改你独有的个人主页地址`],
  [`Changes saved`, `更改已保存`],
  [`Choose a plan`, `选择一个计划`],
  [`Choose Education`, `选择教育版`],
  [`Choose Image...`, `选择图片…`],
  [`Choose Organization`, `选择团队版`],
  [`Choose Professional`, `选择专业版`],
  [`Choose Starter`, `选择入门版`],
  [`Choose your team plan`, `选择你的团队方案`],
  [`Click + to replace mixed content.`, `点击 + 来替换多个内容。`],
  [`Clip content`, `裁剪内容`],
  [`Close Overlay`, `关闭叠加`],
  [`Close when clicking outside`, `点击空白处关闭`],
  [`code`, `代码`],
  [`Collaboration Features`, `协作能力`],
  [`Collaboration`, `协作`],
  [`Collapse Layers`, `折叠图层`],
  [`Color Burn`, `颜色加深`],
  [`Color Dodge`, `颜色减淡`],
  [`Color Styles`, `颜色样式`],
  [`Color`, `颜色`],
  [`Columns`, `列`],
  [`Comment Actions`, `评论操作`],
  [`Comment Notification Settings`, `评论通知设置`],
  [`Comments`, `评论`],
  [`Community Forum`, `社区论坛`],
  [`Community`, `社区`],
  [`Compare`, `对比`],
  [`Component`, `组件`],
  [`Components`, `组件`],
  [`Congratulations!`, `干得漂亮！`],
  [`Connected Apps`, `已连接的应用`],
  [`Constrain Proportions`, `约束比例`],
  [`Constraints`, `约束`],
  [`Contact Sales`, `联系销售团队`],
  [`Contact`, `联系`],
  [`Contents Only`, `仅内容`],
  [`Continue to Payment`, `继续支付`],
  [`Continue`, `继续`],
  [`Contrast`, `对比度`],
  [`Copy as CSS`, `复制为 CSS`],
  [`Copy as SVG`, `复制为 SVG`],
  [`Copy as Text`, `复制为文本`],
  [`Copy as`, `复制为`],
  [`Copy Link to Page`, `复制页面链接`],
  [`Copy Link`, `复制链接`],
  [`Copy link`, `复制链接`],
  [`Copy Properties`, `复制属性`],
  [`Copy/Paste`, `复制/粘贴`],
  [`Copy`, `复制`],
  [`Corner Radius`, `圆角半径`],
  [`Corner Smoothing`, `平滑圆角`],
  [`Count`, `数量`],
  [`Create a Figma Community profile to Like, Follow, and Publish`, `创建 Figma 社区个人主页，就可以喜欢、关注和发布`],
  [`Create a new file to start from scratch. Import a Sketch file, PNG, or JPG by dragging and dropping.`, `创建一个新文件从头开始。可以拖拽导入 Sketch 文件、PNG 或 JPG 文件。`],
  [`Create a new personal access token`, `创建新的个人访问令牌`],
  [`Create a Team to Publish Components`, `创建一个团队来发布组件`],
  [`Create a team`, `创建一个团队`],
  [`Create Component`, `创建组件`],
  [`Create file in Drafts`, `在草稿中创建文件`],
  [`Create File`, `创建文件`],
  [`Create Link`, `创建链接`],
  [`Create Multiple Components`, `创建多个组件`],
  [`Create new color style`, `创建新的颜色样式`],
  [`Create new effect style`, `创建新的效果样式`],
  [`Create New Project`, `创建新项目`],
  [`Create New Team`, `创建新的团队`],
  [`Create new text style`, `创建新的文本样式`],
  [`Create Profile`, `创建个人主页`],
  [`Create Project`, `创建项目`],
  [`Create Style`, `新建样式`],
  [`Create style`, `新建样式`],
  [`Create Team`, `创建团队`],
  [`Create teams to share design libraries with collaborators and organize files into Projects`, `创建团队，与协作者共享设计资源库，并将文件存放到项目中`],
  [`Created by `, `创建自 `],
  [`Created`, `创建时间`],
  [`Creating a connection`, `创建新的连接`],
  [`Creators`, `创建者`],
  [`Crop Image`, `裁剪图片`],
  [`Crop`, `裁切`],
  [`Current file`, `当前文件`],
  [`Current Version`, `当前版本`],
  [`Cursor`, `光标`],
  [`Custom File/User Permissions`, `自定义文件/用户权限`],
  [`Customers`, `客户`],
  [`Cut`, `剪切`],
  [`Darken`, `变暗`],
  [`Dashes`, `虚线`],
  [`Date created`, `创建时间`],
  [`Date deleted`, `删除时间`],
  [`Decoration`, `文本修饰`],
  [`Decrease Font Size`, `减小字号`],
  [`Decrease Font Weight`, `减小字重`],
  [`Decrease Letter Spacing`, `减小字间距`],
  [`Decrease Line Height`, `减小行高`],
  [`Deep Select Within Rectangle`, `矩形内穿透选择`],
  [`Deep Select`, `穿透选择`],
  [`Default thumbnail restored`, `已恢复为默认封面`],
  [`Delete Account`, `删除帐户`],
  [`Delete and Heal Selection`, `删除和修复所选项`],
  [`Delete Comment`, `删除评论`],
  [`Delete Community Profile`, `删除社区个人主页`],
  [`Delete Forever`, `永久删除`],
  [`Delete forever`, `永久删除`],
  [`Delete Page`, `删除页面`],
  [`Delete Style`, `删除样式`],
  [`Delete Team`, `删除团队`],
  [`Delete your profile`, `删除你的个人主页`],
  [`Delete`, `删除`],
  [`Deleted`, `已删除`],
  [`Deleting your profile will remove all your published files, plugins, likes, and follow data from Figma Community and relinquish your profile handle. This action can not be undone.`, `删除你的个人主页，将会从 Figma 社区中删除所有已发布的文件、插件、喜欢和关注数据，并放弃你的个人页面地址。此操作无法撤销。`],
  [`Descending`, `降序`],
  [`Description`, `简介`],
  [`Design Features`, `设计能力`],
  [`Design on Windows`, `在 Windows 上设计`],
  [`Design System Analytics`, `设计系统分析`],
  [`Design System`, `设计系统`],
  [`Design Systems Features`, `设计系统能力`],
  [`Design Systems`, `设计系统`],
  [`design`, `设计`],
  [`Design`, `设计`],
  [`Desktop`, `桌面端`],
  [`Detach Instance`, `分离实例`],
  [`Detach Style`, `分离样式`],
  [`Details`, `详情`],
  [`Developers`, `开发者`],
  [`Device`, `设备`],
  [`Diamond`, `菱形渐变`],
  [`Difference`, `差集`],
  [`Disabled`, `已禁用`],
  [`Dismiss`, `忽略`],
  [`Dissolve`, `淡入淡出`],
  [`Distribute Bottom`, `向下均分`],
  [`Distribute Horizontal Centers`, `水平中心均分`],
  [`Distribute Horizontal Spacing`, `水平间距均分`],
  [`Distribute Left`, `向左均分`],
  [`Distribute Right`, `向右均分`],
  [`Distribute Spacing`, `分布间距`],
  [`Distribute Top`, `向上均分`],
  [`Distribute Vertical Centers`, `垂直中心均分`],
  [`Distribute Vertical Spacing`, `垂直间距均分`],
  [`Document Colors`, `文件中的颜色`],
  [`Don't see a project? Try searching for it.`, `找不到项目？搜索一下试试看。`],
  [`Don't show this again`, `不再显示`],
  [`Done`, `完成`],
  [`Downgrade to Viewer`, `降级为查看者`],
  [`Download the latest Desktop App`, `下载最新的客户端应用`],
  [`Download uninstaller to disable local fonts.`, `下载卸载工具来禁用本地字体。`],
  [`Downloads`, `下载`],
  [`Drafts and Teams`, `草稿和团队`],
  [`Drafts`, `草稿`],
  [`Drawing Tools`, `绘画工具`],
  [`Drop Shadow`, `阴影`],
  [`Duplicate Page`, `创建页面副本`],
  [`Duplicate Selection`, `创建选中项的副本`],
  [`Duplicate to Drafts`, `创建副本到草稿`],
  [`Duplicate to your Drafts`, `创建副本到你的草稿`],
  [`Duplicate`, `创建副本`],
  [`Ease In And Out`, `缓入缓出`],
  [`Ease In`, `缓入`],
  [`Ease Out`, `缓出`],
  [`Edit Current Version`, `编辑当前版本`],
  [`Edit Object`, `编辑对象`],
  [`Edit Shape or Image`, `编辑形状或图片`],
  [`Edit Style`, `编辑样式`],
  [`Edit this page`, `编辑这个页面`],
  [`Edit...`, `编辑…`],
  [`Edit`, `编辑`],
  [`Editor Seats`, `编辑者席位`],
  [`editor`, `个编辑者`],
  [`Editors on your team`, `团队中的编辑者`],
  [`Education Team`, `教育版团队`],
  [`Education Verification`, `教育版认证`],
  [`Education`, `教育`],
  [`Effect Styles`, `效果样式`],
  [`Effect`, `效果`],
  [`Effects`, `效果`],
  [`Either this file doesn’t exist or you don’t have permission to view it. Ask the file owner to verify the link and/or update permissions.`, `要么这个文件不存在，要么你没有权限查看它。请文件所有者核实链接或更新权限。`],
  [`Ellipse Tool`, `椭圆工具`],
  [`Ellipse`, `椭圆`],
  [`Email`, `邮箱`],
  [`Enable libraries for all team files from your`, `为所有团队文件启用资源库，打开`],
  [`Enable Libraries`, `启用资源库`],
  [`Enable non-Education editors by upgrading to a Professional Team.`, `通过升级为专业团队，以启用非教育编辑者。`],
  [`Enable two-factor authentication...`, `启用两步验证…`],
  [`Enable`, `启用`],
  [`Enter Full Screen (F)`, `进入全屏模式（F）`],
  [`Enterprise`, `企业`],
  [`Essential Keyboard Shortcuts`, `必备键盘快捷键`],
  [`Essential`, `必备`],
  [`Events`, `活动`],
  [`Everything in Professional, plus...`, `专业版的所有功能，加上…`],
  [`Exclude Selection`, `差集所选项`],
  [`Exclusion`, `排除`],
  [`Explore libraries...`, `查看资源库…`],
  [`Explore`, `探索`],
  [`Export Frames to PDF…`, `导出画框为 PDF…`],
  [`Export Settings`, `导出设置`],
  [`Export…`, `导出…`],
  [`Export`, `导出`],
  [`Exposure`, `曝光`],
  [`Family`, `字体`],
  [`Favorite`, `收藏`],
  [`Featured Plugins`, `精选插件`],
  [`Features`, `功能`],
  [`Figma Catan (Playable)`, `Figma 卡坦岛 (可玩)`],
  [`Figma Multiplayer Dice Games!`, `Figma 多人骰子游戏！`],
  [`Figma Organization`, `Figma 组织`],
  [`File Contributions`, `文件贡献`],
  [`File deleted forever`, `文件已永久删除`],
  [`File deleted`, `文件已删除`],
  [`File duplicated to your drafts`, `文件已创建副本到你的草稿`],
  [`File duplicated to your Drafts`, `文件已创建副本到你的草稿`],
  [`File name`, `文件名`],
  [`File not found`, `找不到文件`],
  [`File`, `文件`],
  [`Files with edit access`, `有编辑权限的文件`],
  [`Files`, `文件`],
  [`Fill – Scale down or up to fill`, `填充 - 缩小或放大以填充`],
  [`Fill`, `填充`],
  [`Find Next Frame`, `查找下一个画框`],
  [`Find Previous Frame`, `查找上一个画框`],
  [`Finish setup`, `完成设置`],
  [`Fit – Scale down to fit`, `适应 - 缩小以适应`],
  [`Fit`, `适应`],
  [`Fix position when scrolling`, `滚动时保持固定`],
  [`Fixed Size`, `固定大小`],
  [`Fixed Width`, `固定宽度`],
  [`Flag as inappropriate...`, `标记滥用...`],
  [`Flatten Selection`, `拼合所选项`],
  [`Flatten`, `拼合`],
  [`Flip Horizontal`, `水平翻转`],
  [`Flip Objects While Resizing`, `调整大小时翻转对象`],
  [`Flip Vertical`, `垂直翻转`],
  [`Follow`, `关注`],
  [`Follower`, ` 关注者`],
  [`Followers`, ` 关注者`],
  [`Following`, `正在关注`],
  [`Fonts`, `字体`],
  [`for all files in your Drafts.`, `给所有草稿里的文件。`],
  [`Fraction Denominators`, `分数分母`],
  [`Fraction Numerators`, `分数数字`],
  [`Fractions`, `分数`],
  [`Frame Outlines`, `画框轮廓`],
  [`Frame Selection`, `添加画框`],
  [`Frame Tool`, `画框工具`],
  [`Frame`, `画框`],
  [`Free for students and educators`, `学生和教育工作者免费`],
  [`Free`, `免费`],
  [`Frequently Used`, `常用`],
  [`Full Widths`, `全宽`],
  [`Fun Activities`, `趣味活动`],
  [`Get Desktop App`, `下载桌面版应用`],
  [`Get Help`, `获取帮助`],
  [`Get started with your team's design system by creating libraries of shared colors, styles, and components. This project already has a set of colors published to your team.`, `通过创建共享的颜色、样式和组件库，开始使用你的团队设计系统。这个项目已经有一套颜色发布给你的团队。`],
  [`Give feedback, ask a question, or just leave a note of appreciation. Click anywhere in the file to leave a comment.`, `给予反馈，提出问题，或只是留下鼓励的话。点击文件中的任意位置，即可留下评论。`],
  [`Go to Master Component`, `转到主组件`],
  [`Gold`, `金色`],
  [`Got it`, `好的`],
  [`Grab a color from elsewhere without losing your flow`, `从任意位置抓取颜色而不中断工作流`],
  [`Graphic Design`, `视觉设计`],
  [`Grid`, `网格`],
  [`Group Selection`, `添加编组`],
  [`Group`, `分组`],
  [`Gutter`, `间距`],
  [`Half Widths`, `半宽`],
  [`Hand Tool`, `抓手工具`],
  [`Hard Light`, `强光`],
  [`Height`, `高`],
  [`Help & Resources`, `帮助和资源`],
  [`Help and Account`, `帮助和账户`],
  [`Help Center`, `帮助中心`],
  [`Help Page`, `帮助页面`],
  [`Help people discover your file:`, `帮助大家找到你的文件：`],
  [`Help`, `帮助`],
  [`Hide Canvas UI During Changes`, `在更改期间隐藏画布 UI`],
  [`Hide Other Layers`, `隐藏其余图层`],
  [`Hide Version History`, `退出历史版本`],
  [`Highlight Layers on Hover`, `突出显示悬停图层`],
  [`Highlights`, `高光`],
  [`Horizontal & Vertical Scrolling`, `水平 & 垂直滚动`],
  [`Horizontal Padding`, `水平间距`],
  [`Horizontal Scrolling`, `水平滚动`],
  [`Horizontal spacing`, `水平间距`],
  [`Horizontal`, `水平`],
  [`Hue`, `色相`],
  [`If you are an admin of a Starter Team, you can upgrade it to an Education Team. Just choose the "Education Plan” when upgrading your team.`, `如果你是入门版团队的管理员，你可以将其升级为教育团队。只要在升级团队时选择 "教育计划 "即可。`],
  [`Ignore Constraints (Frames Only)`, `忽略约束（仅画框）`],
  [`Image`, `图片`],
  [`Import`, `导入`],
  [`In Development`, `正在开发`],
  [`Inactive`, `不活跃`],
  [`Increase Font Size`, `增大字号`],
  [`Increase Font Weight`, `增大字重`],
  [`Increase Letter Spacing`, `增大字间距`],
  [`Increase Line Height`, `增大行高`],
  [`Independent Corners`, `独立圆角`],
  [`Inner Shadow`, `内阴影`],
  [`Inside`, `内部`],
  [`Install Font Helper`, `安装字体帮助程序`],
  [`Install`, `安装`],
  [`Installed`, `已安装`],
  [`Installs`, `安装`],
  [`Instance`, `组件实例`],
  [`Instant`, `即时`],
  [`Integrations`, `集成`],
  [`Interaction`, `交互`],
  [`Intersect Selection`, `交集所选项`],
  [`Invert Zoom Direction`, `反转缩放方向`],
  [`Invite Members`, `邀请成员`],
  [`Invite someone…`, `邀请某人…`],
  [`Invite team members`, `邀请团队成员`],
  [`Invite-only Private Projects`, `仅限受邀的私人项目`],
  [`Invite`, `邀请`],
  [`Italic`, `斜体`],
  [`Join Selection`, `连接所选项`],
  [`Join`, `节点`],
  [`Keep Tool Selected after Use`, `使用后保持工具选择`],
  [`Kerning Pairs`, `字偶距`],
  [`Key/Gamepad`, `键盘/游戏手柄`],
  [`Keyboard Shortcuts`, `键盘快捷键`],
  [`Keyboard Zooms into Selection`, `键盘缩放所选项`],
  [`Landscape`, `横屏`],
  [`Last Active`, `最近更新`],
  [`Last activity`, `最近更新`],
  [`Last modified`, `最后修改`],
  [`Last viewed`, `最近浏览`],
  [`Layer Blur`, `图层模糊`],
  [`Layer`, `图层`],
  [`Layers Panel`, `图层面板`],
  [`Layers`, `图层`],
  [`Layout Grid`, `布局网格`],
  [`Layout Grids`, `布局网格`],
  [`Learn more about team plans`, `了解更多关于团队计划的信息`],
  [`Learn more…`, `了解更多…`],
  [`Learn more...`, `了解更多…`],
  [`Learn more`, `了解更多`],
  [`Leave`, `离开`],
  [`Left & Right`, `左侧 & 右侧`],
  [`Left`, `左侧`],
  [`Legal Summary`, `法律文件`],
  [`Letter case`, `字母大小写`],
  [`Letter Spacing`, `字间距`],
  [`Letterforms`, `字母形式`],
  [`Libraries`, `资源库`],
  [`Library`, `资源库`],
  [`License`, `授权`],
  [`Ligatures`, `连字`],
  [`Lighten`, `变亮`],
  [`Liked plugin!`, `已点赞插件！`],
  [`Likes`, `喜欢`],
  [`Line Arrow`, `线性箭头`],
  [`Line Height`, `行高`],
  [`Line Tool`, `直线工具`],
  [`Line`, `直线`],
  [`Linear`, `线性渐变`],
  [`Link copied to clipboard`, `链接已复制到剪贴板`],
  [`Link to selected frame`, `链接到已选中的画框`],
  [`Local Colors`, `本地颜色`],
  [`Local components`, `本地组件`],
  [`Local Styles`, `本地样式`],
  [`Lock/Unlock Selection`, `锁定/解锁所选项`],
  [`Lock/Unlock`, `锁定/解锁`],
  [`Log Out`, `退出`],
  [`Log out`, `退出`],
  [`Lower Case`, `小写`],
  [`Luminosity`, `明度`],
  [`Manage Slack Notifications`, `管理 Slack 通知`],
  [`Manual`, `手动`],
  [`Margin`, `边距`],
  [`Mark all as read`, `全部标记为已读`],
  [`Mask Outlines`, `蒙版轮廓`],
  [`Mask`, `蒙版`],
  [`Master Component`, `主组件`],
  [`Measure to Selection`, `测量到所选项的距离`],
  [`Meeting notes`, `会议记录`],
  [`Members`, `成员`],
  [`Midnight Green`, `午夜绿`],
  [`Missing Fonts`, `找不到字体`],
  [`Miter Angle`, `斜度`],
  [`Mixed`, `多个值`],
  [`Model`, `型号`],
  [`Monthly Plan`, `月付计划`],
  [`More features`, `更多功能`],
  [`More`, `更多`],
  [`Mouse Down`, `按下鼠标时`],
  [`Mouse Enter`, `鼠标进入`],
  [`Mouse Leave`, `鼠标离开`],
  [`Mouse Up`, `释放鼠标时`],
  [`Move Down`, `下移`],
  [`Move In`, `移入`],
  [`Move Out`, `移出`],
  [`Move to Page`, `移到页面`],
  [`Move to Project…`, `移动到项目…`],
  [`Move to Project...`, `移动到项目…`],
  [`Move to Project`, `移动到项目`],
  [`Move Tool`, `移动工具`],
  [`Move Tools`, `移动工具`],
  [`Move Up`, `上移`],
  [`Move While Resizing`, `调整大小时移动`],
  [`Move`, `移动`],
  [`Multiplayer Cursors`, `多人鼠标指针`],
  [`Multiply`, `正片叠底`],
  [`Name your team`, `给团队取个名字`],
  [`Name`, `名字`],
  [`Navigate To`, `导航到`],
  [`New File`, `新建文件`],
  [`New from Sketch File…`, `从 Sketch 文件新建…`],
  [`New Page`, `新建页面`],
  [`New Project`, `新建项目`],
  [`New Team…`, `新建团队…`],
  [`New Team...`, `新建团队...`],
  [`New`, `新建`],
  [`Next Page`, `下一页`],
  [`No files yet`, `还没有文件`],
  [`No results found`, `没有找到结果`],
  [`No Scrolling`, `无滚动`],
  [`No selected layers have export settings. Click + in the export section of the properties panel to add one.`, `选中的图层都没有设置导出。在属性面板的导出部分点击 + 来添加一个。`],
  [`No updates available`, `无可用更新`],
  [`None`, `无`],
  [`Normal`, `正常`],
  [`Nothing liked yet`, `没有喜欢任何内容`],
  [`Nothing published yet`, `没有发布任何内容`],
  [`Notifications`, `通知`],
  [`Nudge Amount…`, `单位微调…`],
  [`Nudge Amount`, `单位微调`],
  [`Numbers`, `数字`],
  [`Object`, `对象`],
  [`Offset`, `偏置`],
  [`On Click`, `单击`],
  [`On Drag`, `拖动`],
  [`On Tap`, `轻触`],
  [`Only members of Professional Teams can publish components to a shared library. Create a new team or join an existing team to use this feature.`, `只有专业团队的成员才能将组件发布到共享库中。创建一个新的团队或加入一个现有的团队来使用此功能。`],
  [`Only people invited to this file`, `只有被邀请的人`],
  [`Only yours `, `仅我的`],
  [`Only yours`, `仅我的`],
  [`Open Admin Dashboard`, `打开管理员仪表盘`],
  [`Open Assets Panel`, `打开资源面板`],
  [`Open Code Panel`, `打开代码面板`],
  [`Open Design Panel`, `打开设计面板`],
  [`Open Font Settings`, `打开字体设置`],
  [`Open in Desktop App`, `在桌面应用中打开`],
  [`Open in Editor`, `在编辑器中打开`],
  [`Open in New Tab`, `在新标签页中打开`],
  [`Open Layers Panel`, `打开图层面板`],
  [`Open Link`, `打开链接`],
  [`Open Links in Desktop App`, `在桌面应用打开链接`],
  [`Open original file`, `打开原始文件`],
  [`Open Overlay`, `打开叠加`],
  [`Open Prototype Panel`, `打开原型面板`],
  [`Open`, `打开`],
  [`Options`, `选项`],
  [`or`, `或者`],
  [`Order`, `顺序`],
  [`Org-wide Design Systems`, `全组织的设计系统`],
  [`Organization`, `团队版`],
  [`Original Case`, `恢复初始状态`],
  [`Other options`, `其他选项`],
  [`Others`, `其他人`],
  [`Outline Stroke`, `边框轮廓化`],
  [`Outlines`, `轮廓`],
  [`Outside`, `外部`],
  [`Overflow Behavior`, `溢出行为`],
  [`Overlay`, `叠加`],
  [`owner`, `所有者`],
  [`Pack Horizontal`, `水平贴合`],
  [`Pack Vertical`, `垂直贴合`],
  [`Pages`, `页面`],
  [`Paint Bucket`, `颜料桶`],
  [`Pan`, `抓手`],
  [`Panels`, `面板`],
  [`Paragraph Indent`, `段落缩进`],
  [`Paragraph Spacing`, `段落间距`],
  [`Pass Through`, `穿透`],
  [`Password`, `密码`],
  [`Paste and Match Style`, `粘贴并匹配样式`],
  [`Paste Over Selection`, `粘贴至所选位置`],
  [`Paste Properties`, `粘贴属性`],
  [`Paste`, `粘贴`],
  [`Pen Tool`, `钢笔工具`],
  [`Pen`, `钢笔`],
  [`Pencil Tool`, `铅笔工具`],
  [`Pencil`, `铅笔`],
  [`People who have edited this project will appear here.`, `编辑过这个项目的人将出现在这里。`],
  [`People`, `人员`],
  [`per Editor when billed annually`, `每个编辑者（年付）`],
  [`per Editor, annual billing only`, `每个编辑者（仅限年付）`],
  [`Permissions`, `授权`],
  [`Personal access tokens allow you to access your own data via the API. Do not give out your personal access tokens to anybody who you don't want to access your files.`, `个人访问令牌允许你通过API访问你自己的数据。请不要将你的个人访问令牌提供给任何你不想访问你的文件的人。`],
  [`Personal Access Tokens`, `个人访问令牌`],
  [`Pick Color`, `吸取颜色`],
  [`Pin to Project`, `Pin 到项目`],
  [`Pixel Grid`, `像素网格`],
  [`Pixel Preview`, `像素预览`],
  [`Place Image`, `放置图片`],
  [`Planning and Retros`, `规划和回溯`],
  [`Plugin Administration`, `插件管理`],
  [`Plugin Installed`, `插件安装完成`],
  [`Plugin`, `插件`],
  [`Plugins`, `插件`],
  [`Polygon`, `多边形`],
  [`Popular`, `流行`],
  [`Portrait`, `竖屏`],
  [`Position`, `位置`],
  [`Post`, `确定`],
  [`Preferences`, `偏好设置`],
  [`Present`, `演示`],
  [`Preserve scroll position`, `滚动时固定位置`],
  [`Press it now to quickly hide the panes and focus on your work`, `现在按下它可以快速隐藏面板，专注于你的工作`],
  [`Preview as a`, `预览形式`],
  [`Preview`, `预览`],
  [`Previous Page`, `上一页`],
  [`Pricing FAQ`, `价格常见问题`],
  [`Pricing`, `定价`],
  [`Privacy`, `隐私`],
  [`Private Plugins`, `私有插件`],
  [`Professional`, `专业版`],
  [`Project name`, `项目名称`],
  [`Project`, `项目`],
  [`Projects with edit access`, `有编辑权限的项目`],
  [`Projects`, `项目`],
  [`Properties`, `属性`],
  [`Proportional Widths`, `变宽`],
  [`Prototype`, `原型`],
  [`prototype`, `原型`],
  [`Prototyping Features`, `原型设计能力`],
  [`Prototyping`, `原型设计`],
  [`Public Profile`, `公开个人主页`],
  [`Public`, `公开`],
  [`Publish a version of this file to the Community for the public to duplicate and remix.`, `向社区发布该文件的一个版本，供大家复制和重新演绎。`],
  [`Publish File`, `发布文件`],
  [`Publish Library`, `发布资源库`],
  [`Publish Styles & Components`, `发布样式和组件`],
  [`Publish Styles and Components`, `发布样式和组件`],
  [`Publish to Community`, `发布到社区`],
  [`Publish update...`, `发布更新…`],
  [`Publish...`, `发布…`],
  [`Publish`, `发布`],
  [`Published`, `已发布时间`],
  [`Publisher`, `发布者`],
  [`Push Overrides to Master`, `覆盖主组件`],
  [`Push`, `推动`],
  [`Radial`, `径向渐变`],
  [`Rare Ligatures`, `罕见的连字`],
  [`Rasterize Selection`, `像素化所选项`],
  [`Ready to upgrade your plan?`, `准备升级你的计划？`],
  [`Recent Contributors`, `最近贡献者`],
  [`Recent Projects`, `近期项目`],
  [`Recent`, `最近`],
  [`Recently viewed`, `最近浏览`],
  [`Rectangle Tool`, `矩形工具`],
  [`Rectangle`, `矩形`],
  [`Redo`, `重做`],
  [`Region Tools`, `区域工具`],
  [`Related components`, `相关组件`],
  [`Release Notes`, `版本说明`],
  [`Releases`, `版本`],
  [`Relevance`, `相关`],
  [`Remote Design Sprinting (RDS)`, `远程设计冲刺（RDS）`],
  [`Remote Design`, `远程设计`],
  [`Remove Auto Layout`, `移除自动布局`],
  [`Remove Fill`, `移除填充`],
  [`Remove from Favorites`, `从收藏夹中移除`],
  [`Remove from library`, `从资源库移除`],
  [`Remove from Pinned`, `从 Pin 里移除`],
  [`Remove from Recent`, `从最近中移除`],
  [`Remove Stroke`, `移除边框`],
  [`Remove`, `移除`],
  [`remove`, `移除`],
  [`Removing a connection`, `删除连接`],
  [`Rename Duplicated Layers`, `重命名已创建的副本图层`],
  [`Rename Page`, `重命名页面`],
  [`Rename Selection`, `重命名所选项`],
  [`Rename`, `重命名`],
  [`Replace Fonts`, `替换字体`],
  [`Reply`, `回复`],
  [`Resend invite`, `重新发送邀请`],
  [`Reset Instance`, `重置组件实例`],
  [`Reset Onboarding`, `重置新手引导`],
  [`Resize from Center`, `从中心调整大小`],
  [`Resize Proportionally`, `按比例调整大小`],
  [`Resize to Fit`, `缩放以适应大小`],
  [`Resizing`, `调整大小`],
  [`Resolve`, `解决`],
  [`Resource Use`, `资源使用`],
  [`Resources`, `资源`],
  [`Restart (R)`, `重新开始（R）`],
  [`Restore Default Thumbnail`, `恢复默认封面`],
  [`Restore Master Component`, `恢复主组件`],
  [`Restore`, `恢复`],
  [`Return to instance`, `返回实例`],
  [`Revoke access`, `撤销访问`],
  [`Right`, `右侧`],
  [`Rotate 180°`, `旋转 180°`],
  [`Rotate 90° Left`, `向左旋转 90°`],
  [`Rotate 90° Right`, `向右旋转 90°`],
  [`Rotation`, `旋转`],
  [`Round to Pixel`, `契合像素`],
  [`Round`, `圆头`],
  [`Rows`, `行`],
  [`Rulers`, `标尺`],
  [`Running your prototype`, `启动你的原型`],
  [`Saturation`, `饱和度`],
  [`Save 20%`, `节省 20%`],
  [`Save as .fig…`, `另存为 .fig 文件…`],
  [`Save to Version History…`, `保存至历史版本…`],
  [`Save`, `保存`],
  [`Scale`, `缩放`],
  [`Screen`, `滤色`],
  [`Search through all of Figma’s commands`, `搜索 Figma 的所有命令`],
  [`Search…`, `搜索…`],
  [`Search`, `搜索`],
  [`seat/month`, `席位/月`],
  [`Security`, `安全`],
  [`See all`, `查看全部`],
  [`See edit permissions`, `查看编辑权限`],
  [`See what's being created in Figma`, `看看 Figma 里面正在创建什么`],
  [`Select a frame or object in a frame and use the circular node to drag a connection to another frame.`, `选择一个画框或一个画框中的对象，然后使用圆形节点将连接拖动到另一个画框。`],
  [`Select All with Same Effect`, `选择全部相同效果`],
  [`Select All with Same Fill`, `选择全部相同填充颜色`],
  [`Select All with Same Font`, `选择全部相同字体`],
  [`Select All with Same Instance`, `选择全部相同组件实例`],
  [`Select All with Same Properties`, `选择全部相同属性`],
  [`Select All with Same Stroke`, `选择全部相同边框`],
  [`Select All with Same Text Properties`, `选择全部相同文本属性`],
  [`Select All`, `全选`],
  [`Select Child`, `选择子元素`],
  [`Select Inverse`, `反选`],
  [`Select Layer Menu`, `选择图层菜单`],
  [`Select Layer`, `选择图层`],
  [`Select Next Sibling`, `选择下一个同级元素`],
  [`Select None`, `取消选择`],
  [`Select Parents`, `选择父元素`],
  [`Select Previous Sibling`, `选择上一个同级元素`],
  [`Select which comment threads on this file you'll receive emails and notifications for.`, `选择这个文件中的哪些评论主题，你将收到电子邮件和通知。`],
  [`Selection Colors`, `选择的颜色`],
  [`Selection`, `选择`],
  [`Send Backward`, `下移一层`],
  [`Send Invite `, `发送邀请 `],
  [`Send Invite`, `发送邀请`],
  [`Send to Back`, `移到底层`],
  [`Set as Thumbnail`, `设置为封面`],
  [`Set Default Properties`, `设置默认属性`],
  [`Set Opacity to 10%`, `设置不透明度为 10%`],
  [`Set Opacity to 100%`, `设置不透明度为 100%`],
  [`Set Opacity to 50%`, `设置不透明度为 50%`],
  [`Set profile handle`, `设置个人主页地址`],
  [`Settings`, `设置`],
  [`Shadows`, `阴影`],
  [`Shape Tools`, `形状工具`],
  [`Shape`, `形状`],
  [`Sharable Team Libraries`, `可共享的团队资源库`],
  [`Share `, `分享 `],
  [`Share on Facebook`, `分享到 Facebook`],
  [`Share on Twitter`, `分享到 Twitter`],
  [`Share Prototype`, `分享原型`],
  [`Share`, `分享`],
  [`Shared Fonts`, `共享字体`],
  [`Shared Projects`, `共享的项目`],
  [`Shared`, `已共享`],
  [`Show as Grid`, `显示为网格`],
  [`Show as List`, `显示为列表`],
  [`Show Assets`, `显示资源`],
  [`Show Dimensions on Objects`, `在对象上显示尺寸`],
  [`Show Google Fonts`, `显示谷歌字体`],
  [`Show Hotspot Hints on Click`, `点击时显示热区提示`],
  [`Show in exports`, `在导出中显示`],
  [`Show in Files`, `在文件中显示`],
  [`Show in Project`, `在项目中显示`],
  [`Show Left Sidebar`, `显示左侧边栏`],
  [`Show Multiplayer Cursors`, `显示多用户鼠标指针`],
  [`Show Only Your Comments`, `只显示你的评论`],
  [`Show Prototype Settings`, `显示原型设置`],
  [`Show resolved comments`, `显示已解决的评论`],
  [`Show Resolved Comments`, `显示已解决的评论`],
  [`Show Selection Colors`, `显示所选项的颜色`],
  [`Show Toolbar and Footer`, `显示工具条和页脚`],
  [`Show Version History`, `查看版本历史`],
  [`Show/Hide Selection`, `显示/隐藏所选项`],
  [`Show/Hide UI`, `显示/隐藏界面`],
  [`Show/Hide`, `显示/隐藏`],
  [`Show`, `显示`],
  [`Silver`, `银色`],
  [`Simple Kanban Template`, `简易看板模板`],
  [`Size`, `尺寸`],
  [`Skip for now`, `暂时跳过`],
  [`Slice Tool`, `切片工具`],
  [`Slice`, `切片`],
  [`Slide In`, `滑入`],
  [`Slide Out`, `滑出`],
  [`Small nudge`, `小微调`],
  [`Smart Animate matching layers`, `智能动画匹配图层`],
  [`Smart Animate`, `智能动画`],
  [`Smooth Join Selection`, `平滑连接所选项`],
  [`Snap to Geometry`, `对齐到几何`],
  [`Snap to Objects`, `对齐到对象`],
  [`Snap to Pixel Grid`, `对齐到像素`],
  [`Soft Light`, `柔光`],
  [`Solid`, `纯色`],
  [`Sort by`, `排序方式`],
  [`Space Grey`, `深空灰`],
  [`Spacing Between Items`, `项目间距`],
  [`Square`, `方头`],
  [`SSO + Advanced Security`, `SSO + 高级安全`],
  [`Star`, `星形`],
  [`Starter Team`, `入门版团队`],
  [`Starter`, `入门版`],
  [`Starting Frame`, `起始画框`],
  [`Status`, `状态`],
  [`Stretch Left and Right`, `左右拉伸`],
  [`Stretch`, `伸展`],
  [`Strikethrough`, `删除线`],
  [`Stroke`, `边框`],
  [`Students and Educators`, `学生和教育工作者`],
  [`Style`, `样式`],
  [`Styles and Components`, `样式和组件`],
  [`Stylistic sets`, `风格设置`],
  [`Substitute Smart Quotes`, `智能引号替换`],
  [`Subtract Selection`, `减去顶层所选项`],
  [`Suffix`, `后缀`],
  [`Support`, `支持`],
  [`Swap Component Instance`, `交换组件实例`],
  [`Swap Fill and Stroke`, `交换填充和边框`],
  [`Swap Instance`, `交换实例`],
  [`Swap With`, `交换到`],
  [`Tags`, `标签`],
  [`Team Brainstorm Template`, `团队头脑风暴模板`],
  [`Team library is a Professional plan-only feature`, `团队资源库是专业版计划才有的功能`],
  [`Team Library`, `团队资源库`],
  [`Team name`, `团队名称`],
  [`Team Profile Handle`, `团队主页地址`],
  [`Team Retrospective Template`, `团队回顾模板`],
  [`Team Templates`, `团队模板`],
  [`Teams`, `团队`],
  [`Temperature`, `白平衡`],
  [`Templates`, `模板`],
  [`Text Align Bottom`, `底部对齐`],
  [`Text Align Center`, `水平居中`],
  [`Text Align Justified`, `两端对齐`],
  [`Text Align Left`, `左对齐`],
  [`Text Align Middle`, `垂直居中`],
  [`Text Align Right`, `右对齐`],
  [`Text Align Top`, `顶部对齐`],
  [`Text Styles`, `文本样式`],
  [`Text Tool`, `文本工具`],
  [`Text`, `文本`],
  [`The document has unsaved changes. Reconnecting...`, `此文档有未保存的改动。正在重新连接…`],
  [`The following apps have been given permission to access your Figma files on your behalf. If you see any apps you're not expecting here, remove their permissions below.`, `以下应用程序已被授予代表你访问 Figma 文件的权限。如果你在这里看到任何你不希望看到的应用程序，请在下面删除其权限。`],
  [`The following fonts are not available, and need to be replaced in order to edit text.`, `以下字体不可用，需要被替换才能编辑文本。`],
  [`There are no published styles in your drafts.`, `你的草稿中没有已发布的样式。`],
  [`This file`, `当前文件`],
  [`This is a Figma Community profile.`, `这是 Figma 社区的个人主页。`],
  [`This is a Figma Community resource file.`, `这是一个 Figma 社区源文件。`],
  [`This is the Figma Community.`, `这是 Figma 社区。`],
  [`This is your team's workspace. Create projects to help organize your files and invite members to your team to start collaborating. Click here to edit this description.`, `这是你的团队工作空间。创建项目来帮助组织你的文件，并邀请成员到你的团队来开始协作。点击这里来编辑这个简介。`],
  [`This person can still edit, because the file is set to allow editing by anybody with the link.`, `这个人仍然可以编辑，因为文件被设置为任何有链接的人都可以编辑。`],
  [`This project doesn't have any files.`, `这个项目没有任何文件。`],
  [`This team is for Education users only. New users will be required to verify their Education Status.`, `这个团队只针对教育用户。新用户需要验证其教育状态。`],
  [`Thumbnail set`, `已设置为封面`],
  [`Thumbnail Size: 1920x960 (1600x960 safe area) `, `封面尺寸：1920x960（1600x960 安全区域）`],
  [`Tidy Up`, `整理`],
  [`Tile`, `平铺`],
  [`Tint`, `着色`],
  [`To confirm, please enter the name of the team.`, `确认删除，请输入团队名称。`],
  [`To create a component, select a layer and click the "Create Component" button in the toolbar.`, `创建组件，请选择一个层，然后单击工具栏中的「创建组件」按钮。`],
  [`To delete a connection, click and drag on either end.`, `要删除连接，请在任一端点单击并拖动。`],
  [`To publish as a Team, move this file out of drafts and into a Team project.`, `如需以团队身份发布，请将此文件从草稿移动到团队项目中。`],
  [`Today`, `今天`],
  [`Tools`, `工具`],
  [`Top & Bottom`, `顶部 & 底部`],
  [`Top Center`, `顶部中间`],
  [`Top Left`, `顶部左侧`],
  [`Top Right`, `顶部右侧`],
  [`Top`, `顶部`],
  [`Touch Down`, `触摸按下`],
  [`Touch Up`, `触摸离开`],
  [`Transform`, `变形`],
  [`Triangle Arrow`, `三角箭头`],
  [`Try now`, `立即重试`],
  [`Type Details`, `字体详情`],
  [`Type something to start searching...`, `输入点东西开始搜索…`],
  [`Type`, `类型`],
  [`Uh oh... we can't open that file`, `抱歉… 我们打不开那个文件`],
  [`UI Design`, `UI 设计`],
  [`Unable to follow this profile: You're already following this user`, `无法关注这个个人主页：你已经关注这个用户了`],
  [`Unable to install plugin. Please try again.`, `无法安装插件，请重试。`],
  [`Underline`, `下划线`],
  [`Undo`, `撤销`],
  [`Unfollow`, `取消关注`],
  [`Ungroup Selection`, `取消编组所选项`],
  [`Ungroup`, `取消编组`],
  [`Uninstall`, `卸载`],
  [`Uninstalled`, `已卸载`],
  [`Union Selection`, `连集所选项`],
  [`Unliked`, `已取消点赞`],
  [`Unlimited Projects`, `无限制的项目`],
  [`Unlimited version history is available to paid teams.`, `收费团队版可以使用无限的历史版本`],
  [`Unlimited Version History`, `无限制的版本历史`],
  [`Unlimited`, `无限制`],
  [`Unpublish`, `取消发布`],
  [`Update all`, `全部更新`],
  [`Updates to components or styles`, `更新组件或样式`],
  [`Updates`, `更新`],
  [`Upgrade now`, `马上升级`],
  [`Upgrade Plan`, `升级计划`],
  [`Upgrade team`, `升级团队`],
  [`Upgrade this team to publish components to the Team Library and use them across all files.`, `升级团队，就可以将组件发布到团队资源库，且跨文件使用。`],
  [`Upgrade to collaborate and share design libraries with your entire team.`, `升级以与你的团队进行协作并共享设计资源库。`],
  [`Upgrade to collaborate with more teammates`, `升级后可与更多队友合作`],
  [`Upgrade to Professional`, `升级到专业版`],
  [`Upgrade your plan to take full advantage of Figma. `, `升级你的计划以便获取 Figma 全部功能。`],
  [`Upgrade`, `升级`],
  [`Upper Case`, `大写`],
  [`Use as Mask`, `设为蒙版`],
  [`Use Cases`, `使用案例`],
  [`Use libraries for quick access to components from other files.`, `使用库可以快速访问其他文件中的组件。`],
  [`Use Number Keys for Opacity`, `使用数字控制透明度`],
  [`Use Shape Outlines`, `使用形状轮廓`],
  [`Use the play button in the toolbar to play your prototype. If there are no connections, the play button can be used to play a presentation of your frames.`, `使用工具栏中的演示按钮演示原型。 如果没有连接，“演示”按钮将演示你的画框用于演示。`],
  [`UX Design`, `UX 设计`],
  [`Vector`, `矢量`],
  [`Version History `, `版本历史 `],
  [`Version History`, `版本历史`],
  [`Version history`, `版本历史`],
  [`versions`, `版本`],
  [`Vertical Padding`, `垂直间距`],
  [`Vertical Scrolling`, `垂直滚动`],
  [`Vertical`, `垂直`],
  [`Video Tutorials`, `视频教程`],
  [`View Community page`, `查看社区页面`],
  [`View page`, `查看页面`],
  [`View Profile`, `查看个人主页`],
  [`View`, `查看`],
  [`Viewer permission changed`, `查看者权限已修改`],
  [`Welcome to Figma Community!`, `欢迎来到 Figma 社区！`],
  [`What’s New`, `新功能`],
  [`While clicking…`, `点击时…`],
  [`While dragging from Assets…`, `从资源面板拖动时…`],
  [`While dragging to select…`, `拖动并选中时…`],
  [`While editing a shape…`, `编辑形状时…`],
  [`While Hovering`, `当悬停时`],
  [`While moving…`, `移动时…`],
  [`While pointing…`, `指向时…`],
  [`While Pressing`, `当按下时`],
  [`While resizing…`, `调整大小时…`],
  [`Whiteboards and Stickies`, `白板和贴纸`],
  [`Width – Scale down to fit width`, `宽度 - 缩小以适应宽度`],
  [`Width`, `宽`],
  [`will show up here as they become available.`, `可用时将显示在此处`],
  [`Wireframing`, `线框图`],
  [`You are a verified Education user!`, `你已经认证为教育版用户！`],
  [`You can favorite a project and it will be pinned under the team in the left sidebar.`, `你可以收藏一个项目，它就会固定在左侧边栏的团队下面。`],
  [`You can now edit files in any Education Team.`, `你可以在任何一个教育版团队编辑文件。`],
  [`You can update user permissions on the team page after setting up.`, `设置好后可以在团队页面更新用户权限。`],
  [`You can't undo this action.`, `此操作不可撤销。`],
  [`You don't have any deleted files.`, `没有被删除的文件。`],
  [`You don't have any notifications.`, `暂无消息通知。`],
  [`You don't have any plugins installed`, `没有已安装的插件`],
  [`You don't have permission to remove files from this project.`, `你没有权限从这个项目中移除这个文件。`],
  [`You haven't published any plugins yet`, `你还没有发布任何插件`],
  [`You`, `你`],
  [`Your file will soon be available for everyone in the Community to duplicate, remix, and share. Thanks for your contribution. You rock.`, `你的文件很快就会被社区中的每个人复制、重新演绎和分享。感谢你的贡献。你是最棒的。`],
  [`Your new Community profile is live. View your profile to customize it. Everyone can now find you at:`, `你的社区个人主页已经生效。查看你的个人主页来自定义。所有人都能通过以下链接找到你：`],
  [`Your profile is visible to the public at`, `大家可以在这里看到你的个人主页`],
  [`Your Teams and favorited Projects will appear here`, `你的团队和收藏的项目将出现在这里`],
  [`Zoom In`, `放大`],
  [`Zoom in`, `放大`],
  [`Zoom Out`, `缩小`],
  [`Zoom out`, `缩小`],
  [`Zoom to 100%`, `缩放至 100%`],
  [`Zoom to 200%`, `缩放至 200%`],
  [`Zoom to 50%`, `缩放至 50%`],
  [`Zoom to Fit`, `缩放以适应大小`],
  [`Zoom to Next Frame`, `缩放至下一个画框`],
  [`Zoom to Previous Frame`, `缩放至上一个画框`],
  [`Zoom to Selection`, `缩放至选中范围`],
  [`Zoom/View Options`, `缩放/视图选项`],
  [`Zoom`, `缩放`],
]


let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
let MutationObserverConfig = {
  childList: true,
  subtree: true,
  characterData: true
};

let observer = new MutationObserver(function (mutations) {
  let treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    { acceptNode: function (node) { return NodeFilter.FILTER_ACCEPT; } },
    false
  );

  let nodeList = [];
  let currentNode = treeWalker.currentNode;
  while (currentNode) {
    nodeList.push(currentNode);

    // console.log(currentNode.textContent)
    allData.forEach(item => {
      if (currentNode.textContent === item[0]) {
        currentNode.textContent = item[1]
      }

      if (currentNode.parentNode.getAttribute('data-label') == item[0]) {
        currentNode.parentNode.setAttribute('data-label', item[1])
      }
      // if (currentNode.parentNode.placeholder == item[0]) {
      //   currentNode.parentNode.placeholder = item[1]
      // }
    })

    currentNode = treeWalker.nextNode();
  }
});

observer.observe(document.body, MutationObserverConfig);
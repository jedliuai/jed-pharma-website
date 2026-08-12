# Jed 医药国际业务视觉规范

## 品牌资产

- 真实头像：`public/brand/jed-portrait.webp`
- 深色背景手写标识：`public/brand/jed-wordmark-light.png`
- 浅色背景手写标识：`public/brand/jed-wordmark-dark.jpg`
- 微信联系卡：`public/brand/jed-wechat-card.jpg`

所有页面必须使用这些真实资产，不生成替代头像，不重绘 Jed 标识。

## 视觉定位

“专业编辑档案 + 国际项目执行台”。整体需要体现个人可信度、跨地区协作和项目推进能力，而不是制药公司产品目录。

## 色彩

- Ink：`#061325`
- Ink Soft：`#0d2038`
- Navy：`#102a4d`
- Cobalt：`#2659dc`
- Cobalt Bright：`#4d7cff`
- Paper：`#f5f3ed`
- Paper Bright：`#fbfaf6`
- Ice：`#e8edf5`
- Muted：`#617084`

不得新增紫粉渐变、荧光绿或医疗红十字色彩体系。

## 字体

- 展示字体：Newsreader，中文回退为宋体系列
- 正文字体：IBM Plex Sans，中文回退为系统黑体系列
- 标题使用强烈比例差，正文保持克制，最多两套字体体系

## 版式与动效

- 4px 基础间距单位，大区块使用 48–128px 间距
- 以细边框、流程轨道、编号与时间线建立信息秩序
- 圆角只用于按钮、弹窗等必要交互，不使用大面积圆角卡片
- 动效使用 `cubic-bezier(0.22, 1, 0.36, 1)`，并支持 `prefers-reduced-motion`

## 禁止元素

- 握手、胶囊堆叠、医疗十字、发光地球、蓝色连接线
- 虚构工厂、虚构客户、假 Logo 墙、推荐语和无法验证的数据
- 与医药国际业务无关的音乐、教程、短视频、副业和流量项目

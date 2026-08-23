# Design QA — 2026-08-23 单页业务版

## 结论

**PASSED**

新版延续了已确认首页的视觉语言：暖灰纸张底色、深色文字、陶土橙强调色、网格背景、编辑式大标题和“国际项目执行台”窗口系统。页面从原来的多页路由收束为英文与中文两个完整单页，首屏视觉重心、比例与交互节奏均保持一致。

## 对照资料

- 当前线上版首屏：`output/playwright/source-live-desktop.png`
- 新版本地首屏：`output/playwright/new-local-desktop.png`
- 新版桌面端全页：`output/playwright/single-page-desktop-revealed.png`
- 英文移动端：`output/playwright/single-page-mobile-top.png`
- 中文移动端：`output/playwright/chinese-mobile-top.png`
- 移动端菜单：`output/playwright/mobile-menu-open.png`

## 视觉核对

- 首屏：保留 Jed Liu 大字标题与右侧 Project Desk，信息密度和留白与原版同系。
- 品牌：使用 Jed 手写标识、暖灰 / 深褐黑 / 陶土橙 / 小面积钴蓝。
- 模块：流程、市场、数据、工具和产业生态全部使用统一的窗口、编号、细线和节点语言。
- 可读性：大标题尺寸在 390px、1440px 宽度下均无溢出；中文断行正常。
- 真实工具：报价工具使用真实界面；Cockpit 三张图使用统一虚构公司池与合成数据，并标记 DEMO DATA。

## 交互核对

- 导航锚点、英中语言切换正常。
- 移动端菜单可打开、关闭，Esc 键可退出。
- 六阶段流程 Tab 和三张 Cockpit Tab 可点击，支持方向键、Home 与 End。
- 微信弹窗可用键盘关闭，号码公开显示，关闭后焦点回到触发元素。
- WhatsApp、LinkedIn、Email、Quote Tool 和 Contact Card 均使用真实地址。
- `prefers-reduced-motion` 下会停止非必要动画。

## 技术核对

- Astro 类型检查：0 errors / 0 warnings。
- 静态构建只生成 `/`、`/zh/` 两个内容页和一个系统 `404.html`；旧路由不再返回首页 200。
- Chromium 桌面端与移动端控制台：0 errors / 0 warnings。
- Lighthouse 移动端：Performance 99 / Accessibility 96 / Best Practices 100 / SEO 100。
- canonical、hreflang、JSON-LD、sitemap、robots、`llms.txt` 与 `ai-summary.txt` 与新单页结构一致。

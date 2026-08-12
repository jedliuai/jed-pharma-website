# V2 最终修复报告

## 修复摘要

本轮集中修复三项 Important 发现，没有调整页面内容或布局模块：

1. 移动导航改为渐进增强：基础 CSS 在 390px 等移动视口直接展示完整导航；只有 `<head>` 中的早期脚本成功添加 `html.js` 后，才显示菜单按钮并启用折叠全屏菜单。
2. 全屏菜单打开时保存并设置品牌入口、`main`、站点页尾、微信 dialog 等背景区域的 `inert` 状态；Tab/Shift+Tab 在菜单按钮与导航链接间循环。Escape、导航链接、切换按钮和断点清理统一走同一关闭函数，恢复原有 inert 状态并回焦菜单按钮。
3. 保留 `#C95D3A` 作为装饰和大字号强调，新增 `#9B452B` 可访问陶土色，应用于小字号、链接状态、边框和 CTA。设计 token 同步加入 `site.ts`。

## 精确测试与实际输出

- `pnpm check`
  - Astro 检查 33 个文件。
  - 结果：0 errors、0 warnings、0 hints，退出码 0。
- `pnpm build`
  - 内部 Astro check：0 errors、0 warnings、0 hints。
  - 静态构建：12 个页面，生成 sitemap，退出码 0；约 11.5 秒完成，未触发 120 秒 concern。
- `git diff --check`
  - 无空白错误；仅有 Windows 工作树 LF/CRLF 提示。
- 390px 导航基础状态（浏览器计算样式，移除增强标记模拟无 JS）：
  - `htmlJs=false`、`navDisplay=flex`、`navPosition=static`、7 个导航/语言链接、`toggleDisplay=none`。
- 390px 增强菜单焦点隔离：
  - 打开后 `mainInert=true`、`footerInert=true`、`dialogInert=true`、`brandInert=true`。
  - Shift+Tab 从菜单按钮回绕至最后的语言链接；Tab 再回绕到菜单按钮。
  - Escape 后菜单按钮 `aria-expanded=false` 且重新获得焦点；上述所有 inert 状态恢复为 false。
- 浏览器计算颜色与 WCAG 对比度：
  - 小字号 `.home-v2-pill`：`rgb(155, 69, 43)` 对 `#F2EDE3`，5.488:1。
  - 主 CTA：`rgb(255, 250, 242)` 对 `rgb(155, 69, 43)`，6.161:1。
  - 两项均超过普通文本 AA 的 4.5:1。

## 变更文件

- `src/layouts/BaseLayout.astro`
- `src/components/SiteHeader.astro`
- `src/config/site.ts`
- `src/styles/global.css`
- `.superpowers/sdd/IMPLEMENTATION_PLAN_V2/final-fix-report.md`

## 自审与风险

- 桌面导航保持原有 flex 布局，折叠规则仅位于移动断点且仅在 `html.js` 下启用。
- 背景隔离不改变微信 dialog 自身逻辑；菜单关闭后恢复每个元素进入菜单前的 inert 值，而不是一律清空。
- `#C95D3A` 仍用于线条、光晕、圆点、引号以及大字号数字/标题；普通小字号和交互态改用深色 token。
- 未修改或暂存 `.superpowers/sdd/IMPLEMENTATION_PLAN_V2/progress.md`、任何 QA helper 脚本或任务外资产。
- Concern：无。

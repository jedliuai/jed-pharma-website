# Task 1 实施报告：设计基础、双语内容与共享组件

## 改动摘要

- 建立 V2 视觉基础：暖象牙白 `#F2EDE3`、近黑棕 `#2B211C`、陶土橙 `#C95D3A`、钴蓝 `#1F55B5`，并补充细技术网格、克制纸张颗粒、层级线条与共享间距/圆角/动效变量。
- 沿用项目内自托管的 Newsreader 与 IBM Plex Sans，新增紧凑等宽元数据 fallback，统一标题、正文、编号和 eyebrow 的字体职责。
- 引入 `astro-icon` + Phosphor 图标集，以 `ProjectIcon.astro` 作为项目唯一图标入口；新增 `ButtonLink.astro` 统一 CTA 结构与变体，替换箭头、菜单、关闭、邮箱、LinkedIn、微信等文字/手绘替代物。
- 重构 `BaseLayout`、`SiteHeader`、`SiteFooter`、`WeChatDialog`、`PageHero`、`SectionHeading`、`ContactBand` 与共享按钮表现，使它们使用 V2 编辑式视觉语言，并保持现有页面接口稳定。
- 将联系渠道数据改为显式英中双语模型，补齐菜单、导航、联系渠道等共享辅助文案；检查源码未发现乱码替代字符或典型错误转码片段。
- 仅对首页做编译与共享组件接入所必需的改动，没有重排首页模块或实现 Task 2 动效/组合。

## 逐条要求映射

1. **UTF-8 双语内容与 12 条路由**：`site.ts` 的联系渠道改为 `Record<Locale, string>`；`copy.ts` 新增英中菜单、导航及联系入口文案；浏览器实测 `/contact/` 与 `/zh/contact/` 文案和语言切换正确；构建输出保留 6 条英文和 6 条中文路由。
2. **V2 设计 tokens 与基础**：`global.css` 与 `site.ts` 使用四个指定色值；自托管 Newsreader/IBM Plex Sans 保持不变，增加 `--font-meta`；全局背景加入 4.5rem 细网格和低透明度纸张颗粒。
3. **共享组件重构**：完成 BaseLayout、页头、页尾、微信弹窗、共享按钮、PageHero、SectionHeading 和 ContactBand；视觉采用参考图的暖纸底、棕黑排版、陶土强调、钴蓝技术编号与细线分隔。
4. **成熟图标库与统一模式**：依赖锁定 `astro-icon@1.1.5`、`@iconify-json/ph@1.2.2`；Astro integration 白名单只打包七个 Phosphor 图标；业务组件统一经 `ProjectIcon.astro` 使用，不含手写 SVG、CSS 图标、emoji 或文字字形替代图标。
5. **SEO/机器可读行为**：保留 canonical、英文/中文/x-default hreflang、OG、Twitter、JSON-LD、sitemap、robots、`llms.txt`、`ai-summary.txt`；仅把 theme-color 同步为暖象牙白并增加 OG alternate locale。构建后抽查中英文 contact HTML 均含完整元信息和 JSON-LD。
6. **页头与微信交互**：桌面导航完整；移动菜单按钮具有动态双语 aria-label、`aria-expanded`、Escape 关闭、焦点返回与响应式清理；微信原生 dialog 支持按钮/键盘打开、关闭按钮、Escape、遮罩关闭及触发器焦点返回。上述路径已在真实浏览器桌面/390px 移动视口验证。
7. **减少动态效果**：保留并复核 `prefers-reduced-motion: reduce` 全局关闭平滑滚动、非必要动画及过渡。
8. **首页边界**：首页只替换共享按钮与图标入口，没有重写模块结构、内容编排或动效。
9. **指定检查**：已运行 `pnpm check` 与 `pnpm build`，结果见下节。
10. **提交与报告**：本报告随 Task 1 源码一起提交到 `codex/editorial-redesign-v2`；Task 2 的 `public/images/` 未跟踪 PNG 未修改、未暂存、未提交。

## 测试命令及实际输出摘要

- `pnpm check`：退出码 0；Astro 检查 33 个文件，0 errors、0 warnings、0 hints。
- `pnpm build`：退出码 0；内部 Astro check 同为 0 errors、0 warnings、0 hints；静态构建完成 12 个页面，生成 `sitemap-index.xml`。
- `git diff --check -- . ':(exclude)public/images'`：无空白错误；仅显示仓库现有 Git 行尾策略的 LF/CRLF 提示。
- UTF-8/图标替代物扫描：源码未发现 `�`、典型错误转码片段、箭头/关闭等文字字形图标或手写 `<svg>`。
- Playwright CLI 实浏览器检查：英文和中文 contact 页面 HTTP 正常且控制台 0 errors；桌面微信弹窗 Escape 后关闭并回焦触发按钮；遮罩点击关闭并回焦；390×844 移动菜单显示完整 6 项导航，Escape 后 `aria-expanded=false`、移除 body 锁定并回焦菜单按钮。

## 涉及文件

- 配置与依赖：`astro.config.mjs`、`package.json`、`pnpm-lock.yaml`
- 内容与模型：`src/config/site.ts`、`src/data/copy.ts`
- 布局与样式：`src/layouts/BaseLayout.astro`、`src/styles/global.css`
- 新增共享组件：`src/components/ProjectIcon.astro`、`src/components/ButtonLink.astro`
- 重构共享组件：`src/components/SiteHeader.astro`、`SiteFooter.astro`、`WeChatDialog.astro`、`PageHero.astro`、`SectionHeading.astro`、`ContactBand.astro`
- 必要接入页面：`src/components/pages/HomePage.astro`、`src/components/pages/ContactPage.astro`
- 记录：本报告及 `worklog/2026-08-12-V2设计基础与共享组件.md`

## 风险与遗留项

- Task 1 没有重写首页组合，因此首页主体仍保留原模块布局；Task 2 应基于本次共享接口完成参考图对应的完整首页构成与动效。
- Phosphor 图标通过 `astro-icon` 在构建时内联，不依赖浏览器端第三方图标 API；若后续新增图标，需要同时更新 `ProjectIconName` 联合类型与 `astro.config.mjs` 白名单。
- `pnpm build` 脚本本身会再次执行 `astro check`，所以最终验证中类型检查实际执行了两次，这是预期行为。

## 自审结果

- 对照 brief 逐条复核：10 项均有代码或测试证据覆盖。
- 路由：构建产物为 12/12，未删除路径。
- SEO：中英文 canonical/hreflang/OG/JSON-LD 均在静态产物中；sitemap、robots、LLM 文本文件存在。
- 隐私：未新增雇主/客户名、合同、价格、批次、付款或非公开注册信息。
- 资产边界：`public/images/` 仍为未跟踪目录，未进入 Task 1 diff、暂存区或提交。
- 视觉：桌面和移动截图人工检查通过，暖纸底、编辑式大标题、陶土/钴蓝强调、品牌字标、细线和图标均正常渲染。
- 代码卫生：`git diff --check` 无错误；未发现乱码或手工图标替代物。

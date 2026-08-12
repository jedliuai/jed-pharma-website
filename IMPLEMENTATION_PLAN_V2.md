# Jed 医药国际业务站 V2 实施计划

## Global Constraints

- 视觉真值：用户确认的第二版修订稿 `design/reference-home-v2.png`。
- 延续 `jedliuai.com` 的暖米色网格、手写 Jed、陶土红按钮与大留白，并吸收 CC Switch 的模块节奏、浮动窗口和克制动效；不得复制其品牌或内容。
- 英文默认、中文位于 `/zh/*`；保留既有六组双语路由。
- 业务内容只围绕医药国际业务、注册与技术协调、项目执行与供应链，以及少量 AI 工作方法。
- 不公开雇主、客户、合同、批次、价格、付款和未公开注册信息；三项指标标记为个人脱敏记录。
- 不使用虚构工厂、握手、医疗十字、药丸堆叠、发光地球、通用 SaaS 卡片墙或无关自媒体内容。
- 使用真实头像、现有 Jed wordmark 与微信联系卡；标准图标来自成熟图标库，不手绘 SVG 或 CSS 图形。
- 所有主要交互支持键盘，微信弹窗可关闭并返回焦点；完整支持 `prefers-reduced-motion`。
- 不修改 `jedliuai.com` 的目录、仓库、域名或部署。

## Task 1: 设计基础、内容模型与共享组件

- 修复并统一 UTF-8 双语文案、站点配置、指标、案例与联系方式。
- 建立 V2 设计 tokens：暖纸面、细网格、近黑棕、陶土红、钴蓝、编辑式衬线与清晰无衬线。
- 重构 BaseLayout、Header、Footer、按钮、微信弹窗与通用页面 Hero。
- 加入成熟图标库并建立可复用图标组件或调用约定。
- 保留 canonical、hreflang、Open Graph、JSON-LD、sitemap 与 robots 能力。
- 验证 `pnpm check` 与 `pnpm build`。

## Task 2: 首页视觉与动效实现

- 按视觉真值实现宽松的 100svh 首屏、项目档案窗口、真人头像与三条手写批注。
- 实现指标档案条、四项专业能力、sticky 项目流程、区域地图、三个横向匿名案例、钴蓝 AI 方法论带、About/Contact 收尾。
- 使用真实或生成的地图和案例缩略图资源；不得使用占位图、CSS art 或虚构企业品牌。
- 实现分段入场、指标递增、流程线绘制、sticky 阶段切换、轻微指针视差与 hover/focus 状态。
- 在手机和平板上改为自然单列，不制造横向溢出。
- 验证首页交互、`prefers-reduced-motion`、`pnpm check` 与 `pnpm build`。

## Task 3: 双语详情页与内容验收

- 将 Expertise、Markets、Projects、About、Contact 及 `/zh/*` 统一到 V2 设计系统。
- 保证所有内部链接、语言切换、LinkedIn、邮件与微信入口有效。
- 检查全仓无音乐、Seedance、Codex 教程、OPC、自媒体、副业、网盘福利等无关业务内容。
- 检查所有项目与指标均含脱敏/个人记录口径，不构成雇主披露或商业承诺。
- 更新 `llms.txt`、`ai-summary.txt`、README 等必要文档。
- 验证所有路由构建与静态资源。

## Task 4: 视觉 QA、可访问性与交付记录

- 以 1440px 桌面视口捕获首页，与 `design/reference-home-v2.png` 合并对照。
- 检查字体、间距、颜色、图片质量和文案五个保真面；修复所有 P0/P1/P2。
- 验证桌面和移动端关键路由、导航、语言切换、微信弹窗、键盘与 reduced motion。
- 运行最终 `pnpm check`、`pnpm build` 与链接/SEO 检查。
- 在仓库根目录生成 `design-qa.md`，最终结果必须为 `passed`。
- 在 `worklog/` 新建中文总结，说明做了什么、原因、决策与一句话亮点。

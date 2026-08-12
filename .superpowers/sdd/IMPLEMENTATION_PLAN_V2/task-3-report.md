# Task 3 报告：双语详情页、内容边界与站点级验收

## 结论

Task 3 已完成。五类详情页共十个中英文路由已进入既有 V2 编辑型设计系统；双语内容、案例锚点、联系入口、隐私边界和站点级机器可读信息已经校准。实现提交：`d1068286a7abcf595950ab7388d152df00a38383`。

## 路由逐项映射

### `/expertise/` 与 `/zh/expertise/`

- 用四张档案型能力卡呈现四个核心能力组：国际业务开发、注册与技术协调、质量与生产协同、项目执行与国际交付。
- 用八节点链路呈现从目标与匹配、注册路径到运输文件、交接归档的 registration-to-delivery 工作链。
- 产品经验按无菌与注射、口服与吸入、原料药三个语境呈现；明确不是实时产品目录、供应声明或要约。

### `/markets/` 与 `/zh/markets/`

- 只保留 Latin America 与 CIS & Eastern Europe 两个区域。
- 移除逐国清单和监管机构名录，避免暗示普遍国家覆盖或机构代表身份。
- 用工作语境、协调复杂度和四步协调方法说明经验；增加“个人工作语境、不代表覆盖每个国家”的边界声明。

### `/projects/` 与 `/zh/projects/`

- 恰好呈现三个匿名案例。
- 每个案例均使用一致的 Situation / My role / What this demonstrates 结构。
- 稳定保留首页链接使用的三个锚点：`registration-deficiency`、`manufacturing-scope`、`multi-order-delivery`。
- 明确案例来自脱敏个人工作记录，仅作方法示例，不代表雇主披露或商业承诺。
- 页面不包含可识别主体、交易记录、非公开运营细节或未公开注册信息。

### `/about/` 与 `/zh/about/`

- 呈现“以执行为导向的医药国际业务角色”职业定位与四阶段职业能力演进。
- 四项原则完整保留并自然双语化：Clarity、Verification、Execution、Systems Thinking。
- AI 独立成为支持方法模块，明确人工判断、来源核验和可追责决策不会被替代。

### `/contact/` 与 `/zh/contact/`

- LinkedIn 使用真实地址并带 `target="_blank"` 与 `rel="noopener noreferrer"`。
- 邮件使用 `mailto:jed@jedliuai.com`。
- 微信按钮使用原生 dialog 触发器，并增加 `aria-haspopup="dialog"` 与 `aria-controls="wechat-dialog"`；弹窗关闭后恢复触发器焦点。
- 首次联系提示明确包含目标市场、产品/剂型、项目阶段、当前问题。
- 没有增加后台表单。

## 视觉与交互实现

- 复用既有 V2 tokens：`#F2EDE3` 暖纸色、`#2B211C` 近黑棕、`#C95D3A` 陶土红、`#1F55B5` 钴蓝。
- 延续首页的暖纸网格、Newsreader 编辑型大标题、IBM Plex Sans/Mono 元信息、细分隔线、手稿式强调线和克制的 dossier 卡片。
- `PageHero` 增加显式 heading 关联；详情页补齐 section heading 的 `aria-labelledby`。
- 保留全站 `:focus-visible` 与 `prefers-reduced-motion` 行为；图片使用有意义的中英文 alt。
- Playwright 在 1440 × 900 下抽查 `/projects/`，确认标题层级、三案布局、图片、边界说明、联系带和页尾视觉连续，无明显溢出或错位。

## 站点级机器可读内容

- `BaseLayout` 对全部页面输出自洽 canonical、英文/中文/x-default hreflang、Open Graph 与 Twitter card。
- JSON-LD 保留 Person、WebSite，并按主页/关于页输出 ProfilePage，其余路由输出 WebPage；补充公开联系邮箱。
- Astro sitemap 生成 12 个 URL，每个 URL 都带 `en-US` 与 `zh-CN` 互惠 alternate。
- `robots.txt` 指向 `https://pharma.jedliuai.com/sitemap-index.xml`。
- `llms.txt` 新增五类双语公开路由，说明区域覆盖边界、个人记录来源与非商业承诺。
- `ai-summary.txt` 同步四类核心能力、两个区域、三案例的脱敏个人记录基础与信息披露边界。

## 检查与证据

### 类型与构建

- `pnpm check`：33 个文件，0 errors、0 warnings、0 hints。
- `pnpm build`：成功生成 12 个静态页面；sitemap index 成功生成。
- `git diff --check`：通过，无空白错误。

### `dist` 链接、资源与元数据验收

使用 PowerShell 对 `dist` 的 12 个 `index.html` 做定向解析：

- 逐路由 canonical 与预期 origin/path 一致。
- 每页均有 `en`、`zh-CN`、`x-default` hreflang。
- 每页 Open Graph URL 与 canonical 一致。
- 每页均含 JSON-LD，且 12 份 JSON 全部可解析。
- 所有站内 `href`、图片、字体、样式等非外部 `href/src` 均可解析到现存构建产物。
- 空 `href`：0。
- 三个案例锚点在英文与中文 projects 页面全部存在。
- 中英文 contact 页面均含 LinkedIn、`mailto:jed@jedliuai.com` 和微信 dialog 触发器。
- 汇总：12 pages checked，0 validation errors，0 JSON-LD errors。

### 内容扫描

扫描范围限定为 Git 跟踪的可读源码/内容文件（Astro、TypeScript、CSS、TXT、XML、SVG、Astro 配置），排除实施文档、worklog、字体许可证与二进制图片，避免包名、许可证和随机二进制字节误报。

- 无关内容关键词：music、Seedance、Codex tutorial、OPC、self-media、side hustle、download benefits、Douyin、Bilibili、soda music、x.com、twitter.com；结果 0 命中。
- mojibake/replacement 字符：`�`、`锟`、`鈥`、`闁`、`鐨`、`鍖`；结果 0 命中。
- 空链接目标：0 命中；页面中的 fragment-only `href` 仅用于已有首页流程锚点和内联 SVG symbol 引用。
- 人工复核 employer/client、contract、price/pricing、batch、payment、non-public/unpublished、registration status、commercial terms 等词：页面正文没有雇主/客户名称、合同、价格、批次、付款详情或未公开注册信息；相关英文命中仅位于明确的“不披露”和“需正式确认”边界说明。字体许可证中的 contract 属许可证文本误报。

## 自审

- 需求完整性：五类十个路由均未删除或改名；内容双语等价且自然。
- 视觉一致性：没有建立第二套 token 或组件风格，首页主体未重写。
- 内容边界：市场覆盖、产品经验、案例记录和联系用途均有显式边界。
- 链接真实性：内部 CTA、语言切换、联系方式均有非空真实目标；外链 rel 正确。
- 可访问性：语义地标/标题、alt、focus、reduced motion 和 dialog 控制关系保留或增强。
- 共享边界：未修改、暂存或提交 `.superpowers/sdd/IMPLEMENTATION_PLAN_V2/progress.md`。

## 风险与后续

- 本任务做了项目页桌面代表性视觉抽查；Task 4 仍应按计划完成全站多视口浏览器回归，尤其关注中文长标题与 390px 移动端。
- LinkedIn 与邮件目标按源码和构建产物验证；没有对外部服务发起写操作。
- 没有部署、DNS、Cloudflare 或其他外部服务变更。

## 提交

- 实现与 worklog：`d1068286a7abcf595950ab7388d152df00a38383` (`feat: redesign bilingual detail pages`)
- 本报告：随后独立提交，以避免报告对自身提交哈希形成递归引用。

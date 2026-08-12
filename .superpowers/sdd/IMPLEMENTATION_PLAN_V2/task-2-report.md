# Task 2 实施报告：首页视觉、模块与动效

## 状态

DONE

实现提交：`8a4abc8ec583986d960201e89e886e86d324ff32`

## 完成内容

- 按 `design/reference-home-v2.png` 重建英文 `/` 与中文 `/zh/` 首页，两种语言共用同一语义结构和响应式视觉系统。
- 首屏改为暖纸张底的宽阔双栏：左侧 eyebrow、主标题、说明和两枚 CTA；右侧复用真实 `/brand/jed-portrait.webp` 制作项目档案浏览器窗，并加入 Markets / Coordination / Execution 克制批注、陶土色柔光与轻微指针视差。
- 指标账本扩展为四列：`10+ Markets`、`100+ Projects Tracked`、`70+ Pharmaceutical Products`、`Registration → Delivery / End-to-end project support`，保留个人工作记录脱敏声明。
- 将能力模块改为四个编辑式纵列：国际业务开发、注册与技术协调、项目执行与国际交付、AI 赋能工作系统。
- 新增六阶段流程故事：阶段索引、进度线和右侧档案面板联动；桌面滚动自动更新，点击或键盘聚焦同样更新；移动端降级为可横向滚动的阶段选择器，不锁定页面滚动。
- 使用五张指定 V2 资产完成流程主插画、实体市场地图和三条匿名项目案例，案例均链接到项目详情锚点。
- 新增深钴蓝 AI 方法带、四步工作序列，以及 About / LinkedIn / 邮箱 / 微信联系收尾。
- 增加首屏分段入场、指标首次入视口计数、标题与案例一次性 reveal、流程面板切换、案例与按钮轻微 hover lift；`prefers-reduced-motion` 下均禁用非必要动效并保留全部内容与功能。
- 修复 Task 1 deferred minor：`body::before` 纸张纹理由负层级改为可见的固定顶层纹理，保持 `pointer-events: none`，不遮断交互。

## 变更文件

- `src/components/pages/HomePage.astro`：双语首页全部模块、语义结构和渐进增强脚本。
- `src/styles/global.css`：V2 首页视觉、响应式、动效、可访问隐藏文本及纸张纹理层修复。
- `src/data/copy.ts`：首页双语自然文案、六阶段流程、AI 序列和收尾文案。
- `src/config/site.ts`：四列指标数据。
- `src/components/ProjectIcon.astro`：在原共享接口上扩展成熟 Phosphor 图标集合，并显式映射名称。
- `astro.config.mjs`：将新增图标加入 Astro 静态收集清单，避免预渲染无法定位动态图标。
- `brand-spec.md`：修正真实头像扩展名为 `.webp`。
- `public/images/markets-map-v2.png`
- `public/images/case-registration-v2.png`
- `public/images/case-manufacturing-v2.png`
- `public/images/case-delivery-v2.png`
- `public/images/process-objective-v2.png`

## 交互行为

- 首屏档案窗只在 fine pointer 且未启用 reduced motion 时响应指针，位移上限约 7px、旋转上限约 1.5deg，离开后回正。
- 指标视觉数字从 0 计数，屏幕阅读器始终获得最终完整文本，不朗读动画中间值。
- 流程阶段在桌面以视口 45% 焦点线选择最接近的阶段；按钮点击和焦点进入使用同一状态函数，同步 `aria-pressed`、面板 `hidden` 与进度线。
- 54rem 以下流程不 sticky，阶段索引可横向滚动；所有按钮维持原生键盘行为和可见 focus 样式。
- WeChat 使用 Task 1 的共享原生 dialog；案例链接均指向真实项目页锚点，无空链接或假控件。

## 验证结果

- `pnpm check`：通过，33 个文件，0 errors / 0 warnings / 0 hints。
- `pnpm build`：通过，12 个静态页面全部生成，sitemap 正常创建。
- 空链接扫描：`rg` 扫描 `src`，无空 `href`。
- 禁止内容扫描：未发现雇主/客户名、合同价格、批次、付款信息或 brief 列出的禁止视觉关键词。
- 禁止实现扫描：未发现 `scrollIntoView` 或 `const styles =`。
- 资产引用扫描：五张指定 V2 图片均由首页明确引用。
- `git diff --check`：通过，仅有 Windows 环境的 LF/CRLF 提示，无 whitespace error。
- Playwright 真实浏览器：1440、768、390 视口均满足 `scrollWidth === clientWidth`；英文和中文首页控制台均为 0 error / 0 warning。
- Playwright 交互：流程滚动从 Define Objective 更新到 Market & Feasibility，点击 Delivery & Submission 后面板同步；移动菜单可打开并通过 Escape 关闭；微信 dialog 可打开并通过 Escape 关闭。

## 自审

- 视觉理念：保持暖象牙纸张、深棕正文、陶土强调和钴蓝方法带，未引入玻璃拟态、霓虹或通用 SaaS 卡墙。
- 层级：首屏标题与真实头像构成主焦点，指标提供快速证据，长页面依次进入能力、流程、市场、案例与方法说明。
- 工艺：所有新增样式使用 `home-v2-*` 命名空间，尽量避免影响 Task 1 已完成的详情页；所有指定图片有明确尺寸和有意义 alt。
- 功能：无空链接、无动画独占信息、按钮和 dialog 均可键盘操作；移动端自然单列且无 scroll trap。
- 原创性：以真实项目档案、流程工作纸和实体地图形成个人医药国际业务辨识度，避免用通用医药图库替代真实工作语境。

## 风险与后续关注

- 首页依赖的五张 PNG 单张约 1.7–2.2 MB；本任务要求原样提交，后续性能任务可评估无损压缩或生成 AVIF/WebP 响应式衍生图，但不应删除 PNG 原件。
- 流程滚动状态使用轻量 `requestAnimationFrame` scroll listener；已限制为桌面且每帧去重，后续全站 QA 可继续观察低端设备表现。
- Playwright 的一次性 full-page screenshot 不会自然滚动触发 IntersectionObserver，因此截图中未滚动到的 reveal 内容会保持初始隐藏；真实滚轮路径已逐段验证内容会正常显示，reduced motion 下内容默认可见。


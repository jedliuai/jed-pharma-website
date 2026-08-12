# Jed 医药国际业务个人站｜重设计结构与文案草图 V1

> 本文件只确认网站结构、叙事顺序和页面文字，不代表最终视觉设计。确认之前不修改现有页面。

## 1. 这次必须延续的原站设计基因

原站实际源码与参考图所指向的不是“深色企业官网”，而是一套更有人味的个人编辑档案：

- 暖米白纸张底色、轻微网格与纸面颗粒
- 陶土橙作为克制的强调色，并保留 Jed 标识里的钴蓝圆点
- 手写 `jed` / `Jed Liu` 标识是真正的品牌中心
- 大号衬线标题、简洁正文、手写英文批注形成层级
- 真实头像以照片、胶带、印章、便签和档案纸的方式出现
- 页面像一本个人工作档案或旅行项目册，而不是 SaaS 仪表盘
- 内容仍然专业，但表达要有温度、有节奏、有个人痕迹

参考图可以借用“纸张拼贴、地图、邮戳、手写流程”这些表达方式，但不照搬其中可能虚构的照片、图标或数据。

## 2. 整体网站架构

首页重新作为主要阅读路径，访客不需要频繁跳页也能理解完整故事；详情页用于承载更专业的内容。

```mermaid
flowchart TD
  H[首页 Home<br/>完整个人叙事与主要转化]
  H --> E[Expertise<br/>能力、产品经验、项目链路]
  H --> M[Markets<br/>拉美、独联体与东欧]
  H --> P[Projects<br/>三个匿名案例]
  H --> A[About<br/>职业经历、原则、工作方法]
  H --> C[Contact<br/>LinkedIn、邮箱、微信]
  H -. 对应中文版本 .-> Z[/zh/*]
```

保留路由：

- `/`
- `/expertise/`
- `/markets/`
- `/projects/`
- `/about/`
- `/contact/`
- `/zh/*`

英文继续作为默认语言，中文使用独立 `/zh/` 路由。

## 3. 首页逐屏草图

### 01｜顶部导航

**左侧**：真实 Jed 手写标识  
**右侧**：Home / Expertise / Markets / Projects / About / Contact / 中文

导航保持轻、薄、安静，不使用厚重深色横条。

---

### 02｜Hero：先让人记住 Jed，再理解职业身份

**布局草图**

- 左侧：手写职业眉题、姓名、主标题、说明和两个行动按钮
- 右侧：真实头像的档案式拼贴；旁边只出现三条手写批注
- 背景：暖纸面，不铺满蓝色；头像自身的蓝色环境光成为视觉记忆点

**英文默认文案**

Eyebrow:

> Pharmaceutical International Trade

Name:

> Jed Liu

Headline:

> From registration to delivery, I help pharmaceutical projects move forward.

Body:

> I connect international business development with the regulatory, technical and operational work required to turn a pharmaceutical opportunity into a delivered project — with a focus on Latin America and CIS-related markets.

Primary CTA:

> Discuss a Project

Secondary CTA:

> View My Expertise

头像旁的三条手写批注：

> Markets  
> Coordination  
> Execution

**中文对应文案**

眉题：

> 医药国际业务

主标题：

> 从注册到交付，让医药国际项目真正向前推进。

正文：

> 我把国际业务开发与医药项目落地所需的注册、技术和执行工作连接起来，重点面向拉丁美洲、独联体及东欧相关市场。

按钮：

> 沟通项目 / 查看专业能力

---

### 03｜业务数据：一行建立可信度

不做悬浮数据卡，不制造“大数据仪表盘”感；做成一张横向项目档案条。

> **10+** International Markets  
> **100+** Projects Tracked  
> **70+** Pharmaceutical Products  
> **Registration → Delivery** End-to-end Coordination

说明：

> Anonymized ranges from personal working records. Not an employer disclosure or commercial commitment.

中文：

> 数据为个人工作记录的脱敏区间，不代表任何雇主的官方披露或商业承诺。

---

### 04｜一句话说明“我真正做什么”

**标题**

> I work where commercial opportunity meets regulatory and operational reality.

**正文**

> Pharmaceutical exports are rarely a simple quotation-to-shipment process. A project may involve registration, quality, production, packaging, logistics, payment and continuous communication with overseas partners. My role is to keep those pieces aligned and moving.

**中文**

> 我工作的地方，是商业机会与注册、技术和项目执行真正交汇的地方。

> 医药出口很少只是“报价—下单—发货”。一个项目往往同时涉及注册、质量、生产、包装、物流、付款以及与海外合作伙伴的持续沟通。我的工作，是让这些环节保持一致并继续向前。

---

### 05｜专业能力：只保留四个真正有区分度的模块

不再排列六张相同卡片，改成一张“工作档案页”里的四个分区。

#### International Business Development

> Market and partner evaluation, product matching, commercial negotiation and long-term cooperation.

#### Regulatory & Technical Coordination

> Registration documents, CPP/GMP, stability, specifications, analytical questions and deficiency-response coordination.

#### Project Execution & International Delivery

> Artwork, production scheduling, QA release, shipment, payment reconciliation and project closeout.

#### AI-enabled Working Systems

> Structured data, document comparison, risk visibility and practical automation for complex trade work.

中文标题：

> 国际业务开发 / 注册与技术协调 / 项目执行与国际交付 / AI 赋能的工作系统

---

### 06｜项目如何被推进：核心叙事流程

这一屏做成纸面上的手写项目路径，而不是传统流程图卡片。

> **01** Understand the objective  
> **02** Identify regulatory and commercial constraints  
> **03** Align technical and internal teams  
> **04** Coordinate production and artwork  
> **05** Track release, shipment and payment  
> **06** Close and document the project

核心句：

> A purchase order is not the end of a pharmaceutical project. Delivery, payment reconciliation and documentation are part of the result.

中文核心句：

> 客户下单并不是医药项目的结束。放行、交付、收款核对和文件归档，都是结果的一部分。

---

### 07｜重点市场：地图只服务于经验表达

**标题**

> Markets shape the way every pharmaceutical project is executed.

**Latin America**

> Experience across distributor communication, registration-stage cooperation, market-specific documentation and long-term project development.

**CIS & Eastern Europe**

> Experience coordinating technical, regulatory, manufacturing and delivery requirements across complex project environments.

说明：不列客户、不声称覆盖所有国家、不使用发光地球或连接线。

---

### 08｜三个匿名项目：用“问题—行动—结果”讲能力

#### Registration Deficiency Coordination

> Structured a repeated impurity-related regulatory question, aligned the customer and internal technical teams, and helped define a clearer response path.

Tags: Regulatory communication / Technical structuring

#### Manufacturing Scope Clarification

> Reconstructed manufacturing responsibilities and translated technical process information into a regulator-facing explanation.

Tags: Manufacturing understanding / Cross-functional coordination

#### Multi-order Production & Delivery

> Tracked multiple products through artwork, production, QA release, shipment and payment while exposing dependencies and schedule risks.

Tags: Execution discipline / Order risk management

中文案例名：

> 注册补件协调 / 生产与注册范围澄清 / 多订单生产与交付协同

---

### 09｜AI：只作为工作方法，不再成为另一个人设

**标题**

> AI is part of my working method, not my professional identity.

**正文**

> I use AI, structured data and automation to reduce information friction, compare documents, surface risks earlier and leave more time for decisions that require professional judgment.

**手写流程**

> Research → Analyze → Decide → Execute → Review

**核心引用**

> I do not use AI to replace professional judgment. I use it to make complex work clearer.

中文：

> AI 是我的工作方法，不是我的职业标签。

> 我不使用 AI 替代专业判断，而是用它降低信息摩擦、更早暴露风险，让复杂的工作变得更清楚。

---

### 10｜关于 Jed：用一段话收住个人感

**标题**

> I am interested in how complicated systems actually work.

**正文**

> Every pharmaceutical project is a combination of people, regulations, manufacturing, documents, money, time and uncertainty. I like taking that complexity apart, identifying what really matters, and rebuilding it into a path that can be executed.

中文：

> 我一直对“复杂的事情到底是怎么运转的”很感兴趣。每一个医药国际项目背后都有人、法规、生产、文件、资金、时间和不确定性。我喜欢把复杂问题拆开，找到真正关键的部分，再重新整理成一条可以执行的路径。

---

### 11｜联系：像个人来信，不像销售表单

**标题**

> Let’s discuss a pharmaceutical project.

**正文**

> If you are working on pharmaceutical registration, sourcing, distribution or an international supply project and believe there may be a fit, feel free to get in touch.

主要入口：

> LinkedIn  
> jed@jedliuai.com  
> WeChat

不建设表单，不展示尚未确认的抖音、B站、X 或音乐平台链接。

## 4. 详情页内容边界

### Expertise

- 四项核心能力的详细说明
- Finished dosage forms / APIs 的经验范围
- Registration → Delivery 的完整执行链路
- 产品、规格、注册与供应状态免责声明

### Markets

- Latin America
- CIS & Eastern Europe
- 每个区域只讲工作语境、项目复杂度和协作方式
- 不做国家能力夸张，不展示客户或交易数据

### Projects

- 三个匿名案例
- 固定结构：Situation / My role / What this demonstrates
- 不展示合同、批次、价格、付款或未公开注册信息

### About

- 职业定位
- 从销售沟通到项目执行的能力演进
- Clarity / Verification / Execution / Systems Thinking 四项原则
- AI 如何进入真实工作，而不是成为独立身份

### Contact

- LinkedIn
- Email
- WeChat 联系卡弹窗
- 一段简短的首次沟通提示：市场、产品或剂型、项目阶段、当前问题

## 5. 明确删除或弱化的内容

- 删除当前新站的深色整屏、企业化数据墙、等宽编号和大面积钴蓝色块
- 删除重复表达同一件事的能力卡片和营销式标题
- AI 权重控制在约 10%，不进入首屏主身份
- 不出现音乐、Codex 教程、Seedance、OPC、自媒体、副业与网盘福利
- 不出现握手、医疗十字、发光地球、药丸堆叠和虚构工厂

## 6. 下一阶段在确认后才做

确认本草图后，再进入视觉设计：基于原站暖纸面与真实品牌资产，结合参考图的档案拼贴语言，先给出桌面首页的视觉定稿，再扩展到移动端与详情页。现有线上版本在确认与重建完成前保持不动。

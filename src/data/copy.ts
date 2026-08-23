import type { Locale } from "@/config/site";

export const navItems = {
  en: [["about", "About"], ["experience", "Experience"], ["markets", "Markets"], ["digital", "Digital"], ["contact", "Contact"]],
  zh: [["about", "关于"], ["experience", "经验"], ["markets", "市场"], ["digital", "数字工具"], ["contact", "联系"]]
} satisfies Record<Locale, string[][]>;

export const seo = {
  en: {
    title: "Jed Liu | Pharmaceutical International Business",
    description: "Jed Liu connects pharmaceutical customers, products, registration, supply and international delivery across China, Latin America and Central Asia/CIS."
  },
  zh: {
    title: "Jed Liu｜医药国际业务",
    description: "Jed Liu 连接中国、拉丁美洲与中亚/CIS 市场的医药客户、产品、注册、供应与国际交付。"
  }
} as const;

export const common = {
  en: {
    eyebrow: "PHARMACEUTICAL INTERNATIONAL BUSINESS",
    language: "中文",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNavigation: "Primary navigation",
    footerNavigation: "Footer navigation",
    metricsNote: "Aggregated and rounded personal working records since 2021. Figures describe work handled or coordinated—not personal revenue, ownership or an employer commitment.",
    wechatTitle: "Connect on WeChat",
    wechatBody: "Scan the contact card or add the number below. A short note about your project helps me respond with context.",
    close: "Close dialog"
  },
  zh: {
    eyebrow: "医药国际业务",
    language: "EN",
    menu: "菜单",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    mainNavigation: "主导航",
    footerNavigation: "页尾导航",
    metricsNote: "自 2021 年以来的个人工作记录，经汇总、取整和脱敏后展示。仅表示本人经手或协调的工作，不代表个人收入、所有权或任何雇主承诺。",
    wechatTitle: "微信联系",
    wechatBody: "扫码或添加下方号码。请简单备注项目背景，方便我带着语境回复。",
    close: "关闭弹窗"
  }
} as const;

export const home = {
  en: {
    heroLead: "From product discussion to delivery, I move pharmaceutical business forward.",
    heroBody: "Working across China, Latin America and Central Asia/CIS—connecting customers, products, registration, supply and delivery, with AI and automation built into the way I work.",
    primaryCta: "Discuss a project",
    secondaryCta: "See how I work",
    aboutKicker: "ABOUT / BUSINESS IN NUMBERS",
    aboutTitle: "Commercial perspective. Operational follow-through.",
    aboutBody: "Since 2021, I have worked in pharmaceutical international business, connecting overseas customers with products, teams and execution in China. My work spans commercial discussions, registration coordination, contracts, production follow-up and international delivery, with a strong focus on Latin America and Central Asia/CIS.",
    processKicker: "THE FULL COMMERCIAL CYCLE",
    processTitle: "I stay with the work from the first question to the final handover.",
    process: [
      ["Product & opportunity discussion", "Clarify the product, market need and practical business fit."],
      ["Quotation & commercial negotiation", "Build a clear commercial basis and keep open issues visible."],
      ["Registration coordination", "Connect external requirements with documentation and technical owners."],
      ["Contract & production execution", "Follow milestones, dependencies and changes across teams."],
      ["Shipment & documentation", "Align release, shipping documents, logistics and handover timing."],
      ["Delivery & long-term follow-up", "Close remaining actions and keep the relationship moving."],
    ],
    marketsKicker: "MARKETS / PRODUCTS",
    marketsTitle: "Regional experience grounded in real project rhythm.",
    marketsBody: "Different markets ask different questions. The constant is keeping commercial context, registration reality and delivery readiness connected.",
    regions: [
      ["Latin America", "Colombia · Venezuela · Mexico · Peru · Paraguay · Chile · Honduras", "Long-cycle partner communication, registration routes and project coordination."],
      ["Central Asia / CIS", "Uzbekistan · Related regional markets", "Technical requirements, supply feasibility and sustainable market development."],
    ],
    productTitle: "Product experience",
    productNote: "Categories reflect products I have worked with. They are not a catalogue, ownership claim, manufacturing statement or live supply offer.",
    products: [["Finished Dosage Forms", "Sterile injectables · Antibiotics · Other FDF"], ["Active Pharmaceutical Ingredients", "APIs · Technical packages · Quality documentation"]],
    workKicker: "WHAT I ACTUALLY DO",
    workTitle: "The connective work that turns an opportunity into progress.",
    work: [
      ["Commercial Cooperation", "Customer dialogue, opportunity framing, quotation and negotiation."],
      ["Registration Coordination", "Requirements, dossier questions, technical inputs and alignment."],
      ["Supply & Project Execution", "Contracts, production follow-up, shipping and delivery milestones."],
      ["China Pharmaceutical Opportunity Mapping", "Structured understanding of manufacturers, products and market signals in China."],
    ],
    digitalKicker: "AI / AUTOMATION / PURPOSE-BUILT SOFTWARE",
    digitalTitle: "AI-Augmented International Business",
    digitalLead: "AI does not replace the human side of international business. It removes repetitive work around it.",
    digitalBody: "I use AI, automation and purpose-built software to turn repetitive and process-driven tasks into structured workflows—leaving more time for customers, market context, problem-solving and business judgment.",
    quoteTitle: "Quote & Contract Tool",
    quoteBody: "A purpose-built workspace for turning quotation logic and contract preparation into a clearer, faster and more consistent flow.",
    quoteCta: "View live tool",
    cockpitTitle: "Personal Pharmaceutical Order Cockpit",
    cockpitBody: "A private operational view for following customer balances, account value and portfolio concentration. The public screens below use one fictional company set and fully synthetic figures.",
    cockpitTabs: ["Customer balance", "Account value", "Portfolio concentration"],
    insightTitle: "Staying Close to What Is Changing",
    insightBody: "AI-assisted information workflows help me follow pharmaceutical markets, regulatory changes, manufacturers, products and supply-chain signals—then turn scattered updates into usable context.",
    industryKicker: "INDUSTRY LEVERAGE",
    industryTitle: "Connected to China’s Pharmaceutical Ecosystem",
    industryBody: "My work sits inside a wider network of manufacturers, technical teams, registration specialists, quality functions and logistics partners. Understanding how those nodes connect helps me ask better questions and move opportunities with more realism.",
    nodes: ["Manufacturers", "Products", "Regulatory", "Quality", "Supply Chain", "International Customers"],
    approachKicker: "PERSONAL APPROACH",
    approachTitle: "Systems create clarity. Relationships create momentum.",
    approachBody: "I believe international business is ultimately built on trust, responsiveness and solving real problems—not only quotations and contracts. Good systems make the work clearer. Good relationships are what keep it moving.",
    contactKicker: "START A CONVERSATION",
    contactTitle: "Start with the business context.",
    contactBody: "Share the market, product context and current question. Please keep confidential dossiers, contracts, prices, payment details and patient data out of the first message."
  },
  zh: {
    heroLead: "从产品沟通到最终交付，我推动医药国际业务持续向前。",
    heroBody: "连接中国、拉丁美洲与中亚/CIS 市场的客户、产品、注册、供应与交付，并将 AI 与自动化融入日常工作方法。",
    primaryCta: "沟通项目",
    secondaryCta: "了解我的工作方式",
    aboutKicker: "关于 / 业务数据",
    aboutTitle: "商业视角，也对执行结果负责。",
    aboutBody: "自 2021 年起，我一直从事医药国际业务，连接海外客户与中国的产品、团队和执行资源。工作涵盖商务沟通、注册协调、合同、生产跟进和国际交付，重点聚焦拉丁美洲与中亚/CIS。",
    processKicker: "完整商业周期",
    processTitle: "从第一个问题到最后一次交接，我跟进事情的全过程。",
    process: [
      ["产品与机会沟通", "明确产品、市场需求与现实的业务匹配度。"],
      ["报价与商务谈判", "建立清晰的商务基础，让待解问题持续可见。"],
      ["注册协调", "将外部要求与文件、技术和负责人连接起来。"],
      ["合同与生产执行", "跟进里程碑、依赖关系与跨团队变化。"],
      ["发运与文件", "协调放行、发运文件、物流与交接节点。"],
      ["交付与长期跟进", "完成剩余行动，并让合作关系继续向前。"],
    ],
    marketsKicker: "市场 / 产品",
    marketsTitle: "在真实项目节奏中形成的区域经验。",
    marketsBody: "不同市场会提出不同问题。不变的是，始终要让商务语境、注册现实与交付准备度保持连接。",
    regions: [
      ["拉丁美洲", "哥伦比亚 · 委内瑞拉 · 墨西哥 · 秘鲁 · 巴拉圭 · 智利 · 洪都拉斯", "长周期合作方沟通、注册路径与项目协调。"],
      ["中亚 / CIS", "乌兹别克斯坦 · 相关区域市场", "技术要求、供应可行性与可持续市场开发。"],
    ],
    productTitle: "产品经验",
    productNote: "以下仅表示我曾经接触和经手的产品类型，不构成目录、所有权、生产能力声明或实时供应要约。",
    products: [["制剂", "无菌注射剂 · 抗生素 · 其他制剂"], ["原料药", "API · 技术资料 · 质量文件"]],
    workKicker: "我实际在做什么",
    workTitle: "让一个机会真正产生进展的连接性工作。",
    work: [
      ["商务合作", "客户沟通、机会定义、报价与谈判。"],
      ["注册协调", "要求、申报问题、技术输入与团队对齐。"],
      ["供应与项目执行", "合同、生产跟进、发运与交付节点。"],
      ["中国医药机会地图", "结构化理解中国制造商、产品与市场信号。"],
    ],
    digitalKicker: "AI / 自动化 / 专用工具",
    digitalTitle: "AI 增强的国际业务",
    digitalLead: "AI 不取代国际业务中人的一面，它减少围绕在人周围的重复工作。",
    digitalBody: "我使用 AI、自动化和专用软件，将重复且流程化的任务变成结构化工作流，从而为客户、市场语境、问题解决和商业判断留出更多时间。",
    quoteTitle: "报价与合同工具",
    quoteBody: "一个为报价逻辑与合同准备而构建的工作台，让流程更清晰、更快、更一致。",
    quoteCta: "查看在线工具",
    cockpitTitle: "个人医药订单驾驶舱",
    cockpitBody: "用于跟踪客户余额、账户价值和客户组合集中度的私人运营视图。下方公开截图使用统一的虚构公司和完全合成的数据。",
    cockpitTabs: ["客户货款余额", "客户价值", "客户组合集中度"],
    insightTitle: "始终贴近正在发生的变化",
    insightBody: "AI 辅助信息工作流帮助我跟进医药市场、法规变化、制造商、产品与供应链信号，再将零散更新变成可用的业务语境。",
    industryKicker: "行业杠杆",
    industryTitle: "连接中国医药产业生态",
    industryBody: "我的工作处在制造商、技术团队、注册专业人员、质量职能与物流伙伴组成的更大网络中。理解这些节点如何相互连接，让我能问出更好的问题，也能更现实地推动机会。",
    nodes: ["制造商", "产品", "注册", "质量", "供应链", "国际客户"],
    approachKicker: "个人方法",
    approachTitle: "系统创造清晰，关系创造动量。",
    approachBody: "我相信，国际业务最终建立在信任、响应与解决真实问题之上，不只是报价和合同。好的系统让工作更清晰，好的关系让工作继续向前。",
    contactKicker: "开始沟通",
    contactTitle: "先从业务背景开始。",
    contactBody: "可以告诉我目标市场、产品背景与当前问题。首次消息请勿发送保密申报资料、合同、价格、付款信息或患者数据。"
  }
} as const;

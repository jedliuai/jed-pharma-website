import type { Locale, RouteKey } from "@/config/site";

export const navLabels: Record<Locale, Record<RouteKey, string>> = {
  en: {
    home: "Home",
    expertise: "Expertise",
    markets: "Markets",
    projects: "Projects",
    about: "About",
    contact: "Contact"
  },
  zh: {
    home: "首页",
    expertise: "专业能力",
    markets: "市场经验",
    projects: "项目案例",
    about: "关于我",
    contact: "联系"
  }
};

export const seo: Record<Locale, Record<RouteKey, { title: string; description: string }>> = {
  en: {
    home: {
      title: "Jed Liu | Pharmaceutical International Business",
      description:
        "Pharmaceutical international business professional focused on Latin America and CIS markets, covering registration coordination, project execution, supply chain and AI-enabled trade workflows."
    },
    expertise: {
      title: "Expertise | Jed Liu — Pharmaceutical International Business",
      description:
        "International business development, pharmaceutical registration coordination, quality communication, order execution and international delivery."
    },
    markets: {
      title: "Markets | Latin America & CIS Pharmaceutical Experience",
      description:
        "Practical pharmaceutical project coordination across Latin America, CIS and Eastern European markets."
    },
    projects: {
      title: "Selected Projects | Jed Liu",
      description:
        "Anonymized pharmaceutical international business cases covering registration, manufacturing scope and multi-order delivery."
    },
    about: {
      title: "About Jed Liu | Pharmaceutical International Business",
      description:
        "The professional story, working principles and systems-thinking approach behind Jed Liu’s pharmaceutical international business practice."
    },
    contact: {
      title: "Contact Jed Liu | Discuss a Pharmaceutical Project",
      description:
        "Connect with Jed Liu about pharmaceutical registration, sourcing, distribution and international supply projects."
    }
  },
  zh: {
    home: {
      title: "Jed Liu｜医药国际业务",
      description: "聚焦拉美、独联体及东欧市场，覆盖药品注册协调、项目执行、国际交付与 AI 赋能外贸工作流。"
    },
    expertise: {
      title: "专业能力｜Jed 医药国际业务",
      description: "医药国际业务开发、注册协调、质量技术沟通、订单执行与国际交付能力。"
    },
    markets: {
      title: "市场经验｜拉美、独联体与东欧医药市场",
      description: "面向拉美、独联体及东欧市场的医药项目协调与国际业务实践。"
    },
    projects: {
      title: "匿名项目案例｜Jed 医药国际业务",
      description: "围绕注册补件、生产范围澄清和多订单交付的匿名医药国际业务案例。"
    },
    about: {
      title: "关于 Jed Liu｜医药国际业务",
      description: "Jed Liu 的职业经历、工作原则，以及通过系统化方法推进医药国际项目的实践。"
    },
    contact: {
      title: "联系 Jed Liu｜沟通医药国际项目",
      description: "就药品注册、采购、分销和国际供应项目与 Jed Liu 建立联系。"
    }
  }
};

export const common = {
  en: {
    eyebrow: "PHARMACEUTICAL INTERNATIONAL BUSINESS",
    primaryCta: "Discuss a project",
    secondaryCta: "View expertise",
    linkedinCta: "Connect on LinkedIn",
    language: "中文",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNavigation: "Primary navigation",
    footerNavigation: "Footer navigation",
    contactChannels: "Direct channels",
    allContactOptions: "View all contact options",
    metricsNote: "Anonymized ranges from personal working records. Not an employer disclosure.",
    selectedProjects: "Selected projects",
    viewAll: "View all projects",
    contactTitle: "Let’s discuss a pharmaceutical project.",
    contactBody:
      "If you are working on pharmaceutical registration, sourcing, distribution or an international supply project and believe there may be a fit, feel free to get in touch.",
    footerNote: "Personal professional website · China · Working internationally",
    disclaimer:
      "Product information, regulatory status, availability, specifications and commercial terms require project-specific formal confirmation.",
    wechatTitle: "Connect on WeChat",
    wechatBody: "Scan the contact card and include a short note about your project.",
    close: "Close dialog"
  },
  zh: {
    eyebrow: "医药国际业务 · 从注册到交付",
    primaryCta: "沟通项目",
    secondaryCta: "查看专业能力",
    linkedinCta: "通过 LinkedIn 联系",
    language: "EN",
    menu: "菜单",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    mainNavigation: "主导航",
    footerNavigation: "页尾导航",
    contactChannels: "直接联系方式",
    allContactOptions: "查看全部联系方式",
    metricsNote: "数据为个人工作记录的脱敏区间，不代表现任公司官方披露。",
    selectedProjects: "匿名项目案例",
    viewAll: "查看全部案例",
    contactTitle: "一起聊聊医药国际项目。",
    contactBody: "如果你正在推进药品注册、采购、分销或国际供应项目，并认为可能有合作空间，欢迎联系。",
    footerNote: "个人职业网站 · 中国 · 面向国际市场",
    disclaimer: "产品信息、注册状态、供应情况、规格与商务条件，均需根据具体项目进行正式确认。",
    wechatTitle: "微信联系",
    wechatBody: "扫描联系卡，并简单备注项目或来意。",
    close: "关闭弹窗"
  }
} as const;

export const home = {
  en: {
    heroTitle: "Pharmaceutical international business, from registration to delivery.",
    heroLead:
      "I connect business development with the regulatory, technical and operational details required to make international pharmaceutical projects happen — with a focus on Latin America and CIS markets.",
    heroAside: "Business development · Registration · Execution · Delivery",
    introKicker: "WHAT I ACTUALLY DO",
    introTitle: "I help move pharmaceutical projects from opportunity to execution.",
    introBody:
      "A pharmaceutical export project is rarely a simple quotation-to-shipment process. It brings together overseas partners, registration, quality, production, packaging, logistics, finance and continuous communication. My role is to keep those pieces aligned and moving.",
    expertiseKicker: "THE WORK",
    expertiseTitle: "Commercial judgment, technical context and execution discipline.",
    expertise: [
      {
        number: "01",
        title: "International business development",
        body: "Evaluate markets and partners, match products, structure commercial terms and develop cooperation beyond the first order."
      },
      {
        number: "02",
        title: "Regulatory and technical coordination",
        body: "Bridge overseas requirements with registration, quality and manufacturing teams — from CPP and GMP to stability, specifications and analytical questions."
      },
      {
        number: "03",
        title: "End-to-end execution",
        body: "Track the chain from contract and artwork through production, QA release, shipment, payment reconciliation and archive."
      }
    ],
    marketsKicker: "MARKET CONTEXT",
    marketsTitle: "Local requirements change the shape of every project.",
    marketsBody:
      "The product may be the same, but registration practices, documentation, payment structures and market access differ from one country to another.",
    regions: ["Latin America", "CIS & Eastern Europe"],
    aiKicker: "A DIFFERENT WORKING METHOD",
    aiTitle: "AI is part of how I work — not a separate identity.",
    aiBody:
      "I use structured data, AI and automation to reduce information friction, extract and compare documents, surface risks earlier and leave more time for decisions that need professional judgment.",
    aiQuote:
      "I do not use AI to replace professional judgment. I use it to make complex work clearer."
  },
  zh: {
    heroTitle: "医药国际业务，从注册到交付。",
    heroLead:
      "我把商务开发与医药项目真正落地所需的注册、技术和执行细节连接起来，重点面向拉美、独联体及东欧相关市场。",
    heroAside: "业务开发 · 注册协调 · 项目执行 · 国际交付",
    introKicker: "我真正解决的问题",
    introTitle: "把医药项目从机会推进到真正执行。",
    introBody:
      "医药出口很少只是“报价—下单—发货”。一个项目往往同时涉及海外伙伴、注册、质量、生产、包装、物流、财务与持续沟通。我的角色，是让这些环节保持一致并持续向前。",
    expertiseKicker: "核心工作",
    expertiseTitle: "商业判断、技术语境与执行纪律。",
    expertise: [
      {
        number: "01",
        title: "医药国际业务开发",
        body: "评估市场与合作伙伴，匹配产品，设计商务条件，并把合作从第一次沟通推进到长期项目。"
      },
      {
        number: "02",
        title: "注册与技术协调",
        body: "把海外需求与注册、质量和生产团队连接起来，覆盖 CPP、GMP、稳定性、质量标准和分析方法等问题。"
      },
      {
        number: "03",
        title: "端到端项目执行",
        body: "跟踪合同、包装稿、生产、QA 放行、发运、收款核对与归档的完整链路。"
      }
    ],
    marketsKicker: "市场语境",
    marketsTitle: "本地要求决定每一个项目的形状。",
    marketsBody: "产品可以相同，但不同国家的注册习惯、文件要求、付款结构和市场准入路径可能完全不同。",
    regions: ["拉丁美洲", "独联体与东欧"],
    aiKicker: "不同的工作方式",
    aiTitle: "AI 是工作方法，不是另一个身份。",
    aiBody:
      "我使用结构化数据、AI 和自动化降低信息摩擦，提取和对比文件，更早暴露风险，把时间留给真正需要专业判断的决策。",
    aiQuote: "我不使用 AI 替代专业判断，而是让复杂的工作变得更清楚。"
  }
} as const;

export const expertise = {
  en: {
    kicker: "EXPERTISE",
    title: "The work between an opportunity and a completed project.",
    lead:
      "My role sits where commercial goals meet regulatory requirements, manufacturing reality and international delivery.",
    areas: [
      ["International business development", "Market evaluation, distributor and importer communication, product matching, quotations, negotiation and long-term partnership development."],
      ["Regulatory coordination", "CPP and GMP documents, CTD-related communication, stability, specifications, analytical methods, legalized documents and deficiency-response coordination."],
      ["Technical and quality communication", "COA, related substances, manufacturing descriptions, packaging specifications, release requirements and implementation of product changes."],
      ["End-to-end order execution", "Contract, prepayment, artwork, production schedule, QA, warehousing, release, shipment, payment, invoice and archive."],
      ["International delivery", "FOB and CIF projects, sea and air freight, shipping documents, customs coordination, delivery planning and freight considerations."],
      ["Commercial and partner risk", "Registration ownership, importer and payer roles, downstream channels, execution capacity, payment logic and long-term market potential."]
    ],
    processTitle: "One connected execution chain",
    process: ["Contract", "Prepayment", "Artwork", "Production", "QA", "Release", "Shipment", "Payment", "Archive"],
    productsTitle: "Products and dosage forms I frequently work with",
    productsLead:
      "This is professional experience, not a live product catalogue. Availability and market status always require project-specific confirmation.",
    productGroups: [
      ["Finished dosage forms", "Sterile powder for injection, injectable solutions, tablets, film-coated tablets, capsules, soft capsules and inhalation aerosols."],
      ["Active pharmaceutical ingredients", "Technical documentation, COA and MSDS, DMF-status communication, R&D samples, standard packing, lead time and commercial-scale evaluation."],
      ["Typical project focus", "Anti-infective injectables, selected hospital products, inhalation products and API registration or supply projects."]
    ]
  },
  zh: {
    kicker: "专业能力",
    title: "从业务机会到项目完成，中间真正需要做的工作。",
    lead: "我的角色位于商务目标、注册要求、生产现实与国际交付的交汇处。",
    areas: [
      ["医药国际业务开发", "市场评估、经销商和进口商沟通、产品匹配、报价、谈判与长期合作开发。"],
      ["注册协调", "CPP、GMP、CTD 相关沟通、稳定性、质量标准、分析方法、文件认证与补件协调。"],
      ["技术与质量沟通", "COA、有关物质、生产工艺说明、包装规格、放行要求与产品变更实施。"],
      ["端到端订单执行", "合同、预付款、包装稿、排产、QA、入库、放行、发运、收款、发票与归档。"],
      ["国际交付", "FOB、CIF、海运、空运、运输单据、报关协调、交付计划与运保费评估。"],
      ["商务与合作方风险", "注册证归属、进口与付款主体、下游渠道、执行能力、付款逻辑与长期市场潜力。"]
    ],
    processTitle: "一条相互依赖的执行链",
    process: ["合同", "预付款", "包装稿", "生产", "QA", "放行", "发运", "收款", "归档"],
    productsTitle: "经常接触的产品与剂型",
    productsLead: "这里表达的是个人专业经验，并非实时产品目录；供应和市场状态必须根据具体项目确认。",
    productGroups: [
      ["制剂剂型", "无菌粉针、注射液、片剂、薄膜衣片、胶囊、软胶囊与吸入气雾剂。"],
      ["原料药", "技术文件、COA 与 MSDS、DMF 状态沟通、研发样品、标准包装、交期与商业规模评估。"],
      ["典型项目方向", "抗感染注射剂、部分医院产品、吸入产品，以及原料药注册或供应项目。"]
    ]
  }
} as const;

export const markets = {
  en: {
    kicker: "MARKETS",
    title: "Pharmaceutical business is local, even when the supply chain is global.",
    lead:
      "My strongest working context is Latin America and CIS-related markets, where commercial, regulatory and manufacturing teams often need close alignment.",
    regions: [
      {
        code: "LATAM",
        title: "Latin America",
        body: "Registration documents, GMP and CPP coordination, local partner communication, samples, commercial quotations and project execution.",
        countries: ["Peru", "Brazil", "Chile", "Colombia", "Mexico", "Venezuela", "Paraguay"]
      },
      {
        code: "CIS / EE",
        title: "CIS & Eastern Europe",
        body: "Pharmacopoeial and quality-standard discussions, registration questions, stability, impurity limits, manufacturing documents and commercial execution.",
        countries: ["Ukraine", "Belarus", "Uzbekistan", "Other CIS-related markets"]
      }
    ],
    regulatoryTitle: "Regulatory environments I frequently coordinate",
    regulatoryLead:
      "I do not present myself as an independent regulatory consultant. I coordinate requirements from the business side and connect overseas questions with regulatory, quality and technical teams.",
    authorities: ["ANVISA · Brazil", "DIGEMID · Peru", "ISP · Chile", "Projects in Colombia and Mexico", "Ukraine and CIS-related registration communication"],
    realityTitle: "The four questions behind market access",
    reality: ["Who owns the registration?", "Who imports?", "Who pays?", "Who distributes?"],
    quote: "A large order is not necessarily a good project. Registration, payment, execution and long-term potential must make sense together."
  },
  zh: {
    kicker: "市场经验",
    title: "供应链可以全球化，但医药业务始终具有本地性。",
    lead: "我最主要的工作语境是拉美、独联体及东欧相关市场，这些项目通常需要商务、注册和生产团队紧密协同。",
    regions: [
      {
        code: "LATAM",
        title: "拉丁美洲",
        body: "注册文件、GMP 与 CPP 协调、本地合作方沟通、样品、商务报价和项目执行。",
        countries: ["秘鲁", "巴西", "智利", "哥伦比亚", "墨西哥", "委内瑞拉", "巴拉圭"]
      },
      {
        code: "CIS / EE",
        title: "独联体与东欧",
        body: "药典与质量标准讨论、注册问题、稳定性、杂质限度、生产文件与商业项目执行。",
        countries: ["乌克兰", "白俄罗斯", "乌兹别克斯坦", "其他独联体相关市场"]
      }
    ],
    regulatoryTitle: "经常协调的监管环境",
    regulatoryLead:
      "我不把自己表述为独立注册顾问。我的职责是从业务侧协调需求，把海外问题与注册、质量和技术团队连接起来。",
    authorities: ["ANVISA · 巴西", "DIGEMID · 秘鲁", "ISP · 智利", "哥伦比亚与墨西哥相关项目", "乌克兰及独联体注册沟通"],
    realityTitle: "市场准入背后的四个问题",
    reality: ["谁持有注册证？", "谁负责进口？", "谁付款？", "谁负责分销？"],
    quote: "大订单不一定是好项目。注册、付款、执行和长期市场潜力必须同时成立。"
  }
} as const;

export const projects = {
  en: {
    kicker: "SELECTED PROJECTS",
    title: "What execution looks like when the details matter.",
    lead:
      "These cases are deliberately anonymized. They show how I structure problems and coordinate action without exposing partners, products or confidential project data.",
    situation: "Situation",
    role: "My role",
    demonstrates: "What it demonstrates",
    privacy: "No customer names, contract references, batch information, prices, quantities or unpublished regulatory status are disclosed."
  },
  zh: {
    kicker: "匿名项目案例",
    title: "当细节真正决定结果时，执行是什么样子。",
    lead: "这些案例经过严格匿名化，只展示我如何梳理问题和协调行动，不暴露合作方、产品或机密项目数据。",
    situation: "项目情境",
    role: "我的职责",
    demonstrates: "体现的能力",
    privacy: "不公开客户名称、合同信息、批次、价格、数量或未公开的注册状态。"
  }
} as const;

export const about = {
  en: {
    kicker: "ABOUT JED",
    title: "A business professional who likes understanding how complex systems actually work.",
    lead:
      "Pharmaceutical international business suits me because every project is a combination of people, regulations, manufacturing, documents, money, time and uncertainty.",
    story: [
      "My work has grown from quotation and customer communication into registration coordination, technical discussions, production follow-up, QA release, international logistics and payment management.",
      "I increasingly see my role as a commercial project executor: someone who understands the business objective, identifies critical dependencies and keeps different teams aligned until the project is truly complete.",
      "That same curiosity led me to build structured working systems with databases, AI and automation. Technology is useful to me only when it makes real work clearer."
    ],
    timelineTitle: "Professional progression",
    timeline: [
      ["Pharmaceutical international business", "Focused on overseas pharmaceutical business, especially Latin America and CIS-related markets."],
      ["From sales to project execution", "Expanded from quotations into registration, production, QA, packaging, logistics and payment coordination."],
      ["A data-driven working system", "Structured years of working records into reusable product, order and execution data."],
      ["AI-enabled workflow", "Applied AI and automation to document processing, information extraction, validation and project tracking."]
    ],
    principlesTitle: "Working principles",
    principles: [
      ["Clarity", "Clear ownership, timelines and next actions."],
      ["Verification", "Important technical, regulatory and commercial assumptions should be checked."],
      ["Execution", "An idea matters only when it can move through registration, production, quality, logistics and payment."],
      ["Systems thinking", "Recurring problems deserve reusable processes, data structures and automation."]
    ]
  },
  zh: {
    kicker: "关于 JED",
    title: "一个喜欢弄清楚复杂系统究竟如何运转的国际业务从业者。",
    lead: "我喜欢医药国际业务，因为每一个项目都是人、法规、生产、文件、资金、时间与不确定性的组合。",
    story: [
      "我的工作从报价和客户沟通，逐步扩展到注册协调、技术讨论、生产跟进、QA 放行、国际物流与收款管理。",
      "我越来越把自己的角色理解为一名商务项目执行者：理解业务目标、识别关键依赖，并让不同团队保持一致，直到项目真正完成。",
      "同样的好奇心也让我开始使用数据库、AI 和自动化建立结构化工作系统。对我来说，技术只有在让真实工作更清楚时才有价值。"
    ],
    timelineTitle: "职业能力演进",
    timeline: [
      ["医药国际业务", "聚焦海外医药业务，尤其是拉美、独联体及东欧相关市场。"],
      ["从销售走向项目执行", "从报价逐步延伸到注册、生产、QA、包装、物流和付款协调。"],
      ["数据驱动的工作系统", "把多年工作记录整理为可复用的产品、订单与执行数据。"],
      ["AI 赋能工作流", "将 AI 与自动化用于文件处理、信息提取、数据核验与项目跟踪。"]
    ],
    principlesTitle: "工作原则",
    principles: [
      ["清晰", "明确责任、时间和下一步行动。"],
      ["核验", "重要的技术、法规与商务假设必须经过确认。"],
      ["执行", "只有真正穿过注册、生产、质量、物流与付款的想法才有价值。"],
      ["系统化", "重复出现的问题，应当沉淀为可复用的流程、数据结构和自动化。"]
    ]
  }
} as const;

export const contact = {
  en: {
    kicker: "CONTACT",
    title: "Start with the project, not a generic introduction.",
    lead:
      "A useful first message usually includes the target market, product or dosage form, current project stage and the specific issue you are trying to solve.",
    responseTitle: "Best ways to connect",
    note:
      "This is a personal professional website. Any supply, registration or commercial proposal requires project-specific review and formal confirmation by the relevant parties."
  },
  zh: {
    kicker: "联系",
    title: "从具体项目开始，而不是泛泛介绍。",
    lead: "一条有效的首次信息通常包括目标市场、产品或剂型、当前项目阶段，以及希望解决的具体问题。",
    responseTitle: "建议的联系方式",
    note: "这是个人职业网站。任何供应、注册或商务方案，都需要根据具体项目由相关主体审查并正式确认。"
  }
} as const;

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
        "Pharmaceutical international business professional focused on Latin America and CIS & Eastern Europe, covering registration coordination, project execution, supply chain and AI-enabled trade workflows."
    },
    expertise: {
      title: "Expertise | Jed Liu — Pharmaceutical International Business",
      description:
        "International business development, pharmaceutical registration coordination, quality communication, order execution and international delivery."
    },
    markets: {
      title: "Markets | Latin America and CIS & Eastern Europe Pharmaceutical Experience",
      description:
        "Practical pharmaceutical project coordination across Latin America and CIS & Eastern Europe."
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
      description: "聚焦拉美、独联体与东欧市场，覆盖药品注册协调、项目执行、国际交付与 AI 赋能外贸工作流。"
    },
    expertise: {
      title: "专业能力｜Jed 医药国际业务",
      description: "医药国际业务开发、注册协调、质量技术沟通、订单执行与国际交付能力。"
    },
    markets: {
      title: "市场经验｜拉美、独联体与东欧医药市场",
      description: "面向拉美、独联体与东欧市场的医药项目协调与国际业务实践。"
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
    eyebrow: "Pharmaceutical International Business",
    primaryCta: "Discuss a Project",
    secondaryCta: "View My Expertise",
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
    heroTitleStart: "From registration to delivery, I help pharmaceutical projects ",
    heroTitleEmphasis: "move forward.",
    heroLead:
      "Connecting international business development with regulatory, technical and operational work — so projects move forward with clarity and discipline.",
    heroAnnotations: ["Markets", "Coordination", "Execution"],
    expertiseKicker: "WHERE I WORK",
    expertiseTitle: "I work where commercial opportunity meets regulatory and operational reality.",
    expertise: [
      {
        number: "01",
        title: "International Business Development",
        body: "Identify and evaluate markets, partners and opportunities. Build the right entry strategy and business model.",
        icon: "globe-hemisphere-west"
      },
      {
        number: "02",
        title: "Regulatory & Technical Coordination",
        body: "Navigate registration pathways, technical requirements and authority expectations across different markets.",
        icon: "file-text"
      },
      {
        number: "03",
        title: "Project Execution & International Delivery",
        body: "Coordinate manufacturing, documentation, logistics and deliverables to ensure projects reach the market.",
        icon: "clipboard-text"
      },
      {
        number: "04",
        title: "AI-enabled Working Systems",
        body: "Use AI to enhance research, analysis, documentation and decision-making — so teams work with more clarity.",
        icon: "circles-three-plus"
      }
    ],
    processKicker: "HOW PROJECTS MOVE",
    processTitle: "A connected process from objective to follow-up.",
    process: [
      { title: "Define Objective", body: "Clarify the project’s purpose, target indications and success criteria. Align stakeholders on scope, timeline and key milestones.", meta: "Clarity sets everything in motion.", icon: "strategy" },
      { title: "Market & Feasibility", body: "Assess market context, product fit, partner readiness and the practical conditions needed to make the opportunity viable.", meta: "Good projects begin with the right questions.", icon: "magnifying-glass" },
      { title: "Regulatory Strategy", body: "Map the registration route, core documentation, technical questions and authority expectations before execution accelerates.", meta: "Requirements shape the route forward.", icon: "file-text" },
      { title: "Execution & Coordination", body: "Connect commercial, regulatory, quality and manufacturing teams around dependencies, decisions and deadlines.", meta: "Coordination turns plans into progress.", icon: "users-three" },
      { title: "Delivery & Submission", body: "Bring documentation, product readiness, shipment timing and formal submissions together at the point of delivery.", meta: "Every deliverable must arrive complete.", icon: "paper-plane-tilt" },
      { title: "Closeout & Follow-up", body: "Confirm outcomes, archive the working record, resolve remaining actions and carry learning into the next cycle.", meta: "A clean closeout strengthens what follows.", icon: "seal-check" }
    ],
    marketsKicker: "MARKETS I WORK IN",
    marketsTitle: "Experience shaped by different market realities.",
    regions: [
      { title: "Latin America", body: "Deep ties with key partners across the region." },
      { title: "CIS & Eastern Europe", body: "Focus on sustainable market access." }
    ],
    casesKicker: "SELECTED PROJECT CASES",
    caseMarkets: ["Latin America", "CIS & Eastern Europe", "Latin America"],
    aiKicker: "AI-ENABLED WORKING METHOD",
    aiTitle: "AI is part of my working method, not my professional identity.",
    aiBody:
      "I use AI tools every day to research, analyze, draft and organize. It amplifies my ability to think, coordinate and deliver.",
    aiSteps: [
      { title: "Research & Analysis", icon: "magnifying-glass" },
      { title: "Organize & Structure", icon: "list-checks" },
      { title: "Coordinate & Execute", icon: "users-three" },
      { title: "Document & Deliver", icon: "check-square" }
    ],
    aboutKicker: "ABOUT ME",
    aboutTitle: "I am interested in how complicated systems actually work.",
    contactTitle: "Let’s discuss a project.",
    wechatLabel: "WeChat: lijied03"
  },
  zh: {
    heroTitleStart: "从注册到交付，我推动医药项目",
    heroTitleEmphasis: "持续向前。",
    heroLead:
      "连接国际业务开发与注册、技术和运营工作，让项目在清晰的判断与严谨的执行中持续推进。",
    heroAnnotations: ["市场", "协调", "执行"],
    expertiseKicker: "我的工作界面",
    expertiseTitle: "我工作在商业机会、注册要求与运营现实的交汇处。",
    expertise: [
      {
        number: "01",
        title: "医药国际业务开发",
        body: "识别和评估市场、合作伙伴与机会，建立合适的市场进入策略和业务模式。",
        icon: "globe-hemisphere-west"
      },
      {
        number: "02",
        title: "注册与技术协调",
        body: "理解不同市场的注册路径、技术要求与监管预期，并推动各方形成一致。",
        icon: "file-text"
      },
      {
        number: "03",
        title: "项目执行与国际交付",
        body: "协调生产、文件、物流和交付成果，确保项目真正走向市场。",
        icon: "clipboard-text"
      },
      {
        number: "04",
        title: "AI 赋能的工作系统",
        body: "使用 AI 增强研究、分析、文档和决策，让团队更清楚地协同推进。",
        icon: "circles-three-plus"
      }
    ],
    processKicker: "项目如何推进",
    processTitle: "从目标定义到后续跟进的一体化流程。",
    process: [
      { title: "明确目标", body: "澄清项目目的、目标适应症和成功标准，让相关方就范围、时间线与关键里程碑达成一致。", meta: "清晰的目标让一切开始运转。", icon: "strategy" },
      { title: "市场与可行性", body: "评估市场语境、产品匹配度、合作方准备情况，以及机会落地所需的现实条件。", meta: "好项目始于正确的问题。", icon: "magnifying-glass" },
      { title: "注册策略", body: "在执行加速前梳理注册路径、核心文件、技术问题与监管预期。", meta: "要求决定前进的路线。", icon: "file-text" },
      { title: "执行与协调", body: "围绕依赖关系、决策与期限，连接商务、注册、质量和生产团队。", meta: "协调让计划变成进展。", icon: "users-three" },
      { title: "交付与申报", body: "在交付节点整合文件、产品准备、发运节奏与正式申报。", meta: "每项成果都必须完整抵达。", icon: "paper-plane-tilt" },
      { title: "收尾与跟进", body: "确认结果、归档工作记录、解决剩余事项，并将经验带入下一轮项目。", meta: "清晰收尾，让后续更稳健。", icon: "seal-check" }
    ],
    marketsKicker: "我的市场经验",
    marketsTitle: "在不同市场现实中形成的工作经验。",
    regions: [
      { title: "拉丁美洲", body: "与区域内关键合作伙伴保持深入协作。" },
      { title: "独联体与东欧", body: "聚焦可持续的市场准入。" }
    ],
    casesKicker: "精选匿名项目案例",
    caseMarkets: ["拉丁美洲", "独联体与东欧", "拉丁美洲"],
    aiKicker: "AI 赋能的工作方法",
    aiTitle: "AI 是我的工作方法之一，而不是我的职业身份。",
    aiBody:
      "我每天使用 AI 工具进行研究、分析、起草与整理。它放大了我的思考、协调和交付能力。",
    aiSteps: [
      { title: "研究与分析", icon: "magnifying-glass" },
      { title: "组织与结构化", icon: "list-checks" },
      { title: "协调与执行", icon: "users-three" },
      { title: "文档与交付", icon: "check-square" }
    ],
    aboutKicker: "关于我",
    aboutTitle: "我对复杂系统究竟如何运作始终保持兴趣。",
    contactTitle: "一起聊聊项目。",
    wechatLabel: "微信：lijied03"
  }
} as const;

export const expertise = {
  en: {
    kicker: "EXPERTISE",
    title: "The work that turns an opportunity into a deliverable project.",
    lead:
      "I connect commercial goals with regulatory requirements, technical decisions, manufacturing readiness and international delivery.",
    areas: [
      ["International business development", "Evaluate market context, partner readiness and product fit; turn early conversations into a clear opportunity brief and a practical route forward."],
      ["Regulatory & technical coordination", "Structure registration questions, documentation dependencies and technical responses, then connect overseas requirements with the right internal specialists."],
      ["Quality & manufacturing alignment", "Clarify specifications, analytical expectations, packaging requirements, manufacturing scope and release readiness before they become execution risks."],
      ["Project execution & international delivery", "Track owners, decisions, milestones, product readiness, shipping documentation and handover so the project moves as one connected system."]
    ],
    processKicker: "REGISTRATION → DELIVERY",
    processTitle: "One connected chain, with every handoff visible.",
    process: ["Objective & fit", "Registration route", "Technical package", "Artwork & readiness", "Production", "Quality release", "Shipping documents", "Handover & archive"],
    productsTitle: "Product experience, presented as context",
    productsLead:
      "These categories describe anonymized personal working experience. They are not a live catalogue, an availability statement or an offer; every project requires current, formal confirmation.",
    productGroups: [
      ["Sterile & injectable forms", "Working familiarity with sterile powders and injectable solutions, including the documentation and coordination questions that surround them."],
      ["Oral & inhalation forms", "Experience contexts include tablets, capsules, soft capsules and inhalation aerosols, with dosage-form-specific packaging and technical considerations."],
      ["Active ingredients", "Coordination may cover technical packages, quality documents, sample readiness, standard packing and feasibility questions for registration or supply evaluation."]
    ]
  },
  zh: {
    kicker: "专业能力",
    title: "把业务机会变成可交付项目，中间真正需要做的工作。",
    lead: "我连接商务目标、注册要求、技术决策、生产准备与国际交付。",
    areas: [
      ["医药国际业务开发", "评估市场语境、合作方准备度与产品匹配度，把早期沟通整理成清晰的机会简报和可执行的推进路径。"],
      ["注册与技术协调", "梳理注册问题、文件依赖与技术回复，再把海外要求连接到合适的内部专业团队。"],
      ["质量与生产协同", "提前澄清质量标准、分析要求、包装需求、生产范围与放行准备，避免它们在执行阶段变成风险。"],
      ["项目执行与国际交付", "跟踪负责人、决策、里程碑、产品准备、运输文件与项目交接，让各环节作为一个系统持续推进。"]
    ],
    processKicker: "注册 → 交付",
    processTitle: "一条相互连接、每次交接都清楚可见的执行链。",
    process: ["目标与匹配", "注册路径", "技术资料", "包装稿与准备", "生产", "质量放行", "运输文件", "交接与归档"],
    productsTitle: "作为经验语境呈现的产品范围",
    productsLead: "以下类别来自脱敏后的个人工作经验，并非实时产品目录、供应声明或要约；每个具体项目都需要以当下的正式确认为准。",
    productGroups: [
      ["无菌与注射剂型", "对无菌粉针和注射液相关的文件、技术问题与协作界面具备工作层面的理解。"],
      ["口服与吸入剂型", "经验语境包括片剂、胶囊、软胶囊与吸入气雾剂，以及不同剂型对应的包装和技术关注点。"],
      ["原料药", "协调内容可能涉及技术资料、质量文件、样品准备、标准包装，以及注册或供应评估阶段的可行性问题。"]
    ]
  }
} as const;

export const markets = {
  en: {
    kicker: "MARKETS",
    title: "Pharmaceutical business is local, even when the supply chain is global.",
    lead:
      "My working context is concentrated in Latin America and CIS & Eastern Europe, where commercial, regulatory and manufacturing teams often need close alignment.",
    regions: [
      {
        code: "LATAM",
        title: "Latin America",
        body: "Projects often require careful sequencing across local partner questions, registration documentation, samples, technical clarification and operational readiness.",
        contexts: ["Local partner alignment", "Documentation pathways", "Sample & artwork readiness", "Cross-time-zone follow-up"]
      },
      {
        code: "CIS / EE",
        title: "CIS & Eastern Europe",
        body: "Work frequently involves close reading of quality expectations, registration questions, manufacturing scope and the dependencies between technical and commercial teams.",
        contexts: ["Quality-standard alignment", "Technical question mapping", "Manufacturing scope", "Execution dependencies"]
      }
    ],
    scopeNote: "Regional focus describes my personal working context; it does not claim coverage of every country or independent authority representation.",
    regulatoryTitle: "Coordination across different operating contexts",
    regulatoryLead:
      "I coordinate from the business side rather than acting as an independent regulatory adviser. The work is to make questions, owners, evidence and next actions legible across teams.",
    authorities: ["Map the local requirement", "Identify the accountable owner", "Verify the supporting evidence", "Keep decisions and follow-up visible"],
    realityTitle: "Four questions behind a workable market route",
    reality: ["Who holds the registration responsibility?", "Who manages the import route?", "Who owns operational follow-up?", "How will teams verify decisions?"],
    quote: "A promising opportunity becomes a good project only when registration, execution capacity and long-term fit make sense together."
  },
  zh: {
    kicker: "市场经验",
    title: "供应链可以全球化，但医药业务始终具有本地性。",
    lead: "我的工作语境主要集中在拉美、独联体与东欧，这些项目通常需要商务、注册和生产团队紧密协同。",
    regions: [
      {
        code: "LATAM",
        title: "拉丁美洲",
        body: "项目往往需要细致安排本地合作方问题、注册文件、样品、技术澄清与运营准备之间的先后关系。",
        contexts: ["本地合作方协同", "文件路径梳理", "样品与包装稿准备", "跨时区跟进"]
      },
      {
        code: "CIS / EE",
        title: "独联体与东欧",
        body: "工作中经常需要仔细理解质量预期、注册问题、生产范围，以及技术团队与商务团队之间的依赖关系。",
        contexts: ["质量标准衔接", "技术问题拆解", "生产范围澄清", "执行依赖管理"]
      }
    ],
    scopeNote: "区域聚焦描述的是我的个人工作语境，不代表覆盖每个国家，也不代表任何监管机构。",
    regulatoryTitle: "在不同运营语境之间建立协同",
    regulatoryLead:
      "我从业务侧开展协调，而不是把自己表述为独立注册顾问。工作的关键，是让跨团队的问题、负责人、依据和下一步行动都清晰可见。",
    authorities: ["梳理本地要求", "识别责任人", "核验支持依据", "保持决策与跟进可见"],
    realityTitle: "一条可执行市场路径背后的四个问题",
    reality: ["谁承担注册责任？", "谁管理进口路径？", "谁负责运营跟进？", "团队如何核验决策？"],
    quote: "只有当注册路径、执行能力与长期匹配度同时成立，一项有吸引力的机会才会成为好项目。"
  }
} as const;

export const projects = {
  en: {
    kicker: "SELECTED PROJECTS",
    title: "What execution looks like when the details matter.",
    lead:
      "These cases are deliberately anonymized. They show how I structure problems and coordinate action without exposing partners, products or confidential project data.",
    basis: "ANONYMIZED PERSONAL WORKING RECORDS · ILLUSTRATIVE, NOT AN EMPLOYER DISCLOSURE OR COMMERCIAL COMMITMENT",
    situation: "Situation",
    role: "My role",
    demonstrates: "What it demonstrates",
    privacy: "Only the problem-solving pattern is shown. Identifying parties, transaction records, non-public operational details and unpublished regulatory information are excluded."
  },
  zh: {
    kicker: "匿名项目案例",
    title: "当细节真正决定结果时，执行是什么样子。",
    lead: "这些案例经过严格匿名化，只展示我如何梳理问题和协调行动，不暴露合作方、产品或机密项目数据。",
    basis: "脱敏个人工作记录 · 仅作方法示例，不代表雇主披露或商业承诺",
    situation: "项目情境",
    role: "我的职责",
    demonstrates: "体现的能力",
    privacy: "页面只展示解决问题的方法，不包含可识别主体、交易记录、非公开运营细节或未公开注册信息。"
  }
} as const;

export const about = {
  en: {
    kicker: "ABOUT JED",
    title: "A business professional who likes understanding how complex systems actually work.",
    lead:
      "Pharmaceutical international business suits me because every project combines people, regulations, manufacturing, documents, time and uncertainty.",
    story: [
      "My work has grown from early commercial communication into registration coordination, technical discussions, production follow-up, quality release and international logistics.",
      "I increasingly see my role as a commercial project executor: someone who understands the business objective, identifies critical dependencies and keeps different teams aligned until the project is truly complete.",
      "That same curiosity led me to build structured working systems with databases, AI and automation. Technology is useful to me only when it makes real work clearer."
    ],
    timelineTitle: "Professional progression",
    timeline: [
      ["Pharmaceutical international business", "Focused on overseas pharmaceutical business, especially Latin America and CIS & Eastern Europe."],
      ["From sales to project execution", "Expanded from early commercial work into registration, production, quality, packaging and logistics coordination."],
      ["A data-driven working system", "Structured years of working records into reusable product, order and execution data."],
      ["AI-supported workflow", "Applied AI and automation to document processing, information extraction, validation and project tracking — always with human review."]
    ],
    principlesTitle: "Working principles",
    principles: [
      ["Clarity", "Clear ownership, timelines and next actions."],
      ["Verification", "Important technical, regulatory and commercial assumptions should be checked."],
      ["Execution", "An idea matters only when it can move through registration, production, quality, logistics and handover."],
      ["Systems thinking", "Recurring problems deserve reusable processes, data structures and automation."]
    ],
    aiTitle: "AI supports the method; it does not replace the profession.",
    aiBody: "I use AI to research, structure, compare, draft and track information. Professional judgment, source verification and accountable decisions remain human responsibilities.",
    aiSteps: ["Research", "Structure", "Verify", "Deliver"]
  },
  zh: {
    kicker: "关于 JED",
    title: "一个喜欢弄清楚复杂系统究竟如何运转的国际业务从业者。",
    lead: "我喜欢医药国际业务，因为每一个项目都是人、法规、生产、文件、时间与不确定性的组合。",
    story: [
      "我的工作从早期商务沟通，逐步扩展到注册协调、技术讨论、生产跟进、质量放行与国际物流。",
      "我越来越把自己的角色理解为一名商务项目执行者：理解业务目标、识别关键依赖，并让不同团队保持一致，直到项目真正完成。",
      "同样的好奇心也让我开始使用数据库、AI 和自动化建立结构化工作系统。对我来说，技术只有在让真实工作更清楚时才有价值。"
    ],
    timelineTitle: "职业能力演进",
    timeline: [
      ["医药国际业务", "聚焦海外医药业务，尤其是拉美、独联体与东欧市场。"],
      ["从销售走向项目执行", "从早期商务工作逐步延伸到注册、生产、质量、包装和物流协调。"],
      ["数据驱动的工作系统", "把多年工作记录整理为可复用的产品、订单与执行数据。"],
      ["AI 支持的工作流", "将 AI 与自动化用于文件处理、信息提取、数据核验与项目跟踪，并始终保留人工复核。"]
    ],
    principlesTitle: "工作原则",
    principles: [
      ["清晰", "明确责任、时间和下一步行动。"],
      ["核验", "重要的技术、法规与商务假设必须经过确认。"],
      ["执行", "只有真正穿过注册、生产、质量、物流与交接的想法才有价值。"],
      ["系统化", "重复出现的问题，应当沉淀为可复用的流程、数据结构和自动化。"]
    ],
    aiTitle: "AI 支持工作方法，但不替代专业本身。",
    aiBody: "我使用 AI 研究、整理、比较、起草和跟踪信息；专业判断、来源核验与可追责的决策仍然由人完成。",
    aiSteps: ["研究", "结构化", "核验", "交付"]
  }
} as const;

export const contact = {
  en: {
    kicker: "CONTACT",
    title: "Start with the project, not a generic introduction.",
    lead:
      "A useful first message usually includes the target market, product or dosage form, current project stage and the specific issue you are trying to solve.",
    responseTitle: "Best ways to connect",
    promptTitle: "A useful first note",
    prompts: ["Target market", "Product / dosage form", "Current project stage", "Issue to solve"],
    note:
      "This is a personal professional website. Any supply, registration or commercial proposal requires project-specific review and formal confirmation by the relevant parties."
  },
  zh: {
    kicker: "联系",
    title: "从具体项目开始，而不是泛泛介绍。",
    lead: "一条有效的首次信息通常包括目标市场、产品或剂型、当前项目阶段，以及希望解决的具体问题。",
    responseTitle: "建议的联系方式",
    promptTitle: "首次联系建议包含",
    prompts: ["目标市场", "产品 / 剂型", "当前项目阶段", "希望解决的问题"],
    note: "这是个人职业网站。任何供应、注册或商务方案，都需要根据具体项目由相关主体审查并正式确认。"
  }
} as const;

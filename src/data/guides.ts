import type { Locale } from "@/config/site";

export type Guide = {
  slug: string;
  title: string;
  description: string;
  answer: string;
  sections: { title: string; text: string; items?: string[] }[];
  example: string;
  takeaway: string;
  sources: { title: string; url: string; note: string }[];
};

export const guides: Record<Locale, Guide[]> = {
  en: [
    {
      slug: "pharmaceutical-project-brief",
      title: "How to prepare a pharmaceutical international business project brief",
      description: "A practical project brief for pharmaceutical buyers and business teams: clarify the market, product, documents, commercial assumptions and next decision.",
      answer: "A useful pharmaceutical project brief identifies the destination market, product and dosage form, the parties involved, the current registration stage, and the next commercial decision. It separates confirmed facts from assumptions so that a quotation, dossier discussion or delivery estimate is based on the same scope.",
      sections: [
        { title: "Start with one market and one defined product", text: "A regional opportunity is useful context, but a working brief needs a specific destination. For a Latin America project, record the country first, then clarify the proposed product with the relevant commercial and technical contacts. Do not use a regional label as evidence that the same route or documents apply everywhere.", items: ["Destination country, customer organization and contact responsible for the next decision.", "Product name, API or finished dosage form, strength and proposed presentation where known.", "Purpose of the discussion: opportunity review, quotation, dossier assessment or an existing order."] },
        { title: "Make the unknowns visible before discussing timing", text: "Use three statuses: confirmed, awaiting confirmation and not yet assessed. A requested launch date is a customer objective; it is not a confirmed registration or delivery date. Ask the responsible team to review dependencies before putting dates into a commercial commitment.", items: ["Who will confirm the local requirements and the intended applicant or importer arrangement?", "Which technical documents have been requested, and has their availability actually been checked?", "What quantity, packaging, currency and delivery location are being discussed?"] },
        { title: "Turn the brief into a decision record", text: "Keep a short version number, an owner and a date for every material update. When a requirement changes, record the impact on the open quotation, document request and delivery assumption. Send a focused question to the person who can resolve it, then preserve the written answer with the brief.", items: ["Decision needed and the person responsible for confirming it.", "Supporting document or message, with its version and date.", "Next action, target review date and dependencies that remain open."] }
      ],
      example: "Illustrative situation: a customer asks for an injectable product for a Latin America market without naming the country or pack size. The next action is to clarify destination, presentation and the purpose of the enquiry. Issuing a firm delivery date at this point would hide unresolved assumptions. This is a hypothetical workflow example, not a customer case.",
      takeaway: "The first deliverable is a brief that both sides can confirm. A longer product list is less useful than one clearly scoped opportunity with named owners and visible open questions.",
      sources: []
    },
    {
      slug: "registration-document-coordination",
      title: "Pharmaceutical registration document coordination: a working checklist",
      description: "Organize pharmaceutical registration questions, dossier versions, technical owners and response status without confusing document coordination with approval.",
      answer: "Registration document coordination means turning a requirement or dossier question into a traceable action: identify its source, assign a technical owner, track the document version and obtain confirmation of the response. A completed document handover records what was sent; it does not itself establish regulatory acceptance or product approval.",
      sections: [
        { title: "Separate the requirement from the proposed response", text: "Keep the original request alongside the team's interpretation. Record the destination, product, requesting party and request date. If wording is translated, retain the source-language version so a technical reviewer can check meaning. The checklist on this page organizes communication; it is not a country-specific dossier requirement list." },
        { title: "Build a document tracker around ownership", text: "A tracker should make it possible to find both the current file and the person who can answer a question about it. These fields are useful even when a project has only a handful of open documents.", items: ["Request reference and source: who asked, when, and for which product or market.", "Document title, file version, issue date and approved sharing location.", "Technical owner, business coordinator and intended recipient.", "Status: requested, under review, ready to share, sent or awaiting clarification.", "Next action and target response date, distinguished from a committed approval date."] },
        { title: "Review before handover and keep the receipt", text: "Before sending a package, confirm that its files correspond to the intended product and version and that the responsible team has authorized external sharing. Record the package contents and the recipient's acknowledgement. If a file is replaced, identify the superseded version instead of leaving two apparently current copies." },
        { title: "Use official references for regulatory questions", text: "ICH provides the official Common Technical Document reference. Consult the destination authority and the responsible regulatory professionals for the requirements that apply to an actual submission. A general format reference cannot resolve a product-specific question by itself." }
      ],
      example: "Illustrative situation: a customer sends a question about a dossier file while a revised file is being prepared. The coordinator links the question to the exact earlier version, routes it to the technical owner and records which replacement was ultimately sent. The tracker preserves the chain of communication without claiming that the replacement has been accepted by an authority.",
      takeaway: "Good coordination closes the communication loop: request, owner, version, response and acknowledgement. Keep regulatory decisions attributed to the people or authority responsible for them.",
      sources: [{ title: "ICH — Common Technical Document (CTD)", url: "https://www.ich.org/page/ctd", note: "Official format reference; consult the relevant authority for local applicability." }]
    },
    {
      slug: "pharmaceutical-shipment-handover",
      title: "Pharmaceutical shipment handover: align documents, owners and delivery",
      description: "A business coordination checklist for pharmaceutical shipment handover, from contract references and document versions to logistics updates and delivery follow-up.",
      answer: "A pharmaceutical shipment handover should connect the agreed order, the shipment document set, the responsible teams and the next delivery milestone. Keep product release decisions with the authorized quality team, confirm the agreed commercial and logistics responsibilities, and track exceptions until the receiving party acknowledges the handover.",
      sections: [
        { title: "Confirm the shared order reference", text: "Start with the current contract or order reference and the agreed shipment scope. Record which items, quantities and presentation are covered by this handover. If there is a split shipment or revised schedule, make that visible to the customer, operations team and logistics contact before circulating a document package." },
        { title: "Check consistency across the document set", text: "Use a project-specific checklist confirmed by the responsible teams. Invoice, packing list and transport document references may be part of that review; the final document set depends on the actual shipment and applicable requirements. Check consistency rather than assuming that a generic list is sufficient.", items: ["Confirm the consignee and notification details against the agreed instructions.", "Reconcile product descriptions, quantities and package information across current drafts.", "Identify the owner who will approve each final document and any necessary correction.", "Confirm product-specific transport instructions with the responsible quality and logistics teams.", "Record which files are drafts and which have been cleared for the intended use."] },
        { title: "Write down the commercial and logistics responsibilities", text: "Record the agreed trade term, named place and version in the contract context. ICC's Incoterms® rules describe how delivery tasks, costs and risks are allocated between seller and buyer. Ask the relevant commercial or logistics owner to resolve unclear responsibilities before treating a schedule as confirmed." },
        { title: "Close the loop after dispatch", text: "Dispatch is a milestone, not the end of coordination. Record the latest transport reference, the next expected update and the contact handling an exception. At delivery, obtain the receiving party's acknowledgement and keep remaining questions assigned to an owner. Avoid marking a shipment complete solely because a carrier status changed." }
      ],
      example: "Illustrative situation: the customer changes consignee details after a packing list draft has circulated. Flag the change, confirm who approves it, update the affected documents and identify the current package before handover. This example describes communication control, not permission to amend any particular transport document.",
      takeaway: "A reliable handover answers four questions: what is moving, which documents are current, who owns the next action and what still needs confirmation.",
      sources: [{ title: "ICC — Incoterms® rules", url: "https://iccwbo.org/business-solutions/incoterms-rules/", note: "Official reference for the allocation of delivery tasks, costs and risks." }]
    }
  ],
  zh: [
    {
      slug: "pharmaceutical-project-brief",
      title: "医药外贸项目启动：如何整理一份清晰的需求简报",
      description: "面向医药国际业务的项目启动清单：先明确目标市场、产品、资料、商务假设和下一步决策，让报价与执行有共同依据。",
      answer: "一份有用的医药外贸项目简报，需要明确目的国、产品与剂型、参与方、当前注册阶段以及下一步商务决策。把已确认事实和待确认假设分开，才能让报价、资料沟通和交期讨论围绕同一个项目范围展开。",
      sections: [
        { title: "先确定一个市场和一个产品范围", text: "区域机会可以作为背景，但推进项目需要具体目的国。面向拉丁美洲市场时，先记录国家，再向商务和技术联系人确认产品范围。不能仅凭“拉美项目”这个标签，就认为各国的路径或资料要求相同。", items: ["目的国、客户机构，以及负责下一步决策的联系人。", "产品名称、原料药或制剂、已知的规格和拟定包装。", "本次沟通的目的：机会评估、询价、资料评估，还是已有订单的跟进。"] },
        { title: "讨论时间之前，把未知项列出来", text: "用已确认、待确认、尚未评估三种状态整理信息。客户希望的上市时间是目标，不等于已确认的注册或交付日期。形成商务承诺之前，应请负责团队检查依赖条件。", items: ["由谁确认当地要求，以及拟定的申请方或进口方安排？", "对方提出了哪些技术资料需求，是否核实过资料可用性？", "正在讨论的数量、包装、币种和交付地点分别是什么？"] },
        { title: "把需求简报变成可追溯的决策记录", text: "每次重要更新都记录版本、负责人和日期。需求变化时，同时记录对报价、资料请求和交付假设的影响。把具体问题交给能确认的人，并将书面回复和简报保存在一起。", items: ["本次需要作出的决定，以及负责确认的人。", "支撑该决定的文件或消息及其版本、日期。", "下一步行动、计划复核时间和仍未解决的依赖项。"] }
      ],
      example: "假设场景：客户询问一款面向拉美的注射剂，却没有说明国家和包装。下一步应先确认目的国、产品呈现和询盘用途。如果直接给出确定交期，就把尚未解决的假设藏进了承诺中。这是流程示例，不是真实客户案例。",
      takeaway: "第一份成果应是双方可以确认的需求简报。相比很长的产品清单，一个范围清楚、责任明确、问题可见的机会更容易继续推进。",
      sources: []
    },
    {
      slug: "registration-document-coordination",
      title: "医药注册资料协调：需求、版本与责任人的跟进清单",
      description: "把医药注册资料需求变成可追踪的行动：记录问题来源、文件版本、技术责任人、回复状态与交接确认。",
      answer: "注册资料协调，是把一条要求或资料问题转化成可追溯的行动：确认来源、指定技术责任人、跟踪文件版本，并确认回复是否送达。完成资料交接，只能说明发送了什么，不能据此认定监管方已接受资料或产品已经获批。",
      sections: [
        { title: "分开保存原始要求和拟定回复", text: "保留原始请求，也记录团队对请求的理解。写清目的国、产品、提出问题的一方和日期。如果内容经过翻译，同时保留原语言版本，供技术审核人核对含义。本页用于组织沟通，不是任何国家的注册资料要求清单。" },
        { title: "围绕责任人建立资料台账", text: "台账应同时帮助团队找到当前文件，以及能解释这个文件的人。即使只有少量待办资料，也可以用以下字段避免遗漏。", items: ["需求编号和来源：谁在何时、针对哪个产品或市场提出。", "文件名称、版本、签发日期和经批准的共享位置。", "技术责任人、商务协调人及接收方。", "状态：已请求、审核中、可发送、已发送、待澄清。", "下一步行动和目标回复时间，并与获批时间的承诺区分。"] },
        { title: "交接前检查，交接后保留确认", text: "发送资料包前，确认文件对应正确的产品和版本，并经过负责团队的外发授权。记录资料包目录和接收方确认。文件被替换时，应标明旧版本已被取代，避免留下两份看起来都有效的文件。" },
        { title: "法规问题回到官方来源核实", text: "ICH 提供通用技术文档 CTD 的官方参考。具体申报应由对应目的国主管机构要求和负责的注册专业人员确认。通用格式参考本身，不能解决某个产品的具体适用问题。" }
      ],
      example: "假设场景：新版资料正在准备，客户此时针对旧版提出问题。协调人先把问题关联到准确的旧版本，再交给技术责任人，最后记录实际发出的替换版本。台账保留沟通链路，但不把发出新版等同于监管接受。",
      takeaway: "资料协调需要闭合五个环节：请求、责任人、版本、回复、接收确认。监管结论应始终归属于真正负责该结论的专业人员或主管机构。",
      sources: [{ title: "ICH — 通用技术文档 CTD", url: "https://www.ich.org/page/ctd", note: "官方格式参考；当地适用要求需向对应主管机构确认。" }]
    },
    {
      slug: "pharmaceutical-shipment-handover",
      title: "医药外贸发运交接：对齐文件、责任人与交付节点",
      description: "从合同引用、文件版本到物流动态和收货跟进，整理医药国际业务发运交接中的商务协同要点。",
      answer: "医药发运交接应把约定订单、发运文件、负责团队和下一个交付节点串联起来。产品放行由获授权的质量团队负责，商务和物流责任应按项目约定核实，异常事项则持续跟进到接收方确认交接。",
      sections: [
        { title: "先确认共同使用的订单依据", text: "从当前合同或订单编号及本次发运范围开始，写清本次交接覆盖的产品、数量和包装。如果涉及分批发运或排期调整，应在流转文件包之前让客户、运营团队和物流联系人看到变化。" },
        { title: "检查文件之间是否一致", text: "使用经过负责团队确认的项目清单。发票、装箱单和运输文件编号可以是核对内容的一部分；最终文件范围取决于真实货物和适用要求。重点是检查一致性，不能把通用清单当作完整要求。", items: ["根据已确认的指示核对收货人和通知方信息。", "核对当前草稿中的产品描述、数量和包装信息。", "写清每份最终文件由谁确认，修改由谁负责。", "向质量和物流负责人确认产品所需的运输指示。", "明确哪些文件是草稿，哪些已获准用于预定用途。"] },
        { title: "写清商务与物流分工", text: "在合同语境中记录约定贸易术语、指定地点和版本。ICC 的 Incoterms® 规则用于明确买卖双方在交付中的任务、费用和风险分配。在把排期视为已确认之前，应请相关商务或物流负责人解决职责不清的问题。" },
        { title: "发出以后继续闭环", text: "发运只是节点，不是协调工作的终点。记录最新运输引用、下一次预计更新时间和异常负责人。交付时取得接收方确认，并让遗留问题持续有责任人跟进。不要仅凭承运人状态变化，就把整票项目标记为完成。" }
      ],
      example: "假设场景：装箱单草稿已经流转，客户随后修改收货人信息。应标记变化、确认修改责任人、更新受影响文件，并在交接前明确当前资料包。这说明的是沟通控制方法，不代表任何特定运输文件都可以直接修改。",
      takeaway: "可靠的交接能回答四个问题：本次发什么、哪套文件有效、下一步谁负责、还有什么需要确认。",
      sources: [{ title: "ICC — Incoterms® 规则", url: "https://iccwbo.org/business-solutions/incoterms-rules/", note: "关于交付任务、费用和风险分配的官方参考。" }]
    }
  ]
};

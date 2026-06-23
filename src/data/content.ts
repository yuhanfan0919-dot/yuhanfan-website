/**
 * 简历内容中心化数据 - v2
 *
 * Schema 调整（v2）：
 * - Hero: 加 portrait 字段；title 拆为 prefix/accent/suffix；副标题改为三段 chips
 * - About: titleLines 双标语；paragraphs 精简到 2 段
 * - Projects: 单项目 + submodules[]
 * - Experience: 大调——加 category / metricA / metricB / modalBullets / modalQuote / deepThinkChip / deepThinkContent / imageSlug
 * - Skills: 改成 chips[]
 * - Contact: methods 精简
 *
 * 用词规范：
 * - 英文名 Rain Fan（不是 Rain Yu / Yuhan Fan）
 * - 公司全称 顺丰科技
 * - 项目品牌名 oppachikin（不是 Chicken Oppa）
 * - URL /projects/chicken-oppa/ 保留（避免破坏部署链接）
 */

export type Locale = 'zh' | 'en';

export interface CTA {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Submodule {
  title: string;
  description: string;
  stack: string[];
}

export interface ModalBullet {
  title: string;
  body: string;
}

export interface ExperienceItem {
  slug: string;
  number: string;
  category: string;
  company: string;
  title: string;
  description: string;
  metricA: Metric;
  metricB: Metric;
  imageSlug: string;
  deepThinkChip: string;
  deepThinkContent: string;
  modalIntro: string;
  modalBullets: ModalBullet[];
  modalQuote: string;
}

export interface Content {
  hero: {
    eyebrow: string;
    greeting: string;        // H1: "Hi, 我是 Rain." / "Hey, I am Rain."（Robin/Zitilei 风格）
    titlePrefix: string;     // H2 起始词："把流程交给 " / "Hand workflows over to "
    titleAccent: string;     // H2 高亮词："Agent" / "Agents"
    titleSuffix: string;     // H2 收尾："。" / "."
    subtitle: string[];
    tagline: string;
    cta: { primary: CTA; secondary: CTA };
    portrait: string;
  };
  nav: Array<{ label: string; href: string }>;
  projects: {
    eyebrow: string;
    title: string;
    item: {
      name: string;
      status: string;
      description: string;
      submodules: Submodule[];
      href: string;
      ctaLabel: string;
    };
  };
  about: {
    eyebrow: string;
    titleLines: string[];
    traits: Array<{ label: string; lead: string; body: string }>;
    playLink: { label: string; href: string };
  };
  experience: {
    eyebrow: string;
    title: string;
    deepThinkTitle: string;
    items: ExperienceItem[];
  };
  skills: {
    eyebrow: string;
    title: string;
    chips: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    methods: Array<{ label: string; href: string }>;
  };
}

// =============================================================================
// 中文内容
// =============================================================================
export const zh: Content = {
  hero: {
    eyebrow: '范雨寒 · Rain Fan',
    greeting: 'Hi, 我是 Rain.',
    titlePrefix: '梳理真实业务流程，\n交付',
    titleAccent: '一体化系统和自动化工具',
    titleSuffix: '。',
    subtitle: ['Forward Deployed Engineer', 'AI 应用落地', '从业务诊断到上线交付'],
    tagline:
      '审计训练让我读懂十几家企业的采购、销售、生产和资金流程。\n从0到1完成需求分析 → 与 AI agent 协作开发 → 上线部署全流程，\n交付真实用户在用的下单、付款、配送、订单追踪系统。\n目前正在寻找 FDE / AI 应用落地 / 全栈交付方向的机会。',
    cta: {
      primary: { label: '看作品 →', href: '#projects' },
      secondary: { label: '联系我', href: '#contact' },
    },
    portrait: '/portrait.png',
  },
  nav: [
    { label: '作品', href: '#projects' },
    { label: '关于', href: '#about' },
    { label: '经历', href: '#experience' },
    { label: '联系', href: '#contact' },
  ],
  projects: {
    eyebrow: '01 / Projects',
    title: '我交付上线的系统。',
    item: {
      name: 'oppachikin',
      status: '✅ 已上线 · 持续接单中',
      description:
        '为明斯克一家韩式炸鸡店（真实付费客户）从 0→1 交付完整数字化运营系统。',
      submodules: [
        {
          title: '在线点餐系统',
          description: '5 周首发上线 · 15 页面 + 20 API · 含支付安全加固',
          stack: ['Next.js', 'Supabase', 'Alfa Bank', 'SMS', 'Telegram Bot'],
        },
        {
          title: '排班机器人',
          description: '7×24 在跑 · 员工自助选班 · 月结工资自动核算',
          stack: ['Python', 'Telegram Bot', 'Railway', 'Sheets'],
        },
        {
          title: '配送定价决策系统',
          description: '每 10 分钟自动采样运费 · 2,592 条样本定价 · 自动发车、异常人工兜底',
          stack: ['Vercel Cron', 'Yandex API', 'Supabase'],
        },
      ],
      href: '/projects/chicken-oppa/',
      ctaLabel: '看完整复盘 →',
    },
  },
  about: {
    eyebrow: '02 / About',
    titleLines: ['对世界好奇，对人真诚，把事做成。'],
    traits: [
      {
        label: '好奇',
        lead: '对世界有着天然的好奇心。',
        body: '这份好奇让我对真实的商业世界极感兴趣，也愿意一头扎进任何陌生领域，钻进业务现场去解决真实的问题。',
      },
      {
        label: '连接',
        lead: '喜欢和人真诚连接。',
        body: '发起 FUNergy 运动社群、做"重启人生"沙盘教练，不是因为我喜欢热闹，而是相信好的连接会让人看见更多可能性。',
      },
      {
        label: '行动',
        lead: '把想法变成行动。',
        body: '财务审计出身，从改进自己的工作流，到自学 AI coding、独立把一套系统上线；我不爱空想，会自己去学、去试，直到它真的跑起来。',
      },
    ],
    playLink: { label: '工作之外，我是个停不下来的人 →', href: '/film' },
  },
  experience: {
    eyebrow: '03 / Experience',
    title: '我做过的事。',
    deepThinkTitle: '✦ Deep Think · 我从每份工作里悟到的 1 件事——',
    items: [
      {
        slug: 'oppachikin',
        number: '01',
        category: 'PRODUCTION CUSTOMER SYSTEM',
        company: 'oppachikin',
        title: '明斯克炸鸡店全套数字化运营',
        description:
          '为真实付费客户 5 周 0→1 交付完整产品，上线后用数据持续运营：需求挖掘 → 架构 → 全栈开发 → 生产上线 → 数据驱动定价，我做判断、agent 做实现。',
        metricA: { value: '5 周', label: '交付' },
        metricB: { value: '首单', label: '付款入账' },
        imageSlug: 'oppachikin',
        deepThinkChip: '全栈交付',
        deepThinkContent:
          '用 agent 做全栈交付，最反直觉的一件事是——agent 越强，越要先做计划。先定架构、定边界、定 agent 能动什么不能动什么，再写第一行代码。否则 AI 节省下来的实现成本，会被"方向错了"的代价全部吃掉。',
        modalIntro:
          '为明斯克一家本地炸鸡店从 0 到 1 交付完整数字化运营：Next.js + Supabase 全栈电商、Yandex 配送集成与数据驱动定价、Python + Telegram 排班 bot，全部由 Claude Code agent 协作实现。',
        modalBullets: [
          {
            title: '全栈交付',
            body: '15 个页面 + 20 个 API + 完整支付/通知/会员体系。5 周首发上线，至今 80 commits、约 1.3 万行 TypeScript 持续迭代。',
          },
          {
            title: '数据驱动定价',
            body: 'Vercel Cron 每 10 分钟对 8 个固定距离点位自动采样 Yandex 实时运费，约 5 天攒下 2,592 条样本。再按"星期几 × 小时三档峰时网格 + 距离 10 档价格表"定档（周末附加可叠加、超 12km 转人工），经店主确认后上线。',
          },
          {
            title: '发车多出口决策',
            body: '发现 Yandex 预约单报价参数静默失效、同点位价格 10 分钟内最大跳变超 11 BYN 后，把发车设计成多出口：发车前实时核价 + 用免费的 claims/create 拿真实价（accept 才扣费）→ 正常自动发车；超 12km、异常或失败自动转人工兜底。',
          },
          {
            title: '生产级安全',
            body: '专门一周做安全加固——金额服务端再校验、回调幂等、webhook 验签（常数时间比较）、Redis 分级限流；这套我能讲清、能自己 debug，不是 agent 黑盒。',
          },
          {
            title: '真实闭环 + 对内延伸',
            body: 'SMS 接口跑通后，已收到第一笔真实付款订单；排班 bot 7×24 在跑（Python + Telegram + Railway），员工自助选班、月结工资自动核算。',
          },
        ],
        modalQuote: '"我做判断，agent 做实现。"——这是 Claude Code 时代全栈交付的真实分工。',
      },
      {
        slug: 'shunfeng',
        number: '02',
        category: 'INTERNAL WORKFLOW AUTOMATION',
        company: '顺丰科技',
        title: 'KA 报表 + 验收流程自动化',
        description:
          '以内部业务方为客户，把每月 6 份重复报表（KA 验收 / 回款 / 开票 / 项目损益等）从人工 1 天压到 2 小时。',
        metricA: { value: '6 份', label: '月结报表' },
        metricB: { value: '1 天 → 2 小时', label: '4× 提速' },
        imageSlug: 'shunfeng',
        deepThinkChip: '财务自动化',
        deepThinkContent:
          'AI 自动化的起点不是技术，是痛感——你得先被某个重复流程反复折磨过，才能想清楚"它为什么一直这么做"，才能判断哪里能自动化、哪里不能。做对工具的前提是真的痛过。',
        modalIntro:
          '在顺丰科技半年里，把 KA 项目下游月结的 6 份核心报表 / 验收文档自动化——KA 项目损益表、头部快消客户项目验收、回款拆分、开票台账等。',
        modalBullets: [
          {
            title: 'KA 项目损益自动化',
            body: '月度 KA 项目损益报表的取数、清洗、归集流程脚本化，每月一键生成。',
          },
          {
            title: '客户验收流程',
            body: '头部快消客户 7 月验收（新增门店分析 / IMC 分析 / 开票台账），从分散 Excel 操作整合为一套流程。',
          },
          {
            title: '回款 + 开票管理',
            body: '未回款拆分、批量开票模板，把"人 + Excel + 邮件"的反复对接收敛到结构化数据。',
          },
          {
            title: '需求价值分析',
            body: '半年度需求价值分析报告——梳理上下游岗位的 AI 提效落点，输出"哪里值得自动化"的判断。',
          },
        ],
        modalQuote:
          '"做对工具的前提是真的痛过。"——半年里我用脚本省下的时间，刚好够我去理解这些流程为什么一直这么做。',
      },
      {
        slug: 'wuxianjz',
        number: '03',
        category: 'DATA OPERATIONS AUTOMATION',
        company: '无限进制（短剧）',
        title: '多平台收入对账自动化',
        description:
          '把 iOS / Google / PayPal / Checkout 数百份原始报表的清洗 + 对账流程脚本化，效率提升 30%。',
        metricA: { value: '+30%', label: '效率提升' },
        metricB: { value: '3 平台', label: 'iOS / Google / PP' },
        imageSlug: 'wuxianjz',
        deepThinkChip: '多平台对账',
        deepThinkContent:
          '规模化的财务工作里，真正的杠杆不是把每件事做得更快，是把共同规则抽象成模型——做一次、用 100 次。',
        modalIntro:
          '在短剧创业公司无限进制做财务分析。AI 还远没有现在强大的年代，靠 VBA + Power Query 把 4 件规模化重复工作变成了 4 套可复用模型。',
        modalBullets: [
          {
            title: '多平台收入对账',
            body: 'AI + Excel VBA 工具实现 iOS / Google / Checkout / PayPal 数百份报表的智能清洗 + 统一收入核对模型，效率 +30%。',
          },
          {
            title: '广告投放数据归集',
            body: 'Google / TikTok / Facebook Ads 三平台月度投放分析，覆盖 100+ 广告账户的跨平台成本核算与费用稽核。',
          },
          {
            title: '月度资金预算',
            body: '对接 10+ 部门完成预算收集与合规审核，搭建预实分析模型，执行偏差率 ≤3% 预警。',
          },
          {
            title: '经营月报体系',
            body: '标准化经营月报模板，核心指标（ROI、成本结构）可视化，支持管理层决策。',
          },
        ],
        modalQuote:
          '"规模化的财务工作里，真正的杠杆是把共同规则抽象成模型——做一次、用 100 次。"',
      },
      {
        slug: 'kpmg',
        number: '04',
        category: 'BUSINESS PROCESS DIAGNOSTICS',
        company: 'KPMG 深圳',
        title: '上市公司审计与财务尽调',
        description:
          '三年主导上市 / 拟上市公司的双准则合并报表、行业尽调与业财流程诊断——读懂一家公司怎么运转，正是我做 AI 落地的前置能力。',
        metricA: { value: '30+', label: '子公司合并' },
        metricB: { value: '100+', label: '重大合同审查' },
        imageSlug: 'kpmg',
        deepThinkChip: '审计 & 尽调',
        deepThinkContent:
          '深入理解一家公司，从财务报表入手——但真正的洞察在销售、采购、生产、资金的业务流程里。',
        modalIntro:
          '在 KPMG 深圳做的是"读懂一家公司"的工作。主导多家港股 / A 股上市公司年报审计 + 拟上市公司财务尽调，覆盖 PRC + HKFRS 双准则。',
        modalBullets: [
          {
            title: '行业尽调与财务验证',
            body: '主导设计访谈清单、开展 10+ 场高管及业务部门访谈，交叉验证收入确认逻辑与成本结构合理性，输出 20+ 页行业洞察报告。',
          },
          {
            title: '业财流程诊断',
            body: '重构 4 大核心业务循环（销售 / 采购 / 生产 / 资金）内控流程图，覆盖 20+ 关键控制点，发现内控缺陷 15 项，完善客户风控机制 5 项。',
          },
          {
            title: '上市公司财务审计',
            body: '主导多家港股 / A 股上市公司年报审计，完成 PRC / HKFRS 双准则合并报表（30+ 子公司），中英文底稿标准化模板让交付周期缩短 25%。',
          },
          {
            title: '项目管理',
            body: '基于行业特征定审计计划与关键审计领域，分配团队任务、把控进度，确保按时交付——这套"先看流程再看数字"的训练，是我后来做 AI 落地的底层方法论。',
          },
        ],
        modalQuote:
          '"真正的洞察在销售、采购、生产、资金的业务流程里。"——审计训练的是看流程的眼睛，这是 AI 落地最稀缺的能力之一。',
      },
    ],
  },
  skills: {
    eyebrow: '05 / Skills',
    title: 'SKILLS',
    chips: [
      'Claude Code',
      'Cursor',
      'Agent 工作流',
      'RAG / Tool Use',
      '解决方案设计',
      '需求挖掘 → 交付',
      '全栈交付',
      'TypeScript',
      'Next.js',
      'Python',
      'Supabase',
      '业财流程诊断 / 尽调',
      '英文 · 技术读写',
    ],
  },
  contact: {
    eyebrow: '04 / Contact',
    title: '想聊 AI 落地吗？',
    body:
      '我目前在找 AI 落地 / FDE 方向 / AI Solutions / Agent Workflow Automation 相关机会。倾向深圳或远程，也欢迎真实业务场景的 agent 落地讨论。',
    methods: [
      { label: '写邮件 →', href: 'mailto:yuhanfan0919@gmail.com' },
      { label: 'GitHub →', href: 'https://github.com/yuhanfan0919-dot' },
      { label: '下载 PDF 简历 →', href: '/Rain-Fan-FDE-Resume.pdf' },
    ],
  },
};

// =============================================================================
// 英文内容
// =============================================================================
export const en: Content = {
  hero: {
    eyebrow: 'Rain Fan',
    greeting: 'Hi, I am Rain.',
    titlePrefix: 'I map real business workflows\nand ship ',
    titleAccent: 'integrated systems and automation',
    titleSuffix: '.',
    subtitle: ['Forward Deployed Engineer', 'AI in production', 'From diagnosis to go-live'],
    tagline:
      "Audit trained me to read the purchasing, sales, production, and cash flows of a dozen-plus companies;\nworking with AI agents, I shipped a live ordering, payment, delivery, and settlement system real users rely on.\nCurrently looking for Forward Deployed Engineer / AI delivery roles.",
    cta: {
      primary: { label: 'See projects →', href: '#projects' },
      secondary: { label: 'Get in touch', href: '#contact' },
    },
    portrait: '/portrait.png',
  },
  nav: [
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  projects: {
    eyebrow: '01 / Projects',
    title: 'Production workflows I shipped.',
    item: {
      name: 'oppachikin',
      status: '✅ Live · First paid order received',
      description:
        'A full digital operations stack delivered 0→1 for a real paying client — a Minsk fried chicken shop: customer ordering on the outside, employee scheduling on the inside. End to end: I made the judgment calls, Claude Code agents did the implementation.',
      submodules: [
        {
          title: 'Online ordering system',
          description: 'First launch in 5 weeks · 15 pages + 20 APIs · production-grade security',
          stack: ['Next.js', 'Supabase', 'Alfa Bank', 'SMS', 'Telegram Bot'],
        },
        {
          title: 'Delivery pricing engine',
          description: 'Auto-samples courier fares every 10 min · priced from 2,592 samples · multi-exit dispatch with human fallback',
          stack: ['Vercel Cron', 'Yandex API', 'Supabase', 'Alfa Bank'],
        },
        {
          title: 'Scheduling bot',
          description: '7×24 in production · employee self-service · monthly payroll auto-calc',
          stack: ['Python', 'Telegram Bot', 'Railway', 'Sheets'],
        },
      ],
      href: '/en/projects/chicken-oppa/',
      ctaLabel: 'See the full story →',
    },
  },
  about: {
    eyebrow: '02 / About',
    titleLines: ['Curious about the world. Real with people. I make things happen.'],
    traits: [
      {
        label: 'Curiosity',
        lead: 'A natural curiosity about the world.',
        body: "It draws me to how real businesses actually work; I'll dive into any unfamiliar field and get into the operation to solve real problems.",
      },
      {
        label: 'Connection',
        lead: 'I connect with people, for real.',
        body: "I started the FUNergy sports community and coach 'life-reset' sandbox sessions — not because I like a crowd, but because good connections help people see more possibilities.",
      },
      {
        label: 'Action',
        lead: 'I turn ideas into action.',
        body: "Finance- and audit-trained, I went from automating my own workflow to teaching myself AI coding and shipping a full system on my own; I don't just think — I learn, I try, until it actually runs.",
      },
    ],
    playLink: { label: 'Off the clock, I never sit still →', href: '/film' },
  },
  experience: {
    eyebrow: '03 / Experience',
    title: 'What I shipped.',
    deepThinkTitle: '✦ Deep Think · One thing I learned from each role—',
    items: [
      {
        slug: 'oppachikin',
        number: '01',
        category: 'PRODUCTION CUSTOMER SYSTEM',
        company: 'oppachikin',
        title: 'A full digital ops stack for a Minsk-local fried chicken shop',
        description:
          'A complete product delivered 0→1 for a real paying client in 5 weeks, then operated on data: discovery → architecture → full-stack build → production launch → data-driven pricing. I made the calls, agents did the implementation.',
        metricA: { value: '5 wks', label: 'shipped' },
        metricB: { value: '1st', label: 'paid order' },
        imageSlug: 'oppachikin',
        deepThinkChip: 'Full-stack delivery',
        deepThinkContent:
          "The most counter-intuitive lesson from shipping full-stack with agents: the stronger the agent, the more important it is to plan first. Define the architecture, the boundaries, what the agent can and cannot touch—before writing the first line of code. Otherwise the implementation cost AI saves you gets eaten by the cost of going in the wrong direction.",
        modalIntro:
          'A full digital ops stack for a local fried chicken shop in Minsk—Next.js + Supabase full-stack e-commerce, Yandex delivery integration with data-driven pricing, plus a Python + Telegram scheduling bot, all delivered with Claude Code agent collaboration.',
        modalBullets: [
          {
            title: 'Full-stack delivery',
            body: '15 pages + 20 APIs + full payment/notification/membership stack. First launch in 5 weeks; 80 commits and ~13,000 lines of TypeScript and counting.',
          },
          {
            title: 'Data-driven pricing',
            body: "A Vercel Cron job samples real-time Yandex courier fares for 8 fixed routes every 10 minutes, collecting 2,592 samples over about 5 days. The output: a weekday-hour peak grid × 10 distance bands fare table (weekend surcharge stacks, 12km+ goes manual), signed off by the owner and now live.",
          },
          {
            title: 'Multi-exit dispatch decisions',
            body: "After discovering Yandex's scheduled-order quote parameter silently fails and the same route jumped over 11 BYN within 10 minutes in our samples, I designed dispatch as a multi-exit flow: re-quote at dispatch time + use the free claims/create as a true-price probe (accept is the only paid step) → auto-dispatch the normal case; route 12km+, anomalies, and failures to a human.",
          },
          {
            title: 'Production-grade security',
            body: 'A dedicated week of hardening—server-side amount validation, idempotent callbacks, webhook signature verification (constant-time comparison), tiered Redis rate limiting. I can explain and debug all of it myself; it is not an agent black box.',
          },
          {
            title: 'Closed loop + internal ops',
            body: 'After the SMS interface went live, the first real paid order came in. The scheduling bot runs 7×24 (Python + Telegram + Railway): employees self-serve shifts, monthly payroll auto-calculated.',
          },
        ],
        modalQuote:
          '"I make the judgment, the agent does the implementation."—this is the real division of labor in the Claude Code era.',
      },
      {
        slug: 'shunfeng',
        number: '02',
        category: 'INTERNAL WORKFLOW AUTOMATION',
        company: 'SF Tech',
        title: 'Monthly KA reporting + acceptance flow automation',
        description:
          'Treating internal business teams as my customers, took 6 monthly recurring reports (KA acceptance, payback, invoicing, P&L) from a full day each down to 2 hours.',
        metricA: { value: '6 reports', label: 'per month' },
        metricB: { value: '1 day → 2 hrs', label: '4× faster' },
        imageSlug: 'shunfeng',
        deepThinkChip: 'AI for finance',
        deepThinkContent:
          "The starting point for AI automation isn't the technology—it's the pain. You have to have been repeatedly tortured by a process before you can really think through \"why has it always been done this way,\" and only then can you tell what should be automated and what shouldn't. The prerequisite for building the right tool is real pain.",
        modalIntro:
          'Six months at SF Tech automating the monthly cadence of 6 core reports and acceptance documents downstream of KA projects—P&L, top FMCG client acceptance, payback splits, invoicing ledgers, and more.',
        modalBullets: [
          {
            title: 'KA P&L automation',
            body: 'Monthly KA project P&L data extraction, cleaning, and aggregation scripted—generated with one click.',
          },
          {
            title: 'Customer acceptance flow',
            body: "Top FMCG client July acceptance (new store analysis / IMC analysis / invoicing ledger), consolidating scattered Excel operations into a single flow.",
          },
          {
            title: 'Payback + invoicing',
            body: 'Unpaid amount splits and bulk invoicing templates—collapsing the "person + Excel + email" back-and-forth into structured data.',
          },
          {
            title: 'Semi-annual value analysis',
            body: 'A semi-annual analysis of where AI productivity gains would land across upstream/downstream roles—producing the judgment of "where is it worth automating."',
          },
        ],
        modalQuote:
          '"The prerequisite for building the right tool is real pain."—the time my scripts saved me was exactly enough to figure out why these flows existed the way they did.',
      },
      {
        slug: 'wuxianjz',
        number: '03',
        category: 'DATA OPERATIONS AUTOMATION',
        company: 'Wuxian Jinzhi (short-form video)',
        title: 'Multi-platform revenue reconciliation automation',
        description:
          'Scripted the cleansing + reconciliation of hundreds of raw reports across iOS / Google / PayPal / Checkout—+30% efficiency.',
        metricA: { value: '+30%', label: 'efficiency' },
        metricB: { value: '3 platforms', label: 'iOS / GG / PP' },
        imageSlug: 'wuxianjz',
        deepThinkChip: 'Multi-platform reconciliation',
        deepThinkContent:
          "In scaled finance work, the real lever isn't doing each thing faster—it's abstracting the shared rules into a model. Build it once, use it 100 times.",
        modalIntro:
          "Finance analyst at short-form video startup Wuxian Jinzhi. Back when AI was nowhere near today's capability, I built 4 reusable models on top of VBA + Power Query.",
        modalBullets: [
          {
            title: 'Multi-platform reconciliation',
            body: 'AI + Excel VBA pipeline cleansing hundreds of reports across iOS / Google / Checkout / PayPal into a unified revenue model. +30% efficiency.',
          },
          {
            title: 'Ad spend aggregation',
            body: 'Monthly ad spend analysis across Google / TikTok / Facebook Ads, covering 100+ ad accounts with cross-platform cost attribution and expense audit.',
          },
          {
            title: 'Monthly cash budgeting',
            body: 'Collected and validated budgets across 10+ departments; built a budget-vs-actual variance model with ≤3% deviation alerts.',
          },
          {
            title: 'Operating reporting',
            body: 'Standardized monthly operating report templates with ROI / cost-structure visualization, supporting leadership decisions.',
          },
        ],
        modalQuote:
          '"In scaled finance work, the real lever is abstracting the shared rules into a model—build once, use 100 times."',
      },
      {
        slug: 'kpmg',
        number: '04',
        category: 'BUSINESS PROCESS DIAGNOSTICS',
        company: 'KPMG Shenzhen',
        title: 'Listed-company audits and financial DD',
        description:
          'Three years leading dual-standard consolidations, industry DD, and business-process diagnostics for listed and IPO-bound clients—learning to read how a company actually runs, which is exactly the front-end skill of AI delivery.',
        metricA: { value: '30+', label: 'subsidiaries consolidated' },
        metricB: { value: '100+', label: 'major contracts reviewed' },
        imageSlug: 'kpmg',
        deepThinkChip: 'Audit & DD',
        deepThinkContent:
          'To deeply understand a company, you start with the financial statements—but the real insight is in the business flows of sales, procurement, production, and cash.',
        modalIntro:
          'At KPMG Shenzhen I did the work of "reading a company." Led annual audits and IPO-bound financial DD across PRC + HKFRS dual standards for HK / A-share listed clients.',
        modalBullets: [
          {
            title: 'Industry DD + financial validation',
            body: 'Designed interview lists and ran 10+ executive and business-unit interviews; cross-validated revenue recognition logic and cost structure; delivered 20+ pages of industry insight reports.',
          },
          {
            title: 'Business-process diagnostics',
            body: 'Reconstructed internal-control flowcharts for 4 core cycles (sales / procurement / production / cash) covering 20+ key controls; identified 15 control deficiencies and improved 5 customer risk mechanisms.',
          },
          {
            title: 'Listed-company audit',
            body: 'Led annual audits for multiple HK / A-share listed clients with PRC / HKFRS dual-standard consolidations (30+ subsidiaries); built bilingual workpaper templates that cut delivery cycle by 25%.',
          },
          {
            title: 'Project management',
            body: 'Tailored audit plans and key audit areas to industry characteristics; assigned and tracked team workload to ensure on-time delivery—this "look at flows before looking at numbers" training is the foundation of how I approach AI implementation today.',
          },
        ],
        modalQuote:
          '"The real insight is in the business flows of sales, procurement, production, and cash."—audit trains the eye for flow, which is one of the rarest skills in AI implementation.',
      },
    ],
  },
  skills: {
    eyebrow: '05 / Skills',
    title: 'SKILLS',
    chips: [
      'Claude Code',
      'Cursor',
      'Agent workflows',
      'RAG / Tool use',
      'Solution design',
      'Discovery → delivery',
      'Full-stack delivery',
      'TypeScript',
      'Next.js',
      'Python',
      'Supabase',
      'Business-process diagnostics',
      'English · technical reading/writing',
    ],
  },
  contact: {
    eyebrow: '04 / Contact',
    title: "Let's talk AI implementation.",
    body:
      "I'm looking for AI implementation, Forward Deployed Engineering, AI Solutions, and Agent Workflow Automation roles. Preference: Shenzhen or remote.",
    methods: [
      { label: 'Email →', href: 'mailto:yuhanfan0919@gmail.com' },
      { label: 'GitHub →', href: 'https://github.com/yuhanfan0919-dot' },
      { label: 'Download CV (PDF) →', href: '/Rain-Fan-FDE-Resume.pdf' },
    ],
  },
};

export function getContent(lang: Locale): Content {
  return lang === 'zh' ? zh : en;
}

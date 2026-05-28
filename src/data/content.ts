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
    paragraphs: string[];
    pullquote: string;
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
    titlePrefix: '把真实业务流程，\n交付成可运行的 ',
    titleAccent: 'AI 系统',
    titleSuffix: '。',
    subtitle: ['业务现场理解', 'Agent-assisted delivery', '生产流程落地'],
    tagline:
      '财务与审计训练让我看懂业务现场。\nClaude Code 和现代工程工具让我把流程做成原型、工具和生产系统。',
    cta: {
      primary: { label: '看作品 →', href: '#projects' },
      secondary: { label: '联系我', href: '#contact' },
    },
    portrait: '/portrait.png',
  },
  projects: {
    eyebrow: '01 / Projects',
    title: '我交付过的生产流程。',
    item: {
      name: 'oppachikin',
      status: '✅ 已上线 · 收到首单付款',
      description:
        '给明斯克本地炸鸡店从 0 到 1 搭的完整数字化运营：对外顾客点餐，对内员工排班，并用 Claude Code agent 协作完成交付。',
      submodules: [
        {
          title: '在线点餐系统',
          description: '5 周交付 · 23 页面 + 19 API · 含支付安全加固',
          stack: ['Next.js', 'Supabase', 'Alfa Bank', 'SMS', 'Telegram Bot'],
        },
        {
          title: '排班机器人',
          description: '7×24 在跑 · 员工自助选班 · 月结工资自动核算',
          stack: ['Python', 'Telegram Bot', 'Railway', 'Sheets'],
        },
      ],
      href: '/projects/chicken-oppa/',
      ctaLabel: '看完整复盘 →',
    },
  },
  about: {
    eyebrow: '02 / About',
    titleLines: ['读懂客户现场。', '交付 Agent 系统。'],
    paragraphs: [
      '我是范雨寒，财务与审计出身。KPMG 三年审计、顺丰科技流程自动化、创业公司经营分析，让我习惯先进入业务现场，看清人、系统、表格和例外情况如何一起运转。',
      '2024 年我开始把 AI 引进财务工作流。到 2026，我能用 Cursor + Claude Code、Python 和现代 Web 工具，把真实业务需求交付成可运行的原型、内部工具和生产系统。',
    ],
    pullquote:
      '我不是传统纯前端工程师。我的优势是读懂流程、判断边界，再和 agent 一起把方案做成能运行、能交付、能继续迭代的系统。',
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
          '5 周从 0 到 1 给家族业务搭的完整产品，开发流程全部交给 Claude Code agent。',
        metricA: { value: '5 周', label: '交付' },
        metricB: { value: '首单', label: '付款入账' },
        imageSlug: 'oppachikin',
        deepThinkChip: '全栈交付',
        deepThinkContent:
          '用 agent 做全栈交付，最反直觉的一件事是——agent 越强，越要先做计划。先定架构、定边界、定 agent 能动什么不能动什么，再写第一行代码。否则 AI 节省下来的实现成本，会被"方向错了"的代价全部吃掉。',
        modalIntro:
          '为家族在明斯克的炸鸡店从 0 到 1 交付完整数字化运营。Next.js + Supabase 全栈电商 + Python + Telegram + Railway 排班 bot，全部由 Claude Code agent 协作实现。',
        modalBullets: [
          {
            title: '全栈交付',
            body: '23 页面 + 19 API + 完整支付/通知/会员体系。5 周 52 commits ≈ 9,850 行 TypeScript。',
          },
          {
            title: '生产级安全',
            body: '专门一周做安全加固——金额服务端再校验、回调幂等、webhook 验签、Redis 限流。',
          },
          {
            title: '对内运营延伸',
            body: '排班机器人 7×24 在跑（Python + Telegram + Railway），员工自助选班，月结工资自动核算，替代群里手工接龙。',
          },
          {
            title: '真实闭环',
            body: 'SMS 接口跑通后，已收到第一笔真实付款订单。从"项目快上线"到"产生收入"的质变。',
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
          '把每月 6 份重复报表（KA 项目验收 / 回款 / 开票 / 项目损益等）从人工 1 天压到 2 小时。',
        metricA: { value: '6 份', label: '月结报表' },
        metricB: { value: '1 天 → 2 小时', label: '4× 提速' },
        imageSlug: 'shunfeng',
        deepThinkChip: '财务自动化',
        deepThinkContent:
          'AI 自动化的起点不是技术，是痛感——你得先被某个重复流程反复折磨过，才能想清楚"它为什么一直这么做"，才能判断哪里能自动化、哪里不能。做对工具的前提是真的痛过。',
        modalIntro:
          '在顺丰科技半年里，把 KA 项目下游月结的 6 份核心报表 / 验收文档自动化——KA 项目损益表、星巴克 + 欧莱雅项目验收、回款拆分、开票台账等。',
        modalBullets: [
          {
            title: 'KA 项目损益自动化',
            body: '月度 KA 项目损益报表的取数、清洗、归集流程脚本化，每月一键生成。',
          },
          {
            title: '客户验收流程',
            body: '星巴克 + 欧莱雅 7 月验收（新增门店分析 / IMC 分析 / 开票台账），从分散 Excel 操作整合为一套流程。',
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
          '三年里主导上市公司 + 拟上市公司的双准则合并报表、行业尽调、业财流程诊断。',
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
      'TypeScript',
      'Next.js',
      'Astro',
      'Python',
      'Supabase',
      '内控梳理',
      '财务尽调',
      '财务分析',
      '英语 CET6 545',
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
      { label: '索取 PDF 简历 →', href: 'mailto:yuhanfan0919@gmail.com?subject=Resume%20request' },
    ],
  },
};

// =============================================================================
// 英文内容
// =============================================================================
export const en: Content = {
  hero: {
    eyebrow: 'Rain Fan',
    greeting: 'Hey, I am Rain.',
    titlePrefix: 'I turn real business workflows\ninto working ',
    titleAccent: 'AI systems',
    titleSuffix: '.',
    subtitle: ['Customer workflow fluency', 'Agent-assisted delivery', 'Production workflows'],
    tagline:
      'Finance and audit trained me to read messy operations.\nClaude Code and modern engineering tools help me ship them as prototypes, tools, and production workflows.',
    cta: {
      primary: { label: 'See projects →', href: '#projects' },
      secondary: { label: 'Get in touch', href: '#contact' },
    },
    portrait: '/portrait.png',
  },
  projects: {
    eyebrow: '01 / Projects',
    title: 'Production workflows I shipped.',
    item: {
      name: 'oppachikin',
      status: '✅ Live · First paid order received',
      description:
        'A full digital operations stack built 0→1 for a fried chicken shop in Minsk: customer ordering on the outside, employee scheduling on the inside, shipped with Claude Code agent collaboration.',
      submodules: [
        {
          title: 'Online ordering system',
          description: 'Shipped in 5 weeks · 23 pages + 19 APIs · production-grade security',
          stack: ['Next.js', 'Supabase', 'Alfa Bank', 'SMS', 'Telegram Bot'],
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
    titleLines: ['I read customer workflows.', 'I ship agent systems.'],
    paragraphs: [
      "I'm Rain Fan, finance- and audit-trained. Three years at KPMG, workflow automation at SF Tech, and operating analysis in a startup taught me to enter a business context and understand how people, systems, spreadsheets, and exceptions actually work together.",
      'Since 2024 I have been bringing AI into finance and operations workflows. By 2026, I can use Cursor, Claude Code, Python, and modern web tools to turn real business requirements into working prototypes, internal tools, and production systems.',
    ],
    pullquote:
      "I'm not positioning myself as a traditional frontend-only engineer. My edge is reading workflows, defining boundaries, and collaborating with agents to ship systems that actually run.",
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
          'A complete 0→1 product for the family business in 5 weeks. The entire dev workflow was handed over to Claude Code agents.',
        metricA: { value: '5 wks', label: 'shipped' },
        metricB: { value: '1st', label: 'paid order' },
        imageSlug: 'oppachikin',
        deepThinkChip: 'Full-stack delivery',
        deepThinkContent:
          "The most counter-intuitive lesson from shipping full-stack with agents: the stronger the agent, the more important it is to plan first. Define the architecture, the boundaries, what the agent can and cannot touch—before writing the first line of code. Otherwise the implementation cost AI saves you gets eaten by the cost of going in the wrong direction.",
        modalIntro:
          'A full digital ops stack for the family fried chicken shop in Minsk—Next.js + Supabase full-stack e-commerce plus a Python + Telegram + Railway scheduling bot, all delivered with Claude Code agent collaboration.',
        modalBullets: [
          {
            title: 'Full-stack delivery',
            body: '23 pages + 19 APIs + full payment/notification/membership stack. 52 commits, ~9,850 lines of TypeScript in 5 weeks.',
          },
          {
            title: 'Production-grade security',
            body: 'A dedicated week of hardening—server-side amount validation, idempotent callbacks, webhook signature verification, Redis rate limiting.',
          },
          {
            title: 'Internal ops extension',
            body: 'Scheduling bot running 7×24 (Python + Telegram + Railway). Employees self-serve shift selection; monthly payroll calculated automatically, replacing chat-group sign-ups.',
          },
          {
            title: 'Closed loop',
            body: 'After the SMS interface went live, the first real paid order came in. The shift from "almost ready to ship" to "generating revenue."',
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
          'Took 6 monthly recurring reports (KA acceptance, payback, invoicing, P&L, etc.) from a full day each down to 2 hours.',
        metricA: { value: '6 reports', label: 'per month' },
        metricB: { value: '1 day → 2 hrs', label: '4× faster' },
        imageSlug: 'shunfeng',
        deepThinkChip: 'AI for finance',
        deepThinkContent:
          "The starting point for AI automation isn't the technology—it's the pain. You have to have been repeatedly tortured by a process before you can really think through \"why has it always been done this way,\" and only then can you tell what should be automated and what shouldn't. The prerequisite for building the right tool is real pain.",
        modalIntro:
          'Six months at SF Tech automating the monthly cadence of 6 core reports and acceptance documents downstream of KA projects—P&L, Starbucks + L\'Oréal acceptance, payback splits, invoicing ledgers, and more.',
        modalBullets: [
          {
            title: 'KA P&L automation',
            body: 'Monthly KA project P&L data extraction, cleaning, and aggregation scripted—generated with one click.',
          },
          {
            title: 'Customer acceptance flow',
            body: "Starbucks + L'Oréal July acceptance (new store analysis / IMC analysis / invoicing ledger), consolidating scattered Excel operations into a single flow.",
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
          'Three years leading dual-standard consolidations, industry DD, and business-process diagnostics for listed and IPO-bound clients.',
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
      'Agent workflow',
      'TypeScript',
      'Next.js',
      'Astro',
      'Python',
      'Supabase',
      'Internal controls',
      'Financial DD',
      'Financial analysis',
      'English CET6 545',
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
      { label: 'Request CV PDF →', href: 'mailto:yuhanfan0919@gmail.com?subject=Resume%20request' },
    ],
  },
};

export function getContent(lang: Locale): Content {
  return lang === 'zh' ? zh : en;
}

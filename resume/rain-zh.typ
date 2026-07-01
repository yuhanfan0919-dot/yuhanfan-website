#let accent = rgb("#7B82F0")
#let accent-deep = rgb("#686FEA")
#let ink = rgb("#2E3340")
#let body = rgb("#4A4F5C")
#let muted = rgb("#6F7482")
#let soft = rgb("#F2F1FF")
#let rule = rgb("#E4E6F0")

#set page(
  paper: "a4",
  margin: (x: 14mm, y: 13mm),
)

#set text(
  font: ("Microsoft YaHei", "SimSun", "Arial"),
  size: 9.1pt,
  fill: body,
  lang: "zh",
)

#set par(justify: false, leading: 0.54em)

#let serif(content) = text(font: ("SimSun", "Georgia"), fill: ink, content)
#let meta(content) = text(size: 7.9pt, fill: muted, content)
#let smallcaps(content) = text(size: 8.4pt, tracking: 1.3pt, fill: accent-deep, weight: "semibold", content)

#let pill(content) = box(
  fill: soft,
  radius: 8pt,
  inset: (x: 6pt, y: 2.4pt),
  text(size: 7.2pt, fill: accent-deep, weight: "semibold", content),
)

#let section(title) = [
  #v(6pt)
  #smallcaps(title)
  #v(2pt)
  #line(length: 100%, stroke: 0.75pt + rule)
  #v(4pt)
]

#let entry(title, role, date, subtitle, body-list) = [
  #grid(
    columns: (1fr, 42mm, auto),
    gutter: 8pt,
    [#text(weight: "bold", fill: ink, size: 9.4pt, title)],
    [#text(weight: "bold", fill: ink, size: 9pt, role)],
    [#meta(date)],
  )
  #v(3pt)
  #for item in body-list [
    #grid(
      columns: (7pt, 1fr),
      gutter: 2pt,
      [#text(fill: accent-deep)[•]],
      [#item],
    )
    #v(1.2pt)
  ]
]

#grid(
  columns: (1fr, 47mm, 25mm),
  gutter: 10mm,
  [
    #box(height: 35mm)[
      #align(left + horizon)[
        #text(size: 24pt, weight: "bold", fill: ink)[范雨寒 Rain]
        #v(-1pt)
        #text(size: 8.8pt, fill: ink)[求职意向：FDE / AI落地工程师 / 全栈开发工程师]
      ]
    ]
  ],
  [
    #box(height: 35mm)[
      #align(left + horizon)[
        #link("tel:13640914252")[#text(size: 9.1pt, fill: ink)[电话：13640914252]]
        #v(3pt)
        #link("mailto:yuhanfan@163.com")[#text(size: 9.1pt, fill: ink)[邮箱：yuhanfan\@163.com]]
        #v(3pt)
        #link("https://www.yuhanfan.com")[#text(size: 9.1pt, fill: ink)[网站：www.yuhanfan.com]]
      ]
    ]
  ],
  [
    #image("../public/resume-photo-1inch.png", width: 25mm)
  ],
)

#v(5pt)
#line(length: 100%, stroke: 1pt + accent)
#v(5pt)

#text(size: 9.2pt, fill: ink)[审计和财务训练让我读懂企业的销售、采购、生产和资金流程；]
#v(1pt)
#text(size: 9.2pt, fill: ink)[与 AI agents 协作，我从 0 到 1 交付了真实用户在用的下单、支付、配送、排班与薪资系统。]

#section[项目经历]

#entry(
  [oppachikin · 炸鸡店数字化运营系统],
  [独立开发者],
  [2026.03 - Present],
  [真实付费客户 · oppachikin.by],
  (
    [5 周从 0 到 1 交付生产系统，覆盖 23 个页面、19 个 API，以及下单、支付、通知、会员、订单追踪等关键链路；系统已上线、跑通支付，并收到真实付款订单。],
    [设计配送定价决策系统：Vercel Cron 每 10 分钟采样 Yandex 实时运费，约 5 天沉淀 2,592 条样本，按「星期几 × 时段 × 距离」生成价格表；超 12km、异常或失败自动转人工兜底。],
    [交付 Telegram 排班机器人：7×24 在跑，员工自助选班、工时累计、月结工资自动核算。],
  ),
)

#section[工作经历]

#entry(
  [顺丰科技],
  [财务分析 / 内部流程自动化],
  [2025.04 - 2025.10],
  [KA 项目经营闭环自动化],
  (
    [梳理 KA 项目从验收、开票、回款、损益到商业化支持的月结链路，把 6 份核心报表 / 台账从分散 Excel 收敛为结构化流程。],
    [将 KA 项目损益报表的取数、清洗、归集流程脚本化，处理时长从 1 天压缩到 2 小时。],
    [整合头部快消客户项目验收、未回款拆分、批量开票模板，减少「人 + Excel + 邮件」的反复对接。],
  ),
)

#entry(
  [无限进制],
  [财务分析专员],
  [2024.07 - 2024.10],
  [多平台数据运营自动化],
  (
    [财务数据自动化与核对：用 Excel VBA + Power Query 自动清洗 iOS / Google / PayPal 数百份收入报表，统一数据格式并构建核对模型，效率提升 30%。],
    [预算编制与执行监控：统筹全公司月度资金预算，对接 10+ 部门完成数据收集与合规审核，搭建预实对比模型，执行偏差率 ≤3% 预警。],
    [经营分析体系搭建：设计标准化经营月报模板，可视化收入、成本结构、现金流等核心指标，支持管理层决策。],
  ),
)

#entry(
  [KPMG 深圳],
  [审计助理经理],
  [2021.07 - 2024.01],
  [业务流程诊断与财务尽调],
  (
    [行业与财务分析：基于行业研报、可比公司数据和三大财务报表，拆解目标企业商业模式、收入确认逻辑与盈利能力波动，支持审计风险判断。],
    [内控流程诊断：对收入、采购、费用审批等核心流程执行访谈、穿行测试，梳理销售 / 采购 / 生产 / 资金循环内控流程图，覆盖 20+ 关键控制点，识别内控缺陷 15 项。],
    [审计交付与尽调：完成 PRC / HKFRS 双准则下 30+ 家子公司合并报表，审查重大销售 / 采购合同 100+ 份，优化底稿模板使交付周期缩短 25%。],
  ),
)

#section[教育经历]

#grid(
  columns: (1fr, 42mm, auto),
  [#text(weight: "bold", fill: ink)[西南财经大学]],
  [#text(weight: "bold", fill: ink)[财政学硕士]],
  [#meta[2018.09 - 2021.06]],
)
#v(2pt)
#grid(
  columns: (1fr, 42mm, auto),
  [#text(weight: "bold", fill: ink)[天津师范大学]],
  [#text(weight: "bold", fill: ink)[投资学学士]],
  [#meta[2014.09 - 2018.06]],
)

#v(2pt)
#smallcaps[技能]
#v(2pt)
#line(length: 100%, stroke: 0.65pt + rule)
#v(3pt)
#text(size: 8.5pt, fill: body)[
Agent 工作流 · TypeScript / Next.js · Python · Supabase · SQL · Excel VBA / Power Query · 业务流程诊断 · 解决方案设计
]

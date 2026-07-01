#let accent = rgb("#7B82F0")
#let accent-deep = rgb("#686FEA")
#let ink = rgb("#2E3340")
#let body = rgb("#4A4F5C")
#let muted = rgb("#6F7482")
#let soft = rgb("#F2F1FF")
#let rule = rgb("#E4E6F0")

#set page(
  paper: "a4",
  margin: (x: 13.5mm, y: 10.5mm),
)

#set text(
  font: ("Arial", "Microsoft YaHei"),
  size: 8.2pt,
  fill: body,
  lang: "en",
)

#set par(justify: false, leading: 0.46em)

#let serif(content) = text(font: ("Georgia", "Times New Roman"), fill: ink, content)
#let meta(content) = text(size: 7.6pt, fill: muted, content)
#let smallcaps(content) = text(size: 8pt, tracking: 1.4pt, fill: accent-deep, weight: "semibold", content)

#let pill(content) = box(
  fill: soft,
  radius: 8pt,
  inset: (x: 6pt, y: 2.4pt),
  text(size: 7.1pt, fill: accent-deep, weight: "semibold", content),
)

#let section(title) = [
  #v(4.5pt)
  #smallcaps(title)
  #v(2pt)
  #line(length: 100%, stroke: 0.75pt + rule)
  #v(3pt)
]

#let entry(title, role, date, subtitle, body-list) = [
  #grid(
    columns: (1fr, 44mm, auto),
    gutter: 8pt,
    [#text(weight: "bold", fill: ink, size: 8.8pt, title)],
    [#text(weight: "bold", fill: ink, size: 8.4pt, role)],
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
  columns: (1fr, 48mm, 25mm),
  gutter: 10mm,
  [
    #box(height: 35mm)[
      #align(left + horizon)[
        #serif(text(size: 23pt)[Rain Fan])
        #v(-1pt)
        #text(size: 8.4pt, fill: ink)[Target roles: Forward Deployed Engineer / AI Solutions Engineer / Full-stack Engineer]
      ]
    ]
  ],
  [
    #box(height: 35mm)[
      #align(left + horizon)[
        #link("tel:13640914252")[#text(size: 8.6pt, fill: ink)[Phone: 13640914252]]
        #v(3pt)
        #link("mailto:yuhanfan@163.com")[#text(size: 8.6pt, fill: ink)[Email: yuhanfan\@163.com]]
        #v(3pt)
        #link("https://www.yuhanfan.com")[#text(size: 8.6pt, fill: ink)[Website: www.yuhanfan.com]]
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

#text(size: 8.5pt, fill: ink)[Audit and finance training taught me how to read sales, procurement, production, and cash-flow processes.]
#v(1pt)
#text(size: 8.5pt, fill: ink)[Working with AI agents, I shipped a live ordering, payment, delivery, scheduling, and payroll system for a real paying client.]

#section[PROJECT]

#entry(
  [oppachikin · Digital operations system for a fried-chicken shop],
  [Independent Developer],
  [2026.03 - Present],
  [Real paying client · oppachikin.by],
  (
    [Delivered a production system from 0 to 1 in 5 weeks, covering 23 pages, 19 APIs, ordering, payment, notifications, membership, and order tracking. The system is live and has received a real paid order.],
    [Designed a delivery pricing engine: a Vercel Cron job samples Yandex courier fares every 10 minutes, using 2,592 samples to build a weekday × time-window × distance fare table with human fallback for edge cases.],
    [Built a Telegram scheduling bot running 7x24, supporting employee self-service shift selection, work-hour tracking, and monthly payroll calculation.],
  ),
)

#section[EXPERIENCE]

#entry(
  [SF Technology],
  [Financial Analysis],
  [2025.04 - 2025.10],
  [KA close-to-cash workflow automation],
  (
    [Mapped the KA project monthly close workflow from acceptance, invoicing, collection, P&L, and commercialization support, consolidating 6 core reports / ledgers into a structured process.],
    [Scripted the data extraction, cleaning, and consolidation flow for KA project P&L reports, reducing processing time from 1 day to 2 hours.],
    [Integrated acceptance materials, outstanding collection split, and batch invoicing templates, reducing repetitive handoffs across people, Excel, and email.],
  ),
)

#entry(
  [Beyond Infinity Technology],
  [Financial Analyst],
  [2024.07 - 2024.10],
  [Multi-platform data operations automation],
  (
    [Financial data automation and reconciliation: Used Excel VBA + Power Query to clean hundreds of iOS / Google / PayPal revenue reports, standardize data formats, and build reconciliation models, improving efficiency by 30%.],
    [Budget planning and execution monitoring: Coordinated monthly cash budgets across the company, working with 10+ departments on data collection and compliance review; built actual-vs-budget models to flag deviations within ≤3%.],
    [Management reporting system: Designed standardized monthly operating report templates and visualized key metrics such as revenue, cost structure, and cash flow to support management decisions.],
  ),
)

#entry(
  [KPMG Huazhen LLP],
  [Assistant Audit Manager],
  [2021.07 - 2024.01],
  [Business-process diagnostics through audit and DD],
  (
    [Industry and financial analysis: Used industry research, comparable-company data, and three financial statements to break down target companies' business models, revenue-recognition logic, and profitability fluctuations, supporting audit risk assessment.],
    [Internal-control process diagnosis: Conducted interviews and walkthrough tests for core processes such as revenue, procurement, and expense approval; mapped sales / procurement / production / treasury control flows, covering 20+ key controls and identifying 15 control deficiencies.],
    [Audit delivery and due diligence: Completed PRC / HKFRS consolidation across 30+ subsidiaries, reviewed 100+ material sales / procurement contracts, and optimized working-paper templates to shorten delivery cycles by 25%.],
  ),
)

#section[EDUCATION]

#grid(
  columns: (1fr, 44mm, auto),
  [#text(weight: "bold", fill: ink)[Southwestern University of Finance and Economics]],
  [#text(weight: "bold", fill: ink)[M.A. in Public Finance]],
  [#meta[2018.09 - 2021.06]],
)
#v(2pt)
#grid(
  columns: (1fr, 44mm, auto),
  [#text(weight: "bold", fill: ink)[Tianjin Normal University]],
  [#text(weight: "bold", fill: ink)[B.A. in Investment]],
  [#meta[2014.09 - 2018.06]],
)

#v(2pt)
#smallcaps[SKILLS]
#v(2pt)
#line(length: 100%, stroke: 0.65pt + rule)
#v(3pt)
#text(size: 7.8pt, fill: body)[
AI agents delivery workflow · TypeScript / Next.js · Python · Supabase · SQL · Excel VBA / Power Query · Business-process diagnostics · Solution design
]

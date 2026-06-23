# -*- coding: utf-8 -*-
"""
生成范雨寒 FDE 方向简历 PDF（与个人网站 content.ts 内容一致、同配色风格）。
内容源：resume-site/src/data/content.ts（已脱敏：头部快消客户 / 无家人字眼 / 无毛利止损）。
重新生成：python scripts/build_resume_pdf.py
"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT, TA_RIGHT, TA_JUSTIFY
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.lib.styles import ParagraphStyle

# ---- 网站配色 ----
ACCENT = HexColor("#7B82F0")
ACCENT_DEEP = HexColor("#6B71E5")
INK = HexColor("#2E3340")
INK2 = HexColor("#4A4F5C")
BORDER = HexColor("#E1E3E8")
MUTED = HexColor("#8A8F9C")

# ---- 字体（Windows 系统字体）----
F = "C:/Windows/Fonts/"
pdfmetrics.registerFont(TTFont("YaHei", F + "msyh.ttc", subfontIndex=0))
pdfmetrics.registerFont(TTFont("YaHei-Bold", F + "msyhbd.ttc", subfontIndex=0))
pdfmetrics.registerFont(TTFont("SimSun", F + "simsun.ttc", subfontIndex=0))
pdfmetrics.registerFontFamily("YaHei", normal="YaHei", bold="YaHei-Bold",
                              italic="YaHei", boldItalic="YaHei-Bold")

OUT = "public/Rain-Fan-FDE-Resume.pdf"

# ---------- 样式 ----------
name_style = ParagraphStyle("name", fontName="SimSun", fontSize=23, leading=27, textColor=INK)
role_style = ParagraphStyle("role", fontName="YaHei-Bold", fontSize=10.5, leading=15,
                            textColor=ACCENT_DEEP, spaceBefore=3)
contact_style = ParagraphStyle("contact", fontName="YaHei", fontSize=8.8, leading=13, textColor=INK2)
summary_style = ParagraphStyle("summary", fontName="YaHei", fontSize=9.3, leading=14,
                               textColor=INK2, alignment=TA_LEFT)
sec_style = ParagraphStyle("sec", fontName="YaHei-Bold", fontSize=11, leading=14, textColor=ACCENT_DEEP)
entry_l = ParagraphStyle("entry_l", fontName="YaHei-Bold", fontSize=10, leading=13.5, textColor=INK)
entry_r = ParagraphStyle("entry_r", fontName="YaHei", fontSize=8.8, leading=13.5, textColor=MUTED, alignment=TA_RIGHT)
sub_style = ParagraphStyle("sub", fontName="YaHei", fontSize=8.7, leading=12, textColor=INK2, spaceBefore=0.5)
bullet_style = ParagraphStyle("bullet", fontName="YaHei", fontSize=9, leading=12.9, textColor=INK2,
                              leftIndent=11, bulletIndent=0, spaceBefore=0.8)
skill_label = ParagraphStyle("skill_label", fontName="YaHei-Bold", fontSize=9, leading=13.5, textColor=INK)
skill_body = ParagraphStyle("skill_body", fontName="YaHei", fontSize=9, leading=13.5, textColor=INK2)

story = []

def section(title):
    story.append(Spacer(1, 5))
    story.append(Paragraph(title, sec_style))
    story.append(Spacer(1, 1))
    story.append(HRFlowable(width="100%", thickness=1.1, color=ACCENT, spaceBefore=1, spaceAfter=4))

def entry(left, right):
    t = Table([[Paragraph(left, entry_l), Paragraph(right, entry_r)]],
              colWidths=[118 * mm, 50 * mm])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(t)

def sub(text):
    story.append(Paragraph(text, sub_style))

def bullets(items):
    for it in items:
        story.append(Paragraph(it, bullet_style, bulletText="•"))

# ---------- 头部 ----------
story.append(Paragraph('范雨寒&nbsp;&nbsp;<font name="SimSun" size="17">Rain Fan</font>', name_style))
story.append(Paragraph("Forward Deployed Engineer&nbsp;&nbsp;·&nbsp;&nbsp;AI 应用落地&nbsp;&nbsp;·&nbsp;&nbsp;从业务诊断到上线交付", role_style))
story.append(Spacer(1, 3))
story.append(Paragraph(
    'yuhanfan0919@gmail.com&nbsp;&nbsp;·&nbsp;&nbsp;github.com/yuhanfan0919-dot&nbsp;&nbsp;·&nbsp;&nbsp;'
    '<font color="#6B71E5">oppachikin.by（线上作品）</font>', contact_style))
story.append(Spacer(1, 5))
story.append(HRFlowable(width="100%", thickness=1.4, color=ACCENT_DEEP, spaceAfter=6))

# ---------- 一句话定位 ----------
story.append(Paragraph(
    "审计训练让我读懂十几家企业的采购、销售、生产和资金流程；与 AI agent 协作，"
    "交付了真实用户在用的下单、付款、配送、结算系统。"
    '<font color="#6B71E5"><b>目前正在寻找 FDE / AI 应用落地方向的机会。</b></font>', summary_style))

# ---------- 项目经历 ----------
section("项目经历")
entry("oppachikin · 线上炸鸡店全套数字化运营（真实付费客户）", "2026.03 – 至今")
sub("独立开发者 / Forward Deployed · oppachikin.by · Claude Code + Cursor agent 协作交付")
bullets([
    "为真实付费客户 <b>5 周 0→1</b> 交付完整数字化运营产品，已收到<b>首单真实付款</b>；上线后用数据持续运营。",
    "<b>在线点餐系统</b>：15 个页面 + 20 个 API，含支付、通知、会员体系；上线前专门一周做安全加固（金额服务端校验、回调幂等、webhook 验签、Redis 限流）。",
    "<b>配送定价决策系统</b>：Vercel Cron 每 10 分钟采样 Yandex 实时运费，约 5 天 2,592 条样本，按「距离 × 时段」定档；发车正常自动、异常永远人工兜底。",
    "<b>排班机器人</b>：Telegram bot 7×24 在跑，员工自助选班、工时自动累计、月结工资自动核算。",
    "分工：<b>我做业务判断与风险边界，agent 做实现</b>——这是 Claude Code 时代全栈交付的真实方式。",
])

# ---------- 工作经历 ----------
section("工作经历")

entry("顺丰科技 · KA 报表 + 验收流程自动化", "2025.04 – 2025.10")
sub("财务分析 / 流程自动化 · 以内部业务方为客户")
bullets([
    "把 KA 项目下游月结的 <b>6 份核心报表 / 验收文档自动化</b>，单份从人工 1 天压到 2 小时（约 4× 提速）。",
    "KA 项目损益报表取数、清洗、归集脚本化，每月一键生成；头部快消客户项目验收（新增门店 / IMC 分析 / 开票台账）整合为一套流程。",
    "未回款拆分 + 批量开票模板，把「人 + Excel + 邮件」的反复对接收敛为结构化数据。",
    "产出半年度需求价值分析报告，梳理上下游岗位的 AI 提效落点，输出「哪里值得自动化」的判断。",
])

entry("无限进制（短剧）· 多平台收入对账自动化", "2024.07 – 2024.10")
sub("财务分析专员")
bullets([
    "用 AI + Excel VBA 把 iOS / Google / Checkout / PayPal <b>数百份报表</b>的清洗 + 统一收入核对模型化，效率 <b>+30%</b>。",
    "Google / TikTok / Facebook 三平台月度投放分析，覆盖 100+ 广告账户的跨平台成本核算与费用稽核。",
    "统筹月度资金预算，对接 10+ 部门，搭建预实分析模型，执行偏差率 ≤3% 预警；标准化经营月报体系支持管理层决策。",
])

entry("KPMG 深圳 · 上市公司审计与财务尽调", "2021.07 – 2024.01")
sub("审计助理经理")
bullets([
    "主导多家港股 / A 股上市公司年报审计 + 拟上市公司财务尽调，覆盖 PRC / HKFRS 双准则合并报表（<b>30+ 子公司</b>），底稿标准化模板使交付周期缩短 25%。",
    "业财流程诊断：重构销售 / 采购 / 生产 / 资金四大循环内控流程图，覆盖 20+ 关键控制点，发现内控缺陷 15 项。",
    "行业尽调：设计访谈清单、开展 10+ 场高管及业务访谈，交叉验证收入确认与成本结构，输出 20+ 页行业洞察报告；审查重大合同 100+ 份。",
])

# ---------- 教育 ----------
section("教育经历")
entry("西南财经大学 · 财政学硕士", "2018.09 – 2021.06")
entry("天津师范大学 · 投资学学士", "2014.09 – 2018.06")

# ---------- 技能与资质 ----------
section("技能与资质")
def skill_row(label, body):
    t = Table([[Paragraph(label, skill_label), Paragraph(body, skill_body)]],
              colWidths=[24 * mm, 144 * mm])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 1.5), ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
    ]))
    story.append(t)

skill_row("AI / 工程", "Claude Code · Cursor · Agent 工作流 · RAG / Tool Use · 全栈交付 · TypeScript / Next.js / Python / Supabase")
skill_row("财务 / 数据", "业财流程诊断与尽调 · Excel（VBA / Power Query）· Power BI · SQL")
skill_row("资质 / 语言", "CPA（会计科目通过）· 证券 / 基金从业资格 · 英语 CET-6（545）")

# ---------- 生成 ----------
doc = SimpleDocTemplate(OUT, pagesize=A4,
                        leftMargin=16 * mm, rightMargin=16 * mm,
                        topMargin=12 * mm, bottomMargin=11 * mm,
                        title="范雨寒 Rain Fan · FDE 简历", author="范雨寒 Rain Fan")
doc.build(story)
print("OK ->", OUT)

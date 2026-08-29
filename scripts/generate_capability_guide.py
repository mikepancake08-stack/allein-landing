from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "ALLEIN_Everyday_Athlete_Capability_Guide.pdf"
PUBLIC_COPY = ROOT / "client" / "public" / "downloads" / OUTPUT.name

GOLD = colors.HexColor("#D4AF37")
GOLD_LIGHT = colors.HexColor("#F2D977")
BLACK = colors.HexColor("#050505")
PANEL = colors.HexColor("#111111")
PANEL_2 = colors.HexColor("#181818")
WHITE = colors.HexColor("#F7F5EF")
MUTED = colors.HexColor("#B7B3A8")
FAINT = colors.HexColor("#706D66")


def register_fonts():
    regular_candidates = [
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"),
        Path("/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf"),
    ]
    bold_candidates = [
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"),
        Path("/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf"),
    ]
    regular = next(path for path in regular_candidates if path.exists())
    bold = next(path for path in bold_candidates if path.exists())
    pdfmetrics.registerFont(TTFont("AlleinSans", str(regular)))
    pdfmetrics.registerFont(TTFont("AlleinSansBold", str(bold)))


register_fonts()


def page_canvas(canvas, doc):
    width, height = letter
    canvas.saveState()
    canvas.setFillColor(BLACK)
    canvas.rect(0, 0, width, height, fill=1, stroke=0)

    canvas.setFillColor(colors.HexColor("#0B0B0B"))
    canvas.circle(width + 18, height - 42, 150, fill=1, stroke=0)
    canvas.setStrokeColor(colors.HexColor("#2B2510"))
    canvas.setLineWidth(0.7)
    canvas.circle(width + 18, height - 42, 112, fill=0, stroke=1)
    canvas.circle(width + 18, height - 42, 82, fill=0, stroke=1)

    canvas.setFillColor(GOLD)
    canvas.setFont("AlleinSansBold", 9)
    canvas.drawString(0.58 * inch, 0.42 * inch, "ALLEIN")
    canvas.setFillColor(FAINT)
    canvas.setFont("AlleinSans", 7.5)
    canvas.drawRightString(width - 0.58 * inch, 0.42 * inch, f"EVERYDAY ATHLETE  /  {doc.page}")
    canvas.restoreState()


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="Eyebrow",
    parent=styles["Normal"],
    fontName="AlleinSansBold",
    fontSize=8,
    leading=10,
    textColor=GOLD,
    spaceAfter=10,
    tracking=1.8,
    uppercase=True,
))
styles.add(ParagraphStyle(
    name="TitleLarge",
    parent=styles["Title"],
    fontName="AlleinSansBold",
    fontSize=34,
    leading=37,
    alignment=TA_LEFT,
    textColor=WHITE,
    spaceAfter=16,
))
styles.add(ParagraphStyle(
    name="GuideTitle",
    parent=styles["Heading1"],
    fontName="AlleinSansBold",
    fontSize=25,
    leading=29,
    textColor=WHITE,
    spaceAfter=12,
))
styles.add(ParagraphStyle(
    name="GuideSubtitle",
    parent=styles["Normal"],
    fontName="AlleinSans",
    fontSize=12.5,
    leading=19,
    textColor=MUTED,
    spaceAfter=18,
))
styles.add(ParagraphStyle(
    name="GuideH2",
    parent=styles["Heading2"],
    fontName="AlleinSansBold",
    fontSize=14,
    leading=17,
    textColor=GOLD_LIGHT,
    spaceBefore=7,
    spaceAfter=7,
))
styles.add(ParagraphStyle(
    name="GuideBody",
    parent=styles["BodyText"],
    fontName="AlleinSans",
    fontSize=9.8,
    leading=15.2,
    textColor=MUTED,
    spaceAfter=8,
))
styles.add(ParagraphStyle(
    name="GuideSmall",
    parent=styles["BodyText"],
    fontName="AlleinSans",
    fontSize=8.2,
    leading=12.5,
    textColor=FAINT,
))
styles.add(ParagraphStyle(
    name="CardTitle",
    parent=styles["Heading3"],
    fontName="AlleinSansBold",
    fontSize=10.5,
    leading=13,
    textColor=WHITE,
    spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="CardBody",
    parent=styles["BodyText"],
    fontName="AlleinSans",
    fontSize=8.5,
    leading=12.5,
    textColor=MUTED,
))
styles.add(ParagraphStyle(
    name="Score",
    parent=styles["Normal"],
    fontName="AlleinSansBold",
    fontSize=13,
    leading=15,
    alignment=TA_CENTER,
    textColor=GOLD,
))


def p(text, style="GuideBody"):
    return Paragraph(text, styles[style])


def card(title, body, width=3.1 * inch):
    table = Table([[p(title, "CardTitle")], [p(body, "CardBody")]], colWidths=[width])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("BOX", (0, 0), (-1, -1), 0.6, colors.HexColor("#302B18")),
        ("LEFTPADDING", (0, 0), (-1, -1), 13),
        ("RIGHTPADDING", (0, 0), (-1, -1), 13),
        ("TOPPADDING", (0, 0), (-1, 0), 12),
        ("BOTTOMPADDING", (0, 0), (-1, 0), 2),
        ("TOPPADDING", (0, 1), (-1, 1), 2),
        ("BOTTOMPADDING", (0, 1), (-1, 1), 12),
    ]))
    return table


def bullets(items):
    return [p(f"<font color='#D4AF37'>+ </font>{item}", "GuideBody") for item in items]


def section_header(eyebrow, title, subtitle=None):
    items = [p(eyebrow.upper(), "Eyebrow"), p(title, "GuideTitle")]
    if subtitle:
        items.append(p(subtitle, "GuideSubtitle"))
    return items


def capability_page(number, title, meaning, signs, practices, progression, micro_session):
    story = []
    story.extend(section_header(f"Capability {number} of 6", title, meaning))
    story.append(p("WHAT THIS MAY LOOK LIKE", "GuideH2"))
    story.extend(bullets(signs))
    story.append(Spacer(1, 5))
    practice_cells = []
    for idx, (practice_title, practice_body) in enumerate(practices, 1):
        practice_cells.append(card(f"0{idx}  {practice_title}", practice_body, 2.02 * inch))
    table = Table([practice_cells], colWidths=[2.12 * inch] * 3, hAlign="LEFT")
    table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 7)]))
    story.append(table)
    story.append(Spacer(1, 13))
    story.append(card("YOUR 10-MINUTE START", micro_session, 6.22 * inch))
    story.append(Spacer(1, 10))
    story.append(p("PROGRESS WHEN", "GuideH2"))
    story.append(p(progression, "GuideBody"))
    story.append(PageBreak())
    return story


def build_story():
    story = []

    story.append(Spacer(1, 0.65 * inch))
    story.append(p("FREE CAPABILITY GUIDE", "Eyebrow"))
    story.append(p("The Everyday Athlete<br/><font color='#D4AF37'>Capability Guide</font>", "TitleLarge"))
    story.append(p("Understand your starting point. Choose one priority. Build a body that performs for life.", "GuideSubtitle"))
    story.append(Spacer(1, 0.2 * inch))
    story.append(Table([
        [p("MOVE", "Score"), p("ADAPT", "Score"), p("PERFORM", "Score")],
        [p("with freedom", "GuideSmall"), p("with confidence", "GuideSmall"), p("for life", "GuideSmall")],
    ], colWidths=[2.05 * inch] * 3, style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("BOX", (0, 0), (-1, -1), 0.7, colors.HexColor("#3B3315")),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#2A271E")),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, 0), 16),
        ("BOTTOMPADDING", (0, 1), (-1, 1), 16),
    ])))
    story.append(Spacer(1, 0.55 * inch))
    story.append(p("Created by Michael Morgan", "GuideH2"))
    story.append(p("Exercise Science graduate, Certified Personal Trainer, former NCAA decathlete, and founder of ALLEIN.", "GuideBody"))
    story.append(Spacer(1, 0.35 * inch))
    story.append(p("This guide is educational fitness information, not a medical assessment, diagnosis, treatment plan, or substitute for individualized care.", "GuideSmall"))
    story.append(PageBreak())

    story.extend(section_header("Start here", "Your score is a compass, not a grade", "The self-check is meant to organize your attention. It is not a pass-or-fail test, and the six qualities are not truly separate. Improving one often supports several others."))
    score_rows = [
        [p("6-14", "Score"), p("REBUILDING", "CardTitle"), p("Choose one comfortable starting point and focus on consistency. Consider professional guidance if pain, dizziness, repeated falls, or other concerning symptoms are present.", "CardBody")],
        [p("15-21", "Score"), p("DEVELOPING", "CardTitle"), p("You have a base. Build control and repeatability before adding more speed, complexity, or fatigue.", "CardBody")],
        [p("22-26", "Score"), p("CAPABLE", "CardTitle"), p("Your foundation is useful. Your lowest one or two qualities are likely the best places to create a more complete athlete profile.", "CardBody")],
        [p("27-30", "Score"), p("STRONG FOUNDATION", "CardTitle"), p("Keep training variety, adaptability, and real-world skill. High scores still benefit from objective testing and thoughtful progression.", "CardBody")],
    ]
    score_table = Table(score_rows, colWidths=[1.0 * inch, 1.45 * inch, 3.8 * inch], repeatRows=0)
    score_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("ROWBACKGROUNDS", (0, 0), (-1, -1), [PANEL, PANEL_2]),
        ("BOX", (0, 0), (-1, -1), 0.6, colors.HexColor("#332E18")),
        ("INNERGRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#262626")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 11),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 11),
    ]))
    story.append(score_table)
    story.append(Spacer(1, 14))
    story.append(p("USE YOUR LOWEST SCORE FIRST", "GuideH2"))
    story.append(p("Read the matching capability page. Pick one or two practices that feel safe and relevant. Repeat them two or three times per week for 14 days, then retake the self-check. If multiple qualities tie, choose the one that most affects your real life or the goal you care about most.", "GuideBody"))
    story.append(PageBreak())

    story.extend(capability_page(
        "01", "Movement", "Movement is your ability to access useful positions and transition between them with control. Mobility matters most when you can own it and use it.",
        ["You feel stiff despite stretching regularly.", "Getting to the floor or rising from it feels awkward.", "You avoid certain positions because they feel unfamiliar or restricted."],
        [("Controlled rotations", "Slowly explore the neck, shoulders, hips, and ankles without forcing range."), ("Floor transitions", "Practice moving from standing to kneeling, sitting, and back up using support as needed."), ("Loaded mobility", "Use light resistance to strengthen the ranges you want to keep.")],
        "The movement stays smooth, breathing remains calm, and you can repeat it without pinching, sharp pain, or compensation.",
        "2 minutes controlled joint rotations; 4 minutes supported floor transitions; 3 minutes slow squat or hinge patterns; 1 minute easy breathing and reassessment.",
    ))
    story.extend(capability_page(
        "02", "Strength", "Strength is the usable force behind lifting, carrying, pushing, pulling, bracing, and protecting your position. The goal is capacity you can apply outside the gym.",
        ["Everyday loads feel heavier than they should.", "You avoid carrying, climbing, or getting up without assistance.", "Your posture or technique breaks down quickly under load."],
        [("Foundational patterns", "Train a squat, hinge, push, pull, carry, and trunk-resistance pattern."), ("Own the position", "Use pauses and controlled tempo to build confidence where you are weakest."), ("Leave a reserve", "Finish most sets with one to three good repetitions still available.")],
        "You can add a small amount of load or one repetition while maintaining the same position, speed, and confidence.",
        "2 rounds: 6-10 sit-to-stands or squats; 6-10 elevated push-ups; 8-12 band or cable rows; 20-40 seconds of carrying or marching. Rest as needed.",
    ))
    story.extend(capability_page(
        "03", "Balance", "Balance is an active process: your brain combines visual, vestibular, and sensory information, then organizes muscular responses to keep you oriented and stable.",
        ["Uneven ground makes you cautious.", "Single-leg tasks feel dramatically different side to side.", "You rely heavily on your eyes, hands, or nearby objects for confidence."],
        [("Build a base", "Start near a stable support and practice narrow, split, and single-leg positions."), ("Shift with control", "Move your weight forward, backward, and side to side without rushing."), ("Change one input", "Progress surface, head position, reach, or vision one variable at a time.")],
        "You can recover small errors without panic, breath-holding, or grabbing support. Do not progress several sensory challenges at once.",
        "3 rounds near support: 20 seconds narrow stance; 5 slow weight shifts each direction; 15-20 seconds single-leg or kickstand stance per side; 3 controlled reaches per side.",
    ))
    story.extend(capability_page(
        "04", "Coordination", "Coordination is the timing and organization that lets different parts of your body work together. It improves through varied, appropriately challenging practice.",
        ["New exercises take a long time to learn.", "Cross-body or rhythm tasks feel unusually confusing.", "You move well only when the environment is predictable."],
        [("Cross the midline", "Use marching, crawling, and opposite-hand-to-knee patterns."), ("Add rhythm", "Work with simple counts, claps, steps, or a steady beat."), ("Use an object", "Toss, catch, bounce, or pass while maintaining posture and breathing.")],
        "Accuracy improves at the current speed. Increase speed only after the pattern becomes repeatable, then vary the task without turning it into chaos.",
        "2 minutes cross-crawl marching; 3 minutes simple step-and-clap patterns; 3 minutes ball tosses or wall catches; 2 minutes combining a lower-body pattern with an easy object task.",
    ))
    story.extend(capability_page(
        "05", "Power", "Power is your ability to produce force quickly. It supports acceleration, quick reactions, catching yourself, climbing, throwing, and maintaining athletic ability as you age.",
        ["You feel strong but slow.", "Rapid steps, jumps, or direction changes feel unfamiliar.", "You only train slowly, even when the load is light and the movement is safe."],
        [("Start with intent", "Move a light load quickly while stopping well before technique changes."), ("Use low-impact options", "Try fast step-ups, medicine-ball throws, rapid band work, or short accelerations."), ("Rest fully", "Power is a quality practice. Use short sets and enough rest to keep speed high.")],
        "Each repetition stays crisp and landing or stopping mechanics remain controlled. Stop the set when speed clearly drops.",
        "Warm up first. Then 4 rounds: 3-5 fast sit-to-stands or low step-ups; 3-5 light throws or fast band presses; 10 seconds quick feet; 45-75 seconds easy recovery.",
    ))
    story.extend(capability_page(
        "06", "Recovery", "Recovery is your ability to absorb training, return to readiness, and adapt. More work is not always better work; the right dose is one you can recover from consistently.",
        ["Soreness or fatigue regularly disrupts the rest of your week.", "Your performance trends down despite training harder.", "Sleep, stress, or schedule changes are ignored when choosing training intensity."],
        [("Match the day", "Adjust volume or complexity when sleep, stress, or readiness is clearly lower."), ("Build downshifts", "Use walking, relaxed breathing, light mobility, and a consistent sleep routine."), ("Track the response", "Note energy, soreness, motivation, and performance rather than judging one workout alone.")],
        "You finish most sessions feeling trained but functional, and your normal energy and performance return before the next demanding session.",
        "5 minutes easy walking; 2 minutes longer-exhale breathing; 2 minutes gentle mobility; 1 minute plan: choose tomorrow's training level based on sleep, stress, soreness, and motivation.",
    ))

    story.extend(section_header("Your 14-day experiment", "Turn one insight into evidence", "Do not try to fix all six qualities at once. Build a small repeatable practice around the priority that matters most right now."))
    plan_rows = [[p("DAY", "CardTitle"), p("ACTION", "CardTitle"), p("NOTE", "CardTitle")]]
    for day, action, note in [
        ("1", "Choose one priority and complete its 10-minute start.", "Record confidence and energy from 1-5."),
        ("3", "Repeat the same practice with no progression.", "Notice what feels easier or clearer."),
        ("5", "Repeat; add only one small progression if quality is high.", "Stop before fatigue changes the movement."),
        ("8", "Return to the original version.", "Compare control with Day 1."),
        ("10", "Repeat and connect it to a regular workout or walk.", "Keep the total dose easy to recover from."),
        ("12", "Use one new but related variation.", "Challenge adaptability, not exhaustion."),
        ("14", "Retake the six-question self-check.", "Choose the next priority or continue.")
    ]:
        plan_rows.append([p(day, "Score"), p(action, "CardBody"), p(note, "CardBody")])
    plan_table = Table(plan_rows, colWidths=[0.8 * inch, 3.05 * inch, 2.39 * inch], repeatRows=1)
    plan_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#2A2410")),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [PANEL, PANEL_2]),
        ("BOX", (0, 0), (-1, -1), 0.6, colors.HexColor("#3B3315")),
        ("INNERGRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#292929")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (0, 0), (0, -1), "CENTER"),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    story.append(plan_table)
    story.append(Spacer(1, 12))
    story.append(p("STOP AND SEEK APPROPRIATE CARE", "GuideH2"))
    story.append(p("Stop an activity and seek qualified medical guidance when appropriate if you experience chest pain, fainting, severe shortness of breath, sudden weakness, new neurological symptoms, sharp or worsening pain, or another concerning response. Use stable support for balance work and choose exercises that fit your current ability.", "GuideSmall"))
    story.append(PageBreak())

    story.append(Spacer(1, 0.45 * inch))
    story.extend(section_header("The next step", "A self-check shows the starting point. Coaching builds the path.", "ALLEIN's 12-week Founding Coaching Program is for active adults who want an individualized way to become stronger, more athletic, and more capable for the demands of real life."))
    for item in [
        "A complete starting-point assessment",
        "An individualized 12-week training plan",
        "Movement demonstrations and technique feedback",
        "Regular progress reviews and program adjustments",
        "Direct accountability and coach support",
        "An end-of-program reassessment and next-step plan",
    ]:
        story.append(p(f"<font color='#D4AF37'>✓</font>  {item}", "GuideBody"))
    story.append(Spacer(1, 10))
    cta = Table([[p("FIVE FOUNDING SPOTS", "Eyebrow")], [p("$1,200 upfront or 3 payments of $400", "GuideTitle")], [p("Applying is a conversation, not a commitment.", "GuideBody")], [p("alleinfitness.com", "GuideH2")]], colWidths=[6.25 * inch])
    cta.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("BOX", (0, 0), (-1, -1), 0.9, GOLD),
        ("LEFTPADDING", (0, 0), (-1, -1), 18),
        ("RIGHTPADDING", (0, 0), (-1, -1), 18),
        ("TOPPADDING", (0, 0), (-1, 0), 17),
        ("BOTTOMPADDING", (0, -1), (-1, -1), 17),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
    ]))
    story.append(cta)
    story.append(Spacer(1, 15))
    story.append(p("ABOUT MICHAEL", "GuideH2"))
    story.append(p("Michael Morgan has coached general-population clients, busy parents, high school and college athletes, older adults, and individuals living with neurological conditions. His approach combines exercise science, athletic development, nervous-system-informed training, and practical coaching to help people build strength they can actually use.", "GuideBody"))
    story.append(p("ALLEIN coaching is fitness coaching and does not diagnose, treat, rehabilitate, or cure medical conditions. Results vary by individual.", "GuideSmall"))
    return story


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_COPY.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        leftMargin=0.65 * inch,
        rightMargin=0.65 * inch,
        topMargin=0.62 * inch,
        bottomMargin=0.66 * inch,
        title="The Everyday Athlete Capability Guide",
        author="Michael Morgan - ALLEIN",
        subject="A practical guide to movement, strength, balance, coordination, power, and recovery.",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
    doc.addPageTemplates([PageTemplate(id="ALLEIN", frames=[frame], onPage=page_canvas)])
    doc.build(build_story())
    PUBLIC_COPY.write_bytes(OUTPUT.read_bytes())
    print(OUTPUT)
    print(PUBLIC_COPY)


if __name__ == "__main__":
    main()

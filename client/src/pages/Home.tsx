import {
  Activity, ArrowRight, Brain, Check, Compass, Gauge, HeartPulse,
  Move3D, ShieldCheck, Sparkles, Target, TimerReset, Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

const ABOUT_IMG = "/screenshots/michael_trainer.jpg";

const SELF_CHECK_URL =
  import.meta.env.VITE_GUIDE_FORM_URL?.trim() || "https://allein.kit.com/b41a314882";
const APPLY_URL =
  import.meta.env.VITE_APPLICATION_URL?.trim() || "https://tally.so/r/dWeQJz";

const capabilities = [
  ["Movement", 88], ["Strength", 82], ["Balance", 75],
  ["Coordination", 78], ["Power", 70], ["Recovery", 84],
] as const;

const pillars = [
  { icon: Move3D, title: "Move with freedom", description: "Build usable mobility, control, and confidence across the movements real life demands." },
  { icon: Gauge, title: "Stay strong and powerful", description: "Train strength and speed together so your body remains capable—not simply conditioned." },
  { icon: Compass, title: "React and adapt", description: "Develop balance, coordination, and reaction skills for a body that responds when life changes quickly." },
  { icon: Brain, title: "Improve the connection", description: "Use purposeful sensory and nervous-system inputs to help movement feel more organized and efficient." },
  { icon: ShieldCheck, title: "Build lasting resilience", description: "Progress intelligently, recover deliberately, and create capacity you can rely on for years to come." },
  { icon: HeartPulse, title: "Train the whole person", description: "Your program accounts for your goals, schedule, experience, available equipment, and readiness." },
];

const process = [
  { number: "01", title: "Assess", description: "Establish your starting point across movement, strength, balance, coordination, power, and recovery." },
  { number: "02", title: "Build", description: "Receive an individualized plan designed around your life, equipment, needs, and long-term goals." },
  { number: "03", title: "Coach", description: "Technique feedback, accountability, and ongoing adjustments keep the plan useful as you progress." },
  { number: "04", title: "Reassess", description: "Measure what changed, identify the next opportunity, and keep building real-world capability." },
];

const offerIncludes = [
  "Complete starting-point assessment",
  "Individualized 12-week training plan",
  "Movement demonstrations and coaching guidance",
  "Regular progress reviews and program adjustments",
  "Direct accountability and coach support",
  "End-of-program reassessment and next-step plan",
];

const faqs = [
  {
    question: "Who is ALLEIN coaching designed for?",
    answer: "ALLEIN is built for active adults who want to remain strong, athletic, confident, and capable as life changes. You do not need to consider yourself an athlete—only to care about what your body can do.",
  },
  {
    question: "Do I need a gym or special equipment?",
    answer: "No. Your program is built around the equipment and environment you actually have access to, whether that is at home, at a regular gym, or a combination of both.",
  },
  {
    question: "Is this physical therapy or medical treatment?",
    answer: "No. ALLEIN provides fitness coaching and exercise programming, not diagnosis, rehabilitation, or medical treatment. If an issue requires clinical care, you will be encouraged to work with the appropriate licensed provider.",
  },
  {
    question: "How is this different from a normal workout plan?",
    answer: "Most plans focus heavily on calories, isolated muscles, or exhaustion. ALLEIN trains the qualities that support complete capability: movement, strength, balance, coordination, power, reaction, and recovery.",
  },
  {
    question: "What happens after I apply?",
    answer: "Michael will review your goals and contact you to determine whether the founding program is a good fit. Applying does not commit you to purchasing coaching.",
  },
];

const selfCheckQuestions = [
  { quality: "Movement", prompt: "I can get down to the floor and back up with control and confidence." },
  { quality: "Strength", prompt: "I can lift, carry, push, and pull the things everyday life requires." },
  { quality: "Balance", prompt: "I trust my balance when the surface changes or I am bumped off position." },
  { quality: "Coordination", prompt: "I can learn new movements and make my body do what I intend." },
  { quality: "Power", prompt: "I can move quickly when I need to react, accelerate, or catch myself." },
  { quality: "Recovery", prompt: "My training leaves me feeling prepared for life—not constantly depleted." },
] as const;

const qualityGuidance: Record<string, string> = {
  Movement: "Prioritize controlled ranges of motion, transitions, and mobility you can actively use.",
  Strength: "Build foundational pushing, pulling, carrying, squatting, hinging, and trunk strength.",
  Balance: "Practice stable positions, weight shifts, single-leg control, and gradually changing sensory conditions.",
  Coordination: "Use crawling, cross-body patterns, rhythm, object work, and unfamiliar but appropriate movement tasks.",
  Power: "Introduce safe intent to move quickly through throws, jumps, rapid steps, and low-impact resistance work.",
  Recovery: "Adjust training stress and support it with sleep, walking, breathing, nutrition, and appropriate progression.",
};

function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <a href="#self-check" className={`group inline-flex items-center justify-center gap-2 rounded-md bg-gold-gradient px-6 py-3.5 text-sm font-bold text-black shadow-lg shadow-[#D4AF37]/15 transition hover:-translate-y-0.5 hover:shadow-[#D4AF37]/25 ${className}`}>
      Take the Free Self-Check
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function CapabilitySelfCheck() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);
  const isComplete = selfCheckQuestions.every(({ quality }) => answers[quality]);

  const result = useMemo(() => {
    if (!isComplete) return null;
    const ranked = selfCheckQuestions
      .map(({ quality }) => ({ quality, score: answers[quality] }))
      .sort((a, b) => a.score - b.score);
    const total = ranked.reduce((sum, item) => sum + item.score, 0);
    return { total, priority: ranked[0].quality };
  }, [answers, isComplete]);

  const chooseAnswer = (quality: string, score: number) => {
    setAnswers((current) => ({ ...current, [quality]: score }));
    setShowResult(false);
  };

  const reset = () => {
    setAnswers({});
    setShowResult(false);
  };

  const resultGuideUrl = result && SELF_CHECK_URL.startsWith("mailto:")
    ? `${SELF_CHECK_URL}%0A%0AMy%20current%20priority%20was%3A%20${encodeURIComponent(result.priority)}%20%28${result.total}%2F30%29.`
    : SELF_CHECK_URL;

  return (
    <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#090909] p-6 gold-glow sm:p-8">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Six-question starting point</p>
          <p className="mt-2 font-[var(--font-display)] text-2xl font-semibold">How capable do you feel?</p>
        </div>
        <Target className="h-7 w-7 text-[#D4AF37]" />
      </div>

      {!showResult ? (
        <>
          <div className="space-y-4">
            {selfCheckQuestions.map(({ quality, prompt }, index) => (
              <fieldset key={quality} className="rounded-lg border border-white/[0.07] bg-white/[0.025] p-4">
                <legend className="sr-only">{quality}</legend>
                <div className="flex gap-3">
                  <span className="font-[var(--font-display)] text-sm font-semibold text-[#D4AF37]">0{index + 1}</span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#777]">{quality}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#B8B8B8]">{prompt}</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-5 gap-2 pl-7">
                  {[1, 2, 3, 4, 5].map((score) => (
                    <button
                      key={score}
                      type="button"
                      onClick={() => chooseAnswer(quality, score)}
                      aria-label={`${quality}: ${score} out of 5`}
                      aria-pressed={answers[quality] === score}
                      className={`flex h-9 items-center justify-center rounded border text-xs transition ${answers[quality] === score ? "border-[#D4AF37] bg-[#D4AF37] font-bold text-black" : "border-white/10 text-[#777] hover:border-[#D4AF37]/50 hover:text-white"}`}
                    >
                      {score}
                    </button>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
          <div className="mt-6">
            <button
              type="button"
              disabled={!isComplete}
              onClick={() => setShowResult(true)}
              className="w-full rounded-md bg-gold-gradient px-5 py-3.5 text-sm font-bold text-black transition enabled:hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30"
            >
              See My Starting Point
            </button>
            <p className="mt-3 text-center text-[10px] uppercase tracking-[0.14em] text-[#555]">
              1 = rarely true · 5 = consistently true
            </p>
          </div>
        </>
      ) : result ? (
        <div className="rounded-xl border border-[#D4AF37]/25 bg-black p-6 sm:p-7" aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">Your current priority</p>
          <h3 className="mt-3 font-[var(--font-display)] text-4xl font-bold text-white">{result.priority}</h3>
          <p className="mt-4 text-sm leading-relaxed text-[#A0A0A0]">{qualityGuidance[result.priority]}</p>
          <div className="mt-6 rounded-lg border border-white/[0.07] bg-white/[0.025] p-4">
            <div className="flex items-end justify-between">
              <span className="text-xs uppercase tracking-[0.14em] text-[#6F6F6F]">Overall self-rating</span>
              <span className="font-[var(--font-display)] text-2xl font-bold text-[#D4AF37]">{result.total}<span className="text-sm text-[#666]"> / 30</span></span>
            </div>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-[#656565]">This is a reflection tool, not a medical assessment or diagnosis. Your lowest score is simply a useful place to begin a more complete conversation.</p>
          <a href={resultGuideUrl} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold-gradient px-5 py-3.5 text-sm font-bold text-black">
            Send Me the Full Guide <ArrowRight className="h-4 w-4" />
          </a>
          <button type="button" onClick={reset} className="mt-3 w-full py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#777] transition hover:text-[#D4AF37]">Retake the Self-Check</button>
        </div>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <main id="main-content">
        <section id="hero" className="relative min-h-screen border-b border-[#D4AF37]/10">
          <div className="absolute inset-0 hero-grid opacity-70" />
          <div className="absolute -left-24 top-28 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#D4AF37]/[0.035] to-transparent" />

          <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-20 lg:pt-24">
            <div className="max-w-3xl">
              <ScrollReveal delay={100}>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/5 px-4 py-2">
                  <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Coaching for the everyday athlete</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={220}>
                <h1 className="font-[var(--font-display)] text-5xl font-bold leading-[.98] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                  Build a Body That
                  <span className="mt-2 block text-gold-gradient gold-glow-text">Performs for Life.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={340}>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#A7A7A7] sm:text-xl">
                  Personalized coaching that develops strength, mobility, balance, coordination, power,
                  and the brain-body connection—so you can trust what your body can do for the next 50 years.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={460}>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <PrimaryCta />
                  <a href={APPLY_URL} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5">
                    Apply for Founding Coaching
                  </a>
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#666]">Five founding coaching spots · Personalized · Online</p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" delay={280}>
              <div className="relative mx-auto w-full max-w-lg">
                <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-[90px]" />
                <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#080808]/95 p-5 shadow-2xl shadow-black sm:p-7">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">Everyday Athlete Profile</p>
                      <h2 className="mt-2 font-[var(--font-display)] text-2xl font-semibold">Complete capability</h2>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                      <Activity className="h-6 w-6 text-[#D4AF37]" />
                    </div>
                  </div>

                  <div className="space-y-5 py-7">
                    {capabilities.map(([label, value], index) => (
                      <div key={label}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-[#C8C8C8]">{label}</span>
                          <span className="font-semibold text-[#D4AF37]">{value}</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div className="capability-bar h-full rounded-full bg-gold-gradient" style={{ width: `${value}%`, animationDelay: `${index * 120 + 500}ms` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center">
                    {[["Train", "Intentionally"], ["Move", "Confidently"], ["Live", "Capably"]].map(([verb, detail]) => (
                      <div key={verb} className="rounded-lg bg-white/[0.035] px-2 py-3">
                        <p className="font-[var(--font-display)] text-base font-semibold text-white">{verb}</p>
                        <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[#6F6F6F]">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="problem" className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:gap-20">
              <ScrollReveal direction="left">
                <div className="lg:sticky lg:top-28">
                  <span className="eyebrow">The gap traditional fitness misses</span>
                  <h2 className="section-title mt-5">You may still exercise.<span className="block text-gold-gradient">But do you feel capable?</span></h2>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={160}>
                <div className="space-y-8 text-lg leading-relaxed text-[#9B9B9B]">
                  <p>A workout can make you tired without making you more prepared. You can lift weights or finish cardio sessions and still notice that you feel stiffer, slower, less coordinated, or less confident than you used to.</p>
                  <p>Real life asks for more than isolated strength. It asks you to react, stabilize, change direction, control your body, recover, and produce force at the right moment.</p>
                  <div className="border-l-2 border-[#D4AF37] bg-[#D4AF37]/[0.035] px-6 py-5">
                    <p className="font-[var(--font-display)] text-xl italic text-white sm:text-2xl">“You don’t always need a harder workout. You need a better connection—and a body prepared for life.”</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="method" className="border-y border-[#D4AF37]/10 bg-[#050505] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <span className="eyebrow">The ALLEIN method</span>
                <h2 className="section-title mt-5">Train the qualities that make<span className="text-gold-gradient"> life feel possible.</span></h2>
                <p className="mt-6 text-lg leading-relaxed text-[#888]">Nervous-system-informed training is the method. Lifelong physical capability is the outcome.</p>
              </div>
            </ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((pillar, index) => (
                <ScrollReveal key={pillar.title} delay={index * 70}>
                  <article className="group h-full rounded-xl border border-white/[0.08] bg-black p-6 transition duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/35 lg:p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#D4AF37]/25 bg-[#D4AF37]/10"><pillar.icon className="h-5 w-5 text-[#D4AF37]" /></div>
                    <h3 className="mt-6 font-[var(--font-display)] text-xl font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#858585]">{pillar.description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="self-check" className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(212,175,55,.08),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
            <ScrollReveal direction="left">
              <div>
                <span className="eyebrow">Free capability self-check</span>
                <h2 className="section-title mt-5">Find the quality your current training may be<span className="text-gold-gradient"> overlooking.</span></h2>
                <p className="mt-6 text-lg leading-relaxed text-[#919191]">The Everyday Athlete Capability Self-Check helps you look beyond weight, calories, and appearance to evaluate how prepared your body is for the things you want life to include.</p>
                <ul className="mt-8 space-y-4">
                  {["See your strengths across the core qualities of capability", "Identify the area most likely limiting your confidence or performance", "Get a clearer direction for what to train next"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#C0C0C0]"><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" /><span>{item}</span></li>
                  ))}
                </ul>
                <p className="mt-8 border-l border-[#D4AF37]/40 pl-4 text-sm leading-relaxed text-[#737373]">Answer the six prompts honestly. The goal is not a perfect score—it is a clearer starting point.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <CapabilitySelfCheck />
            </ScrollReveal>
          </div>
        </section>

        <section id="process" className="border-y border-[#D4AF37]/10 bg-[#050505] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal><div className="max-w-3xl"><span className="eyebrow">How coaching works</span><h2 className="section-title mt-5">Personalized enough to fit your life. Structured enough to create progress.</h2></div></ScrollReveal>
            <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 90}>
                  <article className="relative h-full border-t border-[#D4AF37]/35 px-1 pt-6"><span className="font-[var(--font-display)] text-4xl font-bold text-[#D4AF37]/25">{step.number}</span><h3 className="mt-5 font-[var(--font-display)] text-2xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#858585]">{step.description}</p></article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="coaching" className="relative py-24 lg:py-32">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.04] blur-[130px]" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-[#090909] shadow-2xl shadow-black">
                <div className="grid lg:grid-cols-[1.05fr_.95fr]">
                  <div className="p-7 sm:p-10 lg:p-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/5 px-3 py-1.5"><Zap className="h-3.5 w-3.5 text-[#D4AF37]" /><span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">Five founding spots</span></div>
                    <h2 className="mt-6 font-[var(--font-display)] text-4xl font-bold sm:text-5xl">12-Week Founding Coaching</h2>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#929292]">A focused coaching experience for people ready to build a body that feels strong, responsive, adaptable, and trustworthy—not only today, but for the decades ahead.</p>
                    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-y border-white/[0.08] py-5 text-sm text-[#BDBDBD]">
                      <span className="flex items-center gap-2"><TimerReset className="h-4 w-4 text-[#D4AF37]" />12 weeks</span>
                      <span className="flex items-center gap-2"><Brain className="h-4 w-4 text-[#D4AF37]" />Individualized</span>
                      <span className="flex items-center gap-2"><Target className="h-4 w-4 text-[#D4AF37]" />Outcome focused</span>
                    </div>
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                      <a href={APPLY_URL} className="group inline-flex items-center justify-center gap-2 rounded-md bg-gold-gradient px-6 py-3.5 text-sm font-bold text-black transition hover:-translate-y-0.5">Apply for a Founding Spot<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
                      <p className="text-sm text-[#737373]">$1,200 upfront or 3 payments of $400</p>
                    </div>
                  </div>
                  <div className="border-t border-white/[0.08] bg-black/50 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">What’s included</p>
                    <ul className="mt-7 space-y-4">{offerIncludes.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#B8B8B8]"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10"><Check className="h-3 w-3 text-[#D4AF37]" /></span>{item}</li>)}</ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="about" className="border-y border-[#D4AF37]/10 bg-[#050505] py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-8">
            <ScrollReveal direction="left">
              <div className="relative mx-auto max-w-lg">
                <div className="absolute -inset-5 rounded-2xl bg-[#D4AF37]/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-xl border border-[#D4AF37]/20 bg-black">
                  <img src={ABOUT_IMG} alt="Michael Morgan, ALLEIN founder and coach" className="max-h-[620px] w-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6"><p className="font-[var(--font-display)] text-2xl font-semibold">Michael Morgan</p><p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#D4AF37]">Founder & Coach</p></div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <div>
                <span className="eyebrow">Built from experience</span>
                <h2 className="section-title mt-5">Coaching for the person—not just the workout.</h2>
                <div className="mt-7 space-y-5 text-lg leading-relaxed text-[#929292]">
                  <p>Michael is a certified personal trainer with a bachelor’s degree in Exercise Science and a background as an NCAA decathlete. He has coached athletes, busy adults, parents, older adults, and people navigating complex movement challenges.</p>
                  <p>ALLEIN grew from a simple belief: everyone deserves to feel athletic in the ways that matter to their life. Training should help you run, reach, react, carry, play, explore, and remain independent.</p>
                </div>
                <blockquote className="mt-8 border-l-2 border-[#D4AF37] pl-5 font-[var(--font-display)] text-xl italic text-white">“Everyone should move like an athlete—because life asks all of us to perform.”</blockquote>
                <div className="mt-8 flex flex-wrap gap-3">{["B.S. Exercise Science", "Certified Personal Trainer", "Former NCAA Decathlete"].map((credential) => <span key={credential} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#A6A6A6]">{credential}</span>)}</div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="faq" className="py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal><div className="text-center"><span className="eyebrow">Common questions</span><h2 className="section-title mt-5">Know what you’re stepping into.</h2></div></ScrollReveal>
            <div className="mt-12 divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {faqs.map((faq, index) => (
                <ScrollReveal key={faq.question} delay={index * 45}>
                  <details className="group py-2"><summary className="flex list-none items-center justify-between gap-6 py-5 text-left font-[var(--font-display)] text-lg font-semibold text-white marker:hidden">{faq.question}<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/25 text-[#D4AF37] transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pb-6 pr-10 text-sm leading-relaxed text-[#8D8D8D]">{faq.answer}</p></details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-t border-[#D4AF37]/10 py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.08),transparent_45%)]" />
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <ScrollReveal>
              <span className="eyebrow">Your next step</span>
              <h2 className="mt-5 font-[var(--font-display)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Your future body is being built by what you train today.</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#8D8D8D]">Start by finding out which quality deserves more attention—and take one practical step toward a body you can trust.</p>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"><PrimaryCta /><a href={APPLY_URL} className="inline-flex items-center justify-center rounded-md border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#D4AF37]/50">Ask About Coaching</a></div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

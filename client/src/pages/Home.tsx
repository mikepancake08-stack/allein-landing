/**
 * ALLEIN Home Page — Dark Forge / Industrial Luxury
 * Design: Playfair Display headlines, DM Sans body, black bg, gold (#D4AF37) accents
 * Layout: Asymmetric hero, staggered feature cards, cinematic about section
 * Updated with real app screenshots
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Camera,
  Dumbbell,
  Flame,
  Heart,
  Brain,
  Users,
  ClipboardList,
  Gem,
  Target,
  BarChart3,
} from "lucide-react";

/* ── Real app screenshot URLs ── */
const HERO_PHONE = "/screenshots/hero_phone_mockup.png";

const HERO_BG =
  "https://private-us-east-1.manuscdn.com/sessionFile/uMnqnvJI78uiszF7KOW311/sandbox/PnTEwDjnxVpRTazgEKJI7K-img-2_1771989634000_na1fn_aGVyby1iZy10ZXh0dXJl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdU1ucW52Skk3OHVpc3pGN0tPVzMxMS9zYW5kYm94L1BuVEV3RGpueFZwUlRhemdFS0pJN0staW1nLTJfMTc3MTk4OTYzNDAwMF9uYTFmbl9hR1Z5YnkxaVp5MTBaWGgwZFhKbC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AAFnZXQLWcAZueZkZerps5-4ug9ks9VjDMtQPXmC6uN9OKcwZw5khd-uoTkqT3g8MCsr5DaAdSRkOJu~SWHJQd-mCWvz~sHvUb8Tv-y5RIieAP4K8qQHRdEZPhODsqUnHfeOANo2iExx3eEciwxkjy8p~7eeiq6D~yMxA5quw1Pb19HEfyOJw23gDcaI~0SfU~cCylhdKu8FZLW6wDBGRvO~8L2L-YmwzWwxYoj9mk~dvcQ5BtfZ6ZQSFKS0hJIlbv8l-J76pKBi3yfpomGFI53s1ytnwySZkEUOCDhnm83fc7neZuE-CmvtsTFSatXh4Fs~nDRvcOmenZ4dzgkCVQ__";

const ABOUT_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/uMnqnvJI78uiszF7KOW311/sandbox/PnTEwDjnxVpRTazgEKJI7K-img-3_1771989636000_na1fn_YWJvdXQtdHJhaW5lcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdU1ucW52Skk3OHVpc3pGN0tPVzMxMS9zYW5kYm94L1BuVEV3RGpueFZwUlRhemdFS0pJN0staW1nLTNfMTc3MTk4OTYzNjAwMF9uYTFmbl9ZV0p2ZFhRdGRISmhhVzVsY2cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Z~7OUE6NHUvb7qlsmuZmi2LJplBkCZ6AbSs4krTRYRQyCujP~gLkLGCy3XbSanAJQR3an2Gf6l-ezEQp-7Ypsla8TbUZhKVTzdq0NuI7IAsQXuP7ofgxuUNChrKMTpa3uAWhpK4pn2XMnaJ7SDyTM3L7ybh4p9I6JAbJ097QsjkaFRFfO3rs9Sgy8efcmgGW7n0lao5WawIbK6gbOnvbcLX7hDe21067Cv5BY7~bzyAhTJFCZDzZ5bzb-PSrHMfarPyB~-LAKy8Zqoq1Bz4vlcXeblUYa4Iv3FrHgIAP61PESNvHoTF8J6sN3kkP33Dalb0tT8hgOZGj3Gn81Kdizw__";

const FEATURES_NUTRITION = "/screenshots/features_nutrition.png";
const FEATURES_WORKOUT = "/screenshots/features_workout.png";

/* ── App preview screenshots for carousel ── */
const APP_PREVIEWS = [
  { src: "/screenshots/home_screen.jpg", label: "Dashboard", description: "Your week at a glance with workouts and macro tracking" },
  { src: "/screenshots/nutrition_screen.jpg", label: "Nutrition", description: "AI-powered calorie and macro tracking" },
  { src: "/screenshots/workouts_screen.jpg", label: "Workouts", description: "Programs, community workouts, and AI builder" },
  { src: "/screenshots/lifestyle_screen.jpg", label: "Lifestyle", description: "Daily habits, streaks, and progress tracking" },
  { src: "/screenshots/workout_detail_screen.jpg", label: "Active Workout", description: "Video guides with set and rep logging" },
  { src: "/screenshots/log_food_screen.jpg", label: "Log Food", description: "Photo, barcode, text, and menu scanning" },
];

const features = [
  {
    icon: Camera,
    title: "AI Food Logging",
    description:
      "Log meals by photo, text, or barcode. Our AI instantly identifies your food and delivers a complete macro and micronutrient breakdown.",
  },
  {
    icon: Dumbbell,
    title: "Workout Tracking",
    description:
      "Log every set, rep, and weight with precision. Built around the science of progressive overload with visual analytics.",
  },
  {
    icon: Flame,
    title: "Habit & Streak Tracking",
    description:
      "Build daily disciplines that compound into results. Track sleep, hydration, steps, and custom habits with streak rewards.",
  },
  {
    icon: Heart,
    title: "Apple Health Sync",
    description:
      "Seamless two-way sync with Apple Health. Your workouts, nutrition, steps, heart rate, and sleep — all in one place.",
  },
  {
    icon: Brain,
    title: "AI Program Builder",
    description:
      "Get a personalized workout plan built around your goals, schedule, and fitness level. Not a generic template — tailored to you.",
  },
  {
    icon: Users,
    title: "Community Programs",
    description:
      "Explore community-built programs from real trainers, or build and share your own. Train together, grow together.",
  },
  {
    icon: ClipboardList,
    title: "Coach Dashboard",
    description:
      "Professional-grade tools for personal trainers. Manage clients, assign programs, monitor progress — all from within the app.",
  },
  {
    icon: Gem,
    title: "Macro & Micro Tracking",
    description:
      "Go beyond calories. Track protein, carbs, fats, fiber, vitamins, and minerals with data from USDA and Open Food Facts.",
  },
  {
    icon: BarChart3,
    title: "Health Strategy",
    description:
      "BMR and TDEE calculations ensure your calorie targets always align with your actual energy expenditure.",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description:
      "Whether you're cutting, bulking, maintaining, or chasing hypertrophy — ALLEIN adapts to your specific goals.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        {/* Diagonal gold accent line */}
        <div
          className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent"
          style={{ transform: "rotate(15deg)", transformOrigin: "top center" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-0 lg:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen">
            {/* Left: Text */}
            <div className="space-y-8 lg:pr-8">
              <ScrollReveal delay={200}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                  <span className="text-xs font-medium text-[#D4AF37] tracking-wider uppercase">
                    Your Ultimate Fitness Partner
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
                  <span className="text-white">Forge Your</span>
                  <br />
                  <span className="text-gold-gradient gold-glow-text">
                    Path to Peak
                  </span>
                  <br />
                  <span className="text-white">Health</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <p className="text-lg text-[#999] leading-relaxed max-w-lg font-[var(--font-body)]">
                  The all-in-one AI-powered fitness ecosystem designed by a certified
                  personal trainer for those who are serious about results. Stop
                  guessing. Start achieving.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={800}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-6 py-3.5 bg-white/5 border border-[#D4AF37]/20 rounded-lg hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all duration-300"
                  >
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] text-[#888] leading-none">Download on the</div>
                      <div className="text-sm font-semibold text-white leading-tight">App Store</div>
                    </div>
                  </a>

                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-6 py-3.5 bg-white/5 border border-[#D4AF37]/20 rounded-lg hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#34A853" d="M3.609 1.814L13.792 12 3.61 22.186a2.37 2.37 0 01-.61-1.6V3.414c0-.6.222-1.15.609-1.6z" />
                      <path fill="#FBBC04" d="M17.556 8.236L13.792 12l3.764 3.764 4.252-2.41c.73-.413 1.192-1.17 1.192-2.004v-.7c0-.834-.461-1.591-1.192-2.004l-4.252-2.41z" />
                      <path fill="#4285F4" d="M3.609 1.814L13.792 12 17.556 8.236l-4.252-2.41L5.25.764C4.65.424 3.99.414 3.609 1.814z" />
                      <path fill="#EA4335" d="M13.792 12L3.609 22.186c.381 1.4 1.041 1.39 1.641 1.05l8.054-5.062L17.556 15.764 13.792 12z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] text-[#888] leading-none">Get it on</div>
                      <div className="text-sm font-semibold text-white leading-tight">Google Play</div>
                    </div>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <ScrollReveal delay={600} direction="right">
                <div className="relative">
                  {/* Gold glow behind phone */}
                  <div className="absolute inset-0 blur-[80px] bg-[#D4AF37]/15 rounded-full scale-75" />
                  <img
                    src={HERO_PHONE}
                    alt="ALLEIN App Dashboard"
                    className="relative w-[280px] sm:w-[320px] lg:w-[380px] xl:w-[420px] h-auto drop-shadow-2xl"
                    style={{
                      animation: "float 6s ease-in-out infinite",
                    }}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] text-[#D4AF37] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════ FEATURES SHOWCASE ═══════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Diagonal gold line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* AI Food Logging Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden p-4 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent">
                <img
                  src={FEATURES_NUTRITION}
                  alt="ALLEIN Nutrition tracking and AI food logging"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                  <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-xs font-medium text-[#D4AF37] tracking-wider uppercase">
                    AI-Powered
                  </span>
                </div>
                <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Nutrition Made{" "}
                  <span className="text-gold-gradient">Effortless</span>
                </h2>
                <p className="text-[#999] text-lg leading-relaxed">
                  Snap a photo, type a description, or scan a barcode. ALLEIN's AI
                  instantly identifies your food and delivers a complete macro and
                  micronutrient breakdown — calories, protein, carbs, fats, fiber,
                  vitamins, and minerals.
                </p>
                <p className="text-[#666] text-sm leading-relaxed">
                  Powered by Open Food Facts and the USDA FoodData Central database,
                  with access to millions of foods and unparalleled accuracy.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Workout Tracking Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
            <ScrollReveal direction="left" delay={200} className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                  <Dumbbell className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-xs font-medium text-[#D4AF37] tracking-wider uppercase">
                    Progressive Overload
                  </span>
                </div>
                <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Train With{" "}
                  <span className="text-gold-gradient">Precision</span>
                </h2>
                <p className="text-[#999] text-lg leading-relaxed">
                  Log every set, rep, and weight with precision. Visualize your
                  strength gains over time, identify plateaus before they stall your
                  progress, and make data-driven decisions about your training.
                </p>
                <p className="text-[#666] text-sm leading-relaxed">
                  Whether you're into powerlifting, bodybuilding, HIIT, or functional
                  fitness — ALLEIN adapts to your training style.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden p-4 bg-gradient-to-bl from-[#D4AF37]/5 via-transparent to-transparent">
                <img
                  src={FEATURES_WORKOUT}
                  alt="ALLEIN workout tracking with video guides"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ APP PREVIEW ═══════════════════════ */}
      <section id="preview" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <span className="text-xs font-semibold text-[#D4AF37] tracking-[0.3em] uppercase">
                See It In Action
              </span>
              <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Designed for{" "}
                <span className="text-gold-gradient">Results</span>
              </h2>
              <p className="text-[#888] text-lg max-w-2xl mx-auto">
                Every screen is crafted with purpose — beautiful, intuitive, and built
                to help you achieve your fitness goals faster.
              </p>
            </div>
          </ScrollReveal>

          {/* Horizontal scrolling preview */}
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {APP_PREVIEWS.map((preview, i) => (
                <ScrollReveal key={preview.label} delay={i * 100} direction="up">
                  <div className="flex-shrink-0 w-[220px] sm:w-[260px] group">
                    <div className="relative rounded-2xl overflow-hidden border border-[#1A1A1A] group-hover:border-[#D4AF37]/30 transition-all duration-500 bg-[#0A0A0A]">
                      {/* Phone frame styling */}
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={preview.src}
                          alt={`ALLEIN ${preview.label} screen`}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h4 className="text-sm font-semibold text-white font-[var(--font-display)]">{preview.label}</h4>
                      <p className="text-xs text-[#666] mt-1 leading-relaxed">{preview.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FEATURES GRID ═══════════════════════ */}
      <section id="features" className="relative py-24 lg:py-32">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <span className="text-xs font-semibold text-[#D4AF37] tracking-[0.3em] uppercase">
                Everything You Need
              </span>
              <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                A Complete Fitness{" "}
                <span className="text-gold-gradient">Operating System</span>
              </h2>
              <p className="text-[#888] text-lg max-w-2xl mx-auto">
                Every tool you need to transform your health, unified in one
                beautifully designed experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 80}>
                <div className="group relative p-6 lg:p-7 rounded-lg bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#D4AF37]/30 transition-all duration-500 h-full">
                  {/* Subtle gold glow on hover */}
                  <div className="absolute inset-0 rounded-lg bg-[#D4AF37]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative space-y-4">
                    <div className="w-10 h-10 rounded flex items-center justify-center bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                      <feature.icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <h3 className="font-[var(--font-display)] text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#888] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ ABOUT ═══════════════════════ */}
      <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent rounded-lg blur-2xl" />
                <div className="relative rounded-lg overflow-hidden border border-[#D4AF37]/10">
                  <img
                    src={ABOUT_IMG}
                    alt="Personal trainer in premium gym"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-6">
                <span className="text-xs font-semibold text-[#D4AF37] tracking-[0.3em] uppercase">
                  The Story
                </span>
                <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Built by a{" "}
                  <span className="text-gold-gradient">Real Trainer</span>
                </h2>
                <p className="text-[#999] text-lg leading-relaxed">
                  ALLEIN was built by a certified personal trainer with a degree in
                  exercise science, because the fitness apps on the market were either
                  too simple or too complicated.
                </p>
                <p className="text-[#999] text-lg leading-relaxed">
                  ALLEIN is the tool he wished he had — scientifically grounded,
                  intelligently designed, and built for people who take their health
                  seriously.
                </p>
                <div className="pt-4 border-t border-[#1A1A1A]">
                  <p className="text-sm text-[#D4AF37] font-medium italic font-[var(--font-display)]">
                    "This is not another generic calorie counter. This is a complete
                    fitness operating system."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

        {/* Radial gold glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-[#D4AF37]/[0.03] blur-[120px]" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-xs font-semibold text-[#D4AF37] tracking-[0.3em] uppercase">
              Start Today
            </span>
            <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              Your Transformation{" "}
              <span className="text-gold-gradient">Starts Here</span>
            </h2>
            <p className="text-[#888] text-lg mb-10 max-w-xl mx-auto">
              Join thousands who are taking their fitness seriously with ALLEIN.
              Download now and forge your path to peak health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold-gradient text-black font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#D4AF37]/20"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download for iOS
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-[#D4AF37]/30 text-white font-semibold rounded-lg hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/5 transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#34A853" d="M3.609 1.814L13.792 12 3.61 22.186a2.37 2.37 0 01-.61-1.6V3.414c0-.6.222-1.15.609-1.6z" />
                  <path fill="#FBBC04" d="M17.556 8.236L13.792 12l3.764 3.764 4.252-2.41c.73-.413 1.192-1.17 1.192-2.004v-.7c0-.834-.461-1.591-1.192-2.004l-4.252-2.41z" />
                  <path fill="#4285F4" d="M3.609 1.814L13.792 12 17.556 8.236l-4.252-2.41L5.25.764C4.65.424 3.99.414 3.609 1.814z" />
                  <path fill="#EA4335" d="M13.792 12L3.609 22.186c.381 1.4 1.041 1.39 1.641 1.05l8.054-5.062L17.556 15.764 13.792 12z" />
                </svg>
                Get on Google Play
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      {/* Float animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

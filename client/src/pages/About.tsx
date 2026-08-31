import { Award, Brain, Dumbbell, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";

const experience = [
  { icon: Award, value: "B.S.", label: "Exercise Science" },
  { icon: Dumbbell, value: "Since 2018", label: "Certified personal trainer" },
  { icon: Brain, value: "NCAA", label: "Decathlete background" },
  { icon: Users, value: "All ages", label: "Athletes to older adults" },
];

export default function About() {
  const schema = { "@type": "Person", name: "Michael Morgan", jobTitle: "Founder and Coach at ALLEIN", url: "https://alleinfitness.com/about", worksFor: { "@type": "Organization", name: "ALLEIN" } };
  return <div className="min-h-screen bg-black text-white">
    <Seo title="About Michael Morgan | ALLEIN" description="Meet ALLEIN founder Michael Morgan, B.S. Exercise Science, former NCAA decathlete, and coach helping everyday athletes build lifelong capability." path="/about" schema={schema} />
    <Navbar />
    <main id="main-content">
      <PageHero eyebrow="About Michael" title={<>Coach. Athlete. <span className="text-gold-gradient">Translator.</span></>} intro="I created ALLEIN to make nervous-system-informed training practical for everyday people who want a body they can trust—not only a workout that makes them tired." />
      <section className="py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#080808]"><img src="/screenshots/michael_trainer.jpg" alt="Michael Morgan coaching at ALLEIN" className="aspect-[4/5] w-full object-cover object-top" /></div>
        <div>
          <span className="eyebrow">Why I coach this way</span>
          <h2 className="section-title mt-5">Fitness should expand your life.</h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-[#999] sm:text-lg">
            <p>My perspective was shaped by competing as an NCAA decathlete, where performance depended on far more than isolated strength. Speed, rhythm, coordination, power, recovery, and the ability to adapt all had to work together.</p>
            <p>Since becoming a certified personal trainer in 2018 and earning my B.S. in Exercise Science, I have coached general-population adults, busy parents, high-school and college athletes, older adults, and people living with conditions including MS and Parkinson’s.</p>
            <p>Across those populations, the same truth keeps showing up: people need more than exercises. They need confidence in their movement and a system that helps strength, mobility, balance, reaction, and recovery work together.</p>
            <p>That is what ALLEIN is designed to build—an Everyday Athlete who can meet work, family, recreation, aging, and the unexpected with more physical options.</p>
          </div>
        </div>
      </div></section>
      <section className="border-y border-[#D4AF37]/10 bg-[#050505] py-16"><div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">{experience.map(({icon: Icon,value,label}) => <div key={label} className="rounded-xl border border-white/[.08] bg-black p-6"><Icon className="h-5 w-5 text-[#D4AF37]"/><p className="mt-5 font-[var(--font-display)] text-2xl font-bold">{value}</p><p className="mt-2 text-sm text-[#777]">{label}</p></div>)}</div></section>
      <section className="py-20 text-center lg:py-28"><div className="mx-auto max-w-3xl px-4"><span className="eyebrow">The standard</span><blockquote className="mt-6 font-[var(--font-display)] text-3xl font-semibold leading-tight sm:text-4xl">“Strong is valuable. <span className="text-gold-gradient">Capable is the standard.</span>”</blockquote><p className="mt-6 text-[#888]">My role is to help you understand your body, build evidence of what it can do, and become less dependent on motivation, guesswork, or fear.</p><a href="/coaching" className="mt-8 inline-flex rounded-md bg-gold-gradient px-6 py-3.5 text-sm font-bold text-black">Explore coaching</a></div></section>
    </main><Footer />
  </div>;
}

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";

const principles = [
  ["01", "Train the Nervous System First", "Better movement starts with a better nervous system.", "Strength, mobility, balance, reaction, and confidence are expressions of one integrated brain-body system."],
  ["02", "Capability Is the True Measure", "Fitness is what your body allows you to do.", "We measure progress by expanding physical options, freedom, confidence, and participation in life."],
  ["03", "Everyone Is an Everyday Athlete", "Athletic movement belongs to human beings.", "Responsiveness, coordination, strength, mobility, power, and adaptability matter at every age."],
  ["04", "Movement Quality Creates Freedom", "Earn better options before demanding more intensity.", "We build clear, confident movement before layering speed, load, complexity, and fatigue."],
  ["05", "Power Is a Lifelong Skill", "Strength matters. Using it quickly matters too.", "Speed and power are trained safely and progressively because life rarely gives unlimited time to react."],
  ["06", "Adaptability Is the Goal", "A capable system can solve problems.", "Variation, multidirectional movement, sensory challenges, and decision-making prepare people for changing environments."],
  ["07", "Recovery Is Part of Performance", "The nervous system must produce—and restore.", "Sleep, nutrition, breathing, stress regulation, and training dosage shape whether the body adapts or only accumulates fatigue."],
  ["08", "Identity Shapes Action", "Capability becomes sustainable when it becomes personal.", "Small wins and deliberate practice help people become Everyday Athletes who trust themselves and act accordingly."],
];

export default function Philosophy() {
  return <div className="min-h-screen bg-black text-white"><Seo title="The ALLEIN Philosophy | Eight Principles of Capability" description="Discover the eight principles behind ALLEIN's nervous-system-first approach to strength, power, movement, recovery, and lifelong capability." path="/philosophy" />
    <Navbar /><main id="main-content"><PageHero eyebrow="The ALLEIN philosophy" title={<>Eight principles of <span className="text-gold-gradient">capability.</span></>} intro="A timeless decision-making system for building stronger, faster, more adaptable human beings—for life." />
      <section className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mx-auto mb-14 max-w-3xl text-center"><p className="text-lg leading-relaxed text-[#999]">Methods should evolve as evidence and the individual demand. These principles stay steady and guide every exercise, program, coaching decision, and definition of progress at ALLEIN.</p></div><div className="grid gap-4 lg:grid-cols-2">{principles.map(([number,title,lead,body]) => <article key={number} className="rounded-xl border border-white/[.08] bg-[#050505] p-7 transition hover:border-[#D4AF37]/30"><div className="flex items-start gap-5"><span className="font-[var(--font-display)] text-3xl font-bold text-[#D4AF37]">{number}</span><div><h2 className="font-[var(--font-display)] text-2xl font-semibold">{title}</h2><p className="mt-3 font-medium text-[#D4AF37]">{lead}</p><p className="mt-3 leading-relaxed text-[#888]">{body}</p></div></div></article>)}</div></div></section>
      <section className="border-y border-[#D4AF37]/10 bg-[#050505] py-20"><div className="mx-auto max-w-4xl px-4 text-center"><span className="eyebrow">Our promise</span><h2 className="section-title mt-5">Build a body you can trust for the next 50 years.</h2><p className="mt-6 text-lg leading-relaxed text-[#999]">Train the nervous system. Build the body. Shape the identity. Expand what is possible.</p></div></section>
    </main><Footer /></div>;
}

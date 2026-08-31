import type { ReactNode } from "react";

export default function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-[#D4AF37]/10 pb-20 pt-32 lg:pb-24 lg:pt-40">
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 max-w-4xl font-[var(--font-display)] text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl">{title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#A3A3A3] sm:text-xl">{intro}</p>
        {children}
      </div>
    </section>
  );
}

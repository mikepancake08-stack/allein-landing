import { ArrowRight, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { articles, upcomingArticles } from "@/content/articles";

export default function Insights() {
  return <div className="min-h-screen bg-black text-white"><Seo title="ALLEIN Insights | Nervous-System-First Training" description="Practical articles about nervous-system-first fitness, athletic longevity, strength, power, balance, coordination, recovery, and real-world capability." path="/insights" />
    <Navbar/><main id="main-content"><PageHero eyebrow="ALLEIN Insights" title={<>Train with more <span className="text-gold-gradient">understanding.</span></>} intro="Clear, evidence-aware ideas about the nervous system, athletic longevity, and building a body that performs for life." />
      <section className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
        <div>{articles.map(article => <article key={article.slug} className="group rounded-2xl border border-[#D4AF37]/20 bg-[#070707] p-7 transition hover:border-[#D4AF37]/45 sm:p-9"><p className="eyebrow">{article.category}</p><h2 className="mt-5 font-[var(--font-display)] text-3xl font-bold leading-tight sm:text-4xl">{article.title}</h2><p className="mt-5 leading-relaxed text-[#999]">{article.description}</p><div className="mt-6 flex items-center gap-4 text-xs text-[#666]"><span>{article.date}</span><span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5"/>{article.readTime}</span></div><a href={`/insights/${article.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#D4AF37]">Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1"/></a></article>)}</div>
        <aside className="rounded-2xl border border-white/[.08] bg-[#050505] p-7"><p className="eyebrow">Coming next</p><div className="mt-6 space-y-5">{upcomingArticles.map((title,index)=><div key={title} className="border-b border-white/[.07] pb-5 last:border-0"><span className="text-xs text-[#D4AF37]">0{index+2}</span><p className="mt-2 font-[var(--font-display)] text-lg font-semibold leading-snug text-[#BDBDBD]">{title}</p></div>)}</div></aside>
      </div></div></section>
    </main><Footer/></div>;
}

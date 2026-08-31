import { ArrowLeft, Clock } from "lucide-react";
import { useRoute } from "wouter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { articles } from "@/content/articles";
import NotFound from "./NotFound";

export default function Article() {
  const [, params] = useRoute("/insights/:slug");
  const article = articles.find(item => item.slug === params?.slug);
  if (!article) return <NotFound/>;
  const path = `/insights/${article.slug}`;
  const schema = { "@type": "Article", headline: article.title, description: article.description, datePublished: "2026-08-31", dateModified: "2026-08-31", author: { "@type": "Person", name: "Michael Morgan" }, publisher: { "@type": "Organization", name: "ALLEIN" }, mainEntityOfPage: `https://alleinfitness.com${path}` };
  return <div className="min-h-screen bg-black text-white"><Seo title={`${article.title} | ALLEIN`} description={article.description} path={path} type="article" schema={schema}/><Navbar/><main id="main-content">
    <article><header className="relative overflow-hidden border-b border-[#D4AF37]/10 pb-16 pt-32 lg:pb-20 lg:pt-40"><div className="absolute inset-0 hero-grid opacity-40"/><div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><a href="/insights" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-[#888] hover:text-[#D4AF37]"><ArrowLeft className="h-4 w-4"/>All insights</a><p className="eyebrow mt-10">{article.category}</p><h1 className="mt-5 font-[var(--font-display)] text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">{article.title}</h1><p className="mt-6 text-xl leading-relaxed text-[#A3A3A3]">{article.intro}</p><div className="mt-7 flex items-center gap-4 text-xs text-[#666]"><span>By Michael Morgan</span><span>{article.date}</span><span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5"/>{article.readTime}</span></div></div></header>
      <div className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6 lg:py-24">{article.sections.map(section=><section key={section.heading}><h2 className="font-[var(--font-display)] text-3xl font-semibold">{section.heading}</h2>{section.paragraphs?.map(p=><p key={p} className="mt-5 text-lg leading-[1.8] text-[#A0A0A0]">{p}</p>)}{section.bullets&&<ul className="mt-6 space-y-4">{section.bullets.map(item=><li key={item} className="flex gap-4 text-lg leading-relaxed text-[#999]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]"/><span>{item}</span></li>)}</ul>}</section>)}
        <aside className="rounded-2xl border border-[#D4AF37]/25 bg-[#080808] p-7 text-center sm:p-9"><p className="eyebrow">Find your starting point</p><h2 className="mt-4 font-[var(--font-display)] text-3xl font-semibold">How capable do you feel today?</h2><p className="mt-4 leading-relaxed text-[#888]">Take the free six-question Everyday Athlete Capability Self-Check and receive the full guide.</p><a href="https://allein.kit.com/b41a314882" className="mt-6 inline-flex rounded-md bg-gold-gradient px-6 py-3.5 text-sm font-bold text-black">Take the free self-check</a></aside>
      </div></article>
    </main><Footer/></div>;
}

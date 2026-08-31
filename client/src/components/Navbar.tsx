import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [["Philosophy", "/philosophy"], ["Coaching", "/coaching"], ["Insights", "/insights"], ["About", "/about"]];

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-[#D4AF37]/10 bg-black/90 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="group flex items-center" aria-label="ALLEIN home">
          <img
            src="/brand/allein-logo-horizontal.png"
            alt="ALLEIN"
            className="h-auto w-[150px] transition duration-300 group-hover:brightness-110 lg:w-[178px]"
          />
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-xs font-semibold uppercase tracking-[0.13em] text-[#A3A3A3] transition hover:text-[#D4AF37]">{label}</Link>)}
          <a href="/#self-check" className="rounded bg-gold-gradient px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-black transition hover:opacity-90">Start Here</a>
        </div>
        <button type="button" onClick={() => setMobileOpen((open) => !open)} className="flex flex-col gap-1.5 p-2 md:hidden" aria-label="Toggle menu" aria-expanded={mobileOpen}>
          <span className={`h-0.5 w-6 bg-[#D4AF37] transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#D4AF37] transition ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#D4AF37] transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      <div className={`overflow-hidden border-b border-[#D4AF37]/10 bg-black/95 backdrop-blur-xl transition-all duration-300 md:hidden ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col gap-1 px-4 py-4">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="py-3 text-left text-xs font-semibold uppercase tracking-[0.13em] text-[#A3A3A3]">{label}</Link>)}
          <a href="/#self-check" onClick={() => setMobileOpen(false)} className="mt-2 rounded bg-gold-gradient px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.1em] text-black">Take the Free Self-Check</a>
        </div>
      </div>
    </nav>
  );
}

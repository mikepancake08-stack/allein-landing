import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/10 bg-black">
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr] lg:gap-16">
          <div>
            <img src="/brand/allein-logo-horizontal.png" alt="ALLEIN" className="h-auto w-[180px]" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#777]">Nervous-system-informed coaching that helps everyday athletes build strength, movement, confidence, and lifelong capability.</p>
          </div>
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Legal</h3>
            <div className="mt-4 flex flex-col gap-3"><Link href="/privacy" className="text-sm text-[#777] transition hover:text-[#D4AF37]">Privacy Policy</Link><Link href="/terms" className="text-sm text-[#777] transition hover:text-[#D4AF37]">Terms of Service</Link></div>
          </div>
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Contact</h3>
            <div className="mt-4 flex flex-col gap-3"><a href="mailto:michael@alleinfitness.com" className="text-sm text-[#777] transition hover:text-[#D4AF37]">michael@alleinfitness.com</a><a href="https://instagram.com/michaelmorgan.fit" target="_blank" rel="noreferrer" className="text-sm text-[#777] transition hover:text-[#D4AF37]">@michaelmorgan.fit</a></div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-7 text-xs text-[#515151] sm:flex-row sm:items-center sm:justify-between"><p>&copy; {new Date().getFullYear()} ALLEIN. All rights reserved.</p><p>Build a body that performs for life.</p></div>
      </div>
    </footer>
  );
}

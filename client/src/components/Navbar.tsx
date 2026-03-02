/**
 * ALLEIN Navbar — Dark Forge / Industrial Luxury
 * Fixed top navigation with gold logo and minimal links.
 * Glass-morphism background on scroll.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663358919646/ICclimMyHOYPwpOg.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (!isHome) {
      setLocation("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-[#D4AF37]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src={LOGO_URL}
              alt="ALLEIN"
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-gold-gradient font-[var(--font-display)] text-xl font-bold tracking-wide">
              ALLEIN
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm text-[#B0B0B0] hover:text-[#D4AF37] transition-colors duration-300 font-medium tracking-wide uppercase"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-[#B0B0B0] hover:text-[#D4AF37] transition-colors duration-300 font-medium tracking-wide uppercase"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("hero")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-gradient text-black text-sm font-semibold rounded tracking-wide hover:opacity-90 transition-opacity duration-300"
            >
              Download
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/10`}
      >
        <div className="px-4 py-4 flex flex-col gap-3">
          <button
            onClick={() => scrollToSection("features")}
            className="text-left text-sm text-[#B0B0B0] hover:text-[#D4AF37] transition-colors py-2 font-medium tracking-wide uppercase"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-left text-sm text-[#B0B0B0] hover:text-[#D4AF37] transition-colors py-2 font-medium tracking-wide uppercase"
          >
            About
          </button>
          <button
            onClick={() => { scrollToSection("hero"); setMobileOpen(false); }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gold-gradient text-black text-sm font-semibold rounded tracking-wide"
          >
            Download
          </button>
        </div>
      </div>
    </nav>
  );
}

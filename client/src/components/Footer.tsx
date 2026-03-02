/**
 * ALLEIN Footer — Dark Forge / Industrial Luxury
 * Minimal footer with gold accents, links to Privacy/Terms, contact email.
 */
import { Link } from "wouter";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663358919646/ICclimMyHOYPwpOg.png";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-[#D4AF37]/10">
      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img src={LOGO_URL} alt="ALLEIN" className="h-8 w-auto" />
              <span className="text-gold-gradient font-[var(--font-display)] text-lg font-bold tracking-wide">
                ALLEIN
              </span>
            </div>
            <p className="text-sm text-[#888] leading-relaxed max-w-xs">
              The all-in-one fitness ecosystem designed by a certified personal trainer
              for those who are serious about results.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-[#D4AF37] tracking-[0.2em] uppercase">
              Legal
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/privacy"
                className="text-sm text-[#888] hover:text-[#D4AF37] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-[#888] hover:text-[#D4AF37] transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-[#D4AF37] tracking-[0.2em] uppercase">
              Contact
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:support@alleinfitness.app"
                className="text-sm text-[#888] hover:text-[#D4AF37] transition-colors duration-300"
              >
                support@alleinfitness.app
              </a>
              <a
                href="mailto:privacy@alleinfitness.app"
                className="text-sm text-[#888] hover:text-[#D4AF37] transition-colors duration-300"
              >
                privacy@alleinfitness.app
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#D4AF37]/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#555]">
              &copy; {new Date().getFullYear()} ALLEIN. All rights reserved.
            </p>
            <p className="text-xs text-[#555]">
              Built with science. Designed for results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

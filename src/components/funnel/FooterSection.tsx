import Link from "next/link";
import Image from "next/image";
import { CALENDLY_URL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
  { label: "Free Audit", href: CALENDLY_URL, external: true },
];

export function FooterSection() {
  return (
    <footer className="relative py-14 bg-[var(--brand-dark)] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" className="group">
              <Image
                src="/images/logo-white.svg"
                alt="EXEIV"
                width={100}
                height={32}
                className="h-7 w-auto brightness-90 group-hover:brightness-100 transition-all duration-300"
              />
            </Link>
            <p className="text-[var(--brand-soft)]/40 font-sans text-xs uppercase tracking-widest">
              Engineering the future of operations.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3" aria-label="Footer navigation">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brand-accent)] font-heading font-bold text-xs uppercase tracking-widest hover:opacity-80 transition-opacity"
                >
                  {link.label} →
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[var(--brand-soft)]/50 font-sans text-xs uppercase tracking-widest hover:text-[var(--brand-accent)] transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-[var(--brand-soft)]/30 text-xs font-sans">
          <p>© 2026 EXEIV. All rights reserved.</p>
          <p>Operating Worldwide</p>
        </div>
      </div>
    </footer>
  );
}

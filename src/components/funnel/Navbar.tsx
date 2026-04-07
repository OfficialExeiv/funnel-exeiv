"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
      id="main-nav"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className={`glass rounded-2xl md:rounded-3xl transition-all duration-500 px-6 md:px-10 flex items-center justify-between ${
          scrolled ? "h-16 md:h-20 shadow-2xl shadow-black/20" : "h-20 md:h-24 border-transparent bg-transparent backdrop-blur-0"
        }`}>
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--brand-accent)] flex items-center justify-center text-white font-black text-sm group-hover:scale-110 transition-transform duration-300">
              E
            </div>
            <span className="font-heading text-2xl font-bold tracking-[0.2em] text-[var(--brand-base)] group-hover:text-[var(--brand-accent)] transition-colors duration-300">
              EXEIV
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {["How It Works", "Case Studies", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-heading text-xs font-bold uppercase tracking-widest text-[var(--brand-base)]/50 hover:text-[var(--brand-accent)] transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--brand-accent)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-glow bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white font-heading font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[var(--brand-accent)]/20"
            >
              Free Audit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 p-2 cursor-pointer glass rounded-xl"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-[var(--brand-base)] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--brand-base)] transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--brand-base)] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-[var(--brand-dark)]/98 backdrop-blur-xl z-[-1] md:hidden transition-all duration-500 flex flex-col items-center justify-center gap-8 px-8 ${
        open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}>
        {["How It Works", "Case Studies", "FAQ"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={() => setOpen(false)}
            className="font-heading text-2xl font-bold tracking-widest text-[var(--brand-base)] hover:text-[var(--brand-accent)] transition-colors duration-300"
          >
            {item}
          </a>
        ))}
        <Link
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-glow w-full bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white font-heading font-bold text-lg uppercase tracking-[0.2em] py-6 rounded-2xl text-center shadow-2xl shadow-[var(--brand-accent)]/20"
          onClick={() => setOpen(false)}
        >
          Free Audit
        </Link>
      </div>
    </nav>
  );
}


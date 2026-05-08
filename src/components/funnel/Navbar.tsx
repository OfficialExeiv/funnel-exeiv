"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CALENDLY_URL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div
          className={`glass rounded-2xl md:rounded-3xl transition-all duration-500 flex items-center justify-between px-6 md:px-10 ${
            scrolled
              ? "h-16 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(115,60,151,0.15)] border-(--brand-accent)/20"
              : "h-20 md:h-24 border-white/5"
          }`}
        >
          {/* ── Logo ── */}
          <Link href="/" className="group flex items-center shrink-0" aria-label="EXEIV home">
            <Image
              src="/images/logo-white.svg"
              alt="EXEIV"
              width={110}
              height={36}
              className="h-8 md:h-10 w-auto brightness-90 group-hover:brightness-110 transition-all duration-300"
              priority
            />
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-heading text-xs font-bold uppercase tracking-widest text-brand-soft hover:text-brand-accent transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-cta"
              aria-label="Book free audit"
              className="cta-glow cta-pulse shrink-0 bg-brand-accent text-white font-heading font-bold text-xs uppercase tracking-[0.18em] px-7 py-4 rounded-xl transition-all duration-300 hover:opacity-90"
            >
              Free Audit →
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-[5px] cursor-pointer glass rounded-xl shrink-0"
          >
            <span
              className={`block w-5 h-0.5 rounded-full bg-brand-base transition-all duration-300 ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full bg-brand-base transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full bg-brand-base transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile fullscreen menu ── */}
      <div
        className={`fixed inset-0 bg-(--brand-dark)/98 backdrop-blur-xl z-[-1] md:hidden flex flex-col items-center justify-center gap-10 px-8 transition-all duration-500 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-heading text-2xl font-bold tracking-widest text-brand-base hover:text-brand-accent transition-colors"
          >
            {link.label}
          </a>
        ))}

        <Link
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="cta-glow w-full max-w-xs bg-brand-accent text-white font-heading font-bold text-base uppercase tracking-[0.2em] py-5 px-6 rounded-2xl text-center"
        >
          Free Audit →
        </Link>
      </div>
    </nav>
  );
}

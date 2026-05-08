"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";

export function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-100 md:hidden transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="p-4 bg-[#141018]/95 backdrop-blur-xl border-t border-white/5">
        <Link
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-glow cta-pulse flex items-center justify-center gap-2 w-full bg-brand-accent text-white font-heading font-bold py-4 rounded-xl text-base tracking-wide"
          aria-label="Claim your free audit"
        >
          🔒 Claim Your Free Audit — 4 Spots/Week
        </Link>
      </div>
    </div>
  );
}

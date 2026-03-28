"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { useScrollProgress } from "../lib/hooks/useScrollProgress";

import { Popover }         from "@/components/ui/Popover";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";

import { Ticker }      from "@/components/sections/Ticker";
import { Hero }        from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Process }     from "@/components/sections/Process";
import { PainPoints }  from "@/components/sections/PainPoints";
import { Urgency }     from "@/components/sections/Urgency";
import { About }       from "@/components/sections/About";
import { FaqAndCta }   from "@/components/sections/FaqAndCta";

/**
 * Root client component.
 * Owns page-level state: scroll progress, popover visibility, sticky CTA visibility.
 */
export default function ExeivPage() {
  const scrollProgress    = useScrollProgress();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [nearFooterCta, setNearFooterCta] = useState(false);

  // Ref forwarded to <FaqAndCta> so we can observe when it's in view
  const faqRef = useRef<HTMLElement | null>(null);

  // Show popover after 2.5 s (once per session)
  useEffect(() => {
    if (sessionStorage.getItem("exeiv_popover_seen")) return;
    const timer = setTimeout(() => setPopoverOpen(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const closePopover = useCallback(() => {
    setPopoverOpen(false);
    sessionStorage.setItem("exeiv_popover_seen", "1");
  }, []);

  // Hide sticky mobile CTA when the footer CTA section is visible
  useEffect(() => {
    if (!faqRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setNearFooterCta(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(faqRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Animated red scroll-progress bar at the top of the viewport */}
      <div
        className="scroll-prog"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 3,
          background: "#ff2a2a",
          zIndex: 10001,
          transition: "width 0.1s linear",
          width: `${scrollProgress * 100}%`,
        }}
      />

      {/* Exit-intent popover */}
      {popoverOpen && <Popover onClose={closePopover} />}

      {/* ── Page sections (top → bottom) ── */}
      <Ticker />
      <Hero />
      <SocialProof />
      <Process />
      <PainPoints />
      <Urgency />
      <About />
      <FaqAndCta ref={faqRef} />

      {/* Footer */}
      <footer
        style={{
          padding: "20px 24px",
          textAlign: "center",
          borderTop: "1px solid #2a2a2a",
          color: "#444",
          fontSize: "0.85rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        © 2026 EXEIV. Operating Worldwide.
      </footer>

      {/* Mobile sticky CTA — hidden when footer CTA is visible */}
      <StickyMobileCta hidden={nearFooterCta} />
    </>
  );
}

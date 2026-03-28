"use client";

import { CALENDLY_URL } from "@/lib/constants";

interface StickyMobileCtaProps {
  /** When true, the CTA fades out (user is near the footer CTA). */
  hidden: boolean;
}

/**
 * Fixed bottom bar shown only on mobile.
 * Fades out when the footer CTA section is visible to avoid duplication.
 */
export function StickyMobileCta({ hidden }: StickyMobileCtaProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9000,
        padding: "12px 16px",
        background: "linear-gradient(to top, #080808 60%, transparent)",
        opacity: hidden ? 0 : 1,
        transition: "opacity 0.3s",
        pointerEvents: hidden ? "none" : "auto",
      }}
      // Tailwind: hide on md+ screens
      className="md:hidden"
    >
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-sticky font-condensed"
        style={{
          width: "100%",
          padding: 16,
          background: "#ff2a2a",
          color: "#fff",
          fontWeight: 900,
          textTransform: "uppercase",
          fontSize: "1rem",
          letterSpacing: "0.05em",
          borderRadius: 6,
        }}
      >
        ⚡ Book Free UI Teardown
      </a>
    </div>
  );
}

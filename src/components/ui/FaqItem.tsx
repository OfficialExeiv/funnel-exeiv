"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface FaqItemProps {
  q: string;
  a: string;
  delay?: number;
}

/**
 * Accordion-style FAQ item with red accent border when open.
 */
export function FaqItem({ q, a, delay = 0 }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        style={{
          background: "#111111",
          border: `1px solid ${open ? "rgba(255,42,42,0.35)" : "#2a2a2a"}`,
          borderRadius: 6,
          transition: "border-color 0.3s",
          boxShadow: open ? "0 0 30px rgba(255,42,42,0.06)" : "none",
        }}
      >
        {/* Question toggle */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          style={{
            width: "100%",
            textAlign: "left",
            padding: "18px 52px 18px 24px",
            fontWeight: 700,
            color: "#ffffff",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            position: "relative",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {q}
          <span
            style={{
              position: "absolute",
              right: 18,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "1.5rem",
              color: "#ff2a2a",
            }}
          >
            {open ? "−" : "+"}
          </span>
        </button>

        {/* Answer */}
        {open && (
          <p
            style={{
              padding: "0 24px 20px",
              color: "#d0d0d0",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            {a}
          </p>
        )}
      </div>
    </Reveal>
  );
}

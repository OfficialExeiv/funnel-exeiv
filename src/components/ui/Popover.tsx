"use client";

import { useCallback, useEffect } from "react";
import { CALENDLY_URL } from "@/lib/constants";

interface PopoverProps {
  onClose: () => void;
}

/**
 * Exit-intent style modal that offers a free UI Teardown session.
 * Closes on overlay click, × button, or Escape key.
 */
export function Popover({ onClose }: PopoverProps) {
  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="popover-overlay-anim"
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(4px)",
          zIndex: 10002,
        }}
      />

      {/* Modal */}
      <div
        className="popover-modal-anim"
        role="dialog"
        aria-modal="true"
        aria-label="Free UI Teardown offer"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 10003,
          width: "min(92vw, 520px)",
          background: "#111",
          border: "1px solid rgba(255,42,42,0.4)",
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 0 80px rgba(255,42,42,0.2), 0 0 0 1px rgba(255,42,42,0.1)",
        }}
      >
        {/* Animated top bar */}
        <div className="popover-bar" />

        <div style={{ padding: "28px 32px" }}>
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#aaa",
              fontSize: "1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ×
          </button>

          {/* Live badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,42,42,0.1)",
              border: "1px solid rgba(255,42,42,0.35)",
              color: "#ff2a2a",
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
              padding: "5px 12px",
              borderRadius: 99,
              marginBottom: 16,
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            <span
              className="anim-blink"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#ff2a2a",
                display: "inline-block",
              }}
            />
            Limited Slots This Week
          </div>

          <h2
            className="font-condensed"
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 8,
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
            }}
          >
            Wait — Before You Explore…
          </h2>

          <p style={{ color: "#fff", fontWeight: 600, marginBottom: 6, fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}>
            Get a FREE 30-Min UI Teardown
          </p>

          <p style={{ color: "#909090", fontSize: "0.875rem", marginBottom: 20, lineHeight: 1.6 }}>
            We'll personally audit your current website, show you exactly where you're leaking revenue,
            and hand you an actionable fix — at zero cost, zero obligation.
          </p>

          {/* Benefits list */}
          <ul style={{ listStyle: "none", marginBottom: 24, display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              "Identify conversion-killing design mistakes",
              "Get a tech stack & performance diagnosis",
              "Leave with a prioritised, actionable roadmap",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.875rem", color: "#ccc" }}>
                <span style={{ color: "#ff2a2a", fontWeight: 900, flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Value */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 20 }}>
            <span style={{ textDecoration: "line-through", color: "#909090", fontSize: "1rem" }}>$299 Value</span>
            <span className="font-condensed" style={{ fontWeight: 900, color: "#ff2a2a", fontSize: "1.5rem" }}>→ $0 FREE</span>
          </div>

          {/* CTA */}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="popover-cta-btn"
            style={{
              padding: 16,
              background: "#ff2a2a",
              color: "#fff",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "1.1rem",
              textTransform: "uppercase",
              letterSpacing: 1,
              borderRadius: 6,
              transition: "background 0.2s, transform 0.2s",
            }}
          >
            ⚡ Claim My Free UI Teardown
          </a>

          <p style={{ textAlign: "center", color: "#555", fontSize: "0.75rem", marginTop: 12 }}>
            No credit card · No pressure · 30 minutes only
          </p>

          {/* Soft decline */}
          <button
            onClick={onClose}
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              color: "#444",
              fontSize: "0.75rem",
              marginTop: 8,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px 0",
            }}
          >
            No thanks, I'll leave money on the table
          </button>
        </div>
      </div>
    </>
  );
}

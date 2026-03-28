import { forwardRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { FaqItem } from "@/components/ui/FaqItem";
import { CALENDLY_URL, FAQ_ITEMS } from "@/lib/constants";

/**
 * FAQ accordion + final conversion CTA box.
 * Forwarded ref lets the parent observe this section to hide the sticky mobile CTA.
 */
export const FaqAndCta = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="book"
      aria-label="Frequently asked questions and booking"
      style={{
        padding: "clamp(3.5rem, 6vw, 5rem) 0",
        borderTop: "1px solid #2a2a2a",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>

        {/* FAQ heading */}
        <Reveal>
          <h2
            className="font-condensed"
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: 1.1,
              marginBottom: 40,
              fontSize: "clamp(1.8rem, 4.5vw, 3.4rem)",
              color: "#ffffff",
            }}
          >
            FAQ: You've Got Qs. I've Got A's.
          </h2>
        </Reveal>

        {/* FAQ items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 64 }}>
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} delay={i * 0.1} />
          ))}
        </div>

        {/* Final CTA box */}
        <Reveal>
          <div
            className="cta-glow"
            style={{
              position: "relative",
              background: "#111111",
              border: "1px solid rgba(255,42,42,0.35)",
              borderRadius: 12,
              padding: "clamp(28px, 5vw, 48px)",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <h3
              className="font-condensed"
              style={{
                fontWeight: 900,
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: 16,
                fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
              }}
            >
              Stop Guessing. Start Scaling.
            </h3>

            {/* Scarcity badge */}
            <div
              className="urgency-pulse"
              style={{
                display: "inline-block",
                border: "1px solid rgba(255,42,42,0.35)",
                color: "#ff2a2a",
                fontWeight: 700,
                fontSize: "0.85rem",
                padding: "6px 16px",
                borderRadius: 2,
                marginBottom: 24,
              }}
            >
              ⚠ HURRY — 80% of our sprint capacity this month is booked
            </div>

            {/* Price */}
            <p style={{ marginBottom: 24 }}>
              <span style={{ textDecoration: "line-through", color: "#909090", fontSize: "1.1rem" }}>
                $299 Value
              </span>
              <span
                className="font-condensed"
                style={{
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  letterSpacing: "-0.01em",
                  marginLeft: 12,
                }}
              >
                → $0 FREE
              </span>
            </p>

            {/* Primary CTA */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fire font-condensed"
              style={{
                width: "100%",
                maxWidth: 440,
                padding: "24px 32px",
                background: "#ff2a2a",
                color: "#fff",
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                letterSpacing: "0.05em",
                borderRadius: 6,
                margin: "0 auto",
              }}
            >
              🗓 Schedule My Audit Now
            </a>

            <p style={{ color: "#909090", fontSize: "0.8rem", marginTop: 12 }}>
              Opens Calendly · Pick your slot in 30 seconds · No commitment
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
});

FaqAndCta.displayName = "FaqAndCta";

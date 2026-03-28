import { Reveal } from "@/components/ui/Reveal";
import { CALENDLY_URL, PAIN_POINTS } from "@/lib/constants";

/**
 * Agitation section: lists founder pain points to build emotional resonance.
 */
export function PainPoints() {
  return (
    <section
      aria-label="Common founder frustrations we solve"
      style={{
        padding: "clamp(3.5rem, 6vw, 5rem) 0",
        borderTop: "1px solid #2a2a2a",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>

        <Reveal>
          <h2
            className="font-condensed"
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginBottom: 40,
              fontSize: "clamp(1.8rem, 4.5vw, 3.4rem)",
              color: "#ffffff",
            }}
          >
            If You're a Founder or Agency Owner, You've Probably Faced These
            Frustrations…
          </h2>
        </Reveal>

        {/* Pain point list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {PAIN_POINTS.map((item, i) => (
            <Reveal key={i} delay={(i % 4) * 0.08}>
              <div
                className="pain-item"
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "18px 20px",
                  background: "rgba(255,42,42,0.03)",
                  border: "1px solid transparent",
                  borderRadius: 6,
                }}
              >
                <span
                  style={{
                    color: "#ff2a2a",
                    fontWeight: 900,
                    fontSize: "1.1rem",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  ✗
                </span>
                <span
                  style={{
                    color: "#909090",
                    fontSize: "clamp(0.85rem, 2vw, 1rem)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.before}
                  <strong style={{ color: "#ffffff" }}>{item.bold}</strong>
                  {item.after}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <p
              className="font-condensed"
              style={{
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                color: "#fff",
                marginBottom: 24,
              }}
            >
              🫵 If you fit any of the above — this is for you.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-electric font-condensed"
              style={{
                width: "100%",
                maxWidth: 520,
                padding: "20px 32px",
                background: "#ff2a2a",
                color: "#fff",
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                letterSpacing: "0.05em",
                borderRadius: 6,
                margin: "0 auto",
              }}
            >
              Yes, I Want My Free UI Teardown
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

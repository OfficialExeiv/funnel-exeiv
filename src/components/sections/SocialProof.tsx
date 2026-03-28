import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { CALENDLY_URL, STATS, CASE_STUDIES } from "@/lib/constants";

/**
 * Stats, case studies, and a mid-page CTA to build trust.
 */
export function SocialProof() {
  return (
    <section
      aria-label="Social proof — stats and case studies"
      style={{
        padding: "clamp(3.5rem, 6vw, 5rem) 0",
        borderTop: "1px solid #2a2a2a",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>

        {/* Animated stat counters */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px 40px",
            marginBottom: 64,
          }}
        >
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div style={{ textAlign: "center", minWidth: 80 }}>
                <Counter target={stat.target} suffix={stat.suffix} />
                <div
                  style={{
                    color: "#909090",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Section heading */}
        <Reveal>
          <h2
            className="font-condensed"
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: 1.1,
              marginBottom: 12,
              fontSize: "clamp(1.8rem, 4.5vw, 3.4rem)",
              color: "#ffffff",
            }}
          >
            Here's Proof
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            style={{
              textAlign: "center",
              color: "#fff",
              marginBottom: 32,
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            }}
          >
            Ambitious founders have already scaled their operations using EXEIV:
          </p>
        </Reveal>

        {/* Case studies */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.name} delay={i * 0.1}>
              <div
                className="case-item"
                style={{
                  background: "#111111",
                  border: "1px solid #2a2a2a",
                  borderRadius: 6,
                  padding: "24px 32px",
                }}
              >
                <strong
                  className="font-condensed"
                  style={{
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                    color: "#fff",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  {study.name}
                </strong>
                <span style={{ color: "#909090", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
                  {study.desc}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mid-page CTA */}
        <Reveal>
          <p
            style={{
              textAlign: "center",
              color: "#909090",
              marginBottom: 20,
              fontSize: "clamp(0.85rem, 2vw, 1rem)",
            }}
          >
            Your competitors are already turning their digital presence into a
            client-closing machine — don't be the last one left behind.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
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
              display: "block",
            }}
          >
            Book My 1:1 "UI Teardown" Now
          </a>
          <p
            style={{
              textAlign: "center",
              color: "#909090",
              fontSize: "0.8rem",
              marginTop: 8,
            }}
          >
            Limited free slots this week — secure yours before they're gone.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/ui/Reveal";
import { CALENDLY_URL, PROCESS_STEPS } from "@/lib/constants";

/**
 * 3-step "How It Works" section explaining EXEIV's delivery process.
 */
export function Process() {
  return (
    <section
      aria-label="Our 3-step delivery process"
      style={{
        padding: "clamp(3.5rem, 6vw, 5rem) 0",
        background: "#050505",
        borderTop: "1px solid #2a2a2a",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        {/* Label */}
        <Reveal>
          <span
            style={{
              display: "inline-block",
              color: "#ff2a2a",
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              border: "1px solid rgba(255,42,42,0.35)",
              padding: "4px 12px",
              borderRadius: 2,
              background: "rgba(255,42,42,0.08)",
              marginBottom: 20,
            }}
          >
            How It Works
          </span>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.05}>
          <h2
            className="font-condensed"
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginBottom: 12,
              fontSize: "clamp(1.8rem, 4.5vw, 3.4rem)",
              color: "#ffffff",
            }}
          >
            Build Your Platform{" "}
            <span style={{ color: "#ff2a2a" }}>Without Doing the Hard Work</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            style={{
              color: "#909090",
              maxWidth: 520,
              margin: "0 auto 12px",
              fontSize: "clamp(0.85rem, 2vw, 1rem)",
            }}
          >
            Built for busy founders who want massive digital authority — without months
            managing freelancers or debugging code.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p
            className="font-condensed"
            style={{
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              color: "#fff",
              marginBottom: 40,
            }}
          >
            You cast the vision. We engineer the reality.
          </p>
        </Reveal>

        {/* Step cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            textAlign: "left",
          }}
        >
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <div
                className="process-card"
                style={{
                  background: "#111111",
                  border: "1px solid #2a2a2a",
                  borderRadius: 6,
                  padding: 28,
                  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,42,42,0.35)";
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2a2a2a";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Large step number */}
                <div
                  className="font-condensed"
                  style={{
                    fontWeight: 900,
                    fontSize: "3.5rem",
                    color: "#ff2a2a",
                    opacity: 0.25,
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {step.n}
                </div>

                <h3
                  className="font-condensed"
                  style={{
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                    color: "#ffffff",
                    marginBottom: 8,
                  }}
                >
                  {step.title}
                </h3>

                <p style={{ color: "#909090", fontSize: "0.85rem", lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.1} className="mt-10">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fire font-condensed"
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
              marginTop: 40,
            }}
          >
            Yes, I Want My Free UI Teardown
          </a>
        </Reveal>
      </div>
    </section>
  );
}

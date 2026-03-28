import { Reveal } from "@/components/ui/Reveal";

/**
 * Short brand story / "why EXEIV" section.
 */
export function About() {
  return (
    <section
      id="about"
      aria-label="About EXEIV"
      style={{
        padding: "clamp(3.5rem, 6vw, 5rem) 0",
        borderTop: "1px solid #2a2a2a",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>

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
            About EXEIV
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="font-condensed"
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginBottom: 24,
              fontSize: "clamp(1.8rem, 4.5vw, 3.4rem)",
              color: "#ffffff",
            }}
          >
            The Tech Partner Behind the Most Ambitious Digital Platforms
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            style={{
              color: "#909090",
              marginBottom: 16,
              fontSize: "clamp(0.85rem, 2vw, 1rem)",
              lineHeight: 1.7,
            }}
          >
            Before we built EXEIV, we saw countless founders getting burned by agencies
            that promised the world but delivered slow, unscalable WordPress templates.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p
            className="font-condensed"
            style={{
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              color: "#fff",
              marginBottom: 16,
            }}
          >
            We don't just build websites. We engineer systems that make you impossible to ignore.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            style={{
              color: "#909090",
              fontSize: "clamp(0.85rem, 2vw, 1rem)",
              lineHeight: 1.7,
            }}
          >
            EXEIV is a premium growth partner working at the intersection of brand strategy,
            visual design, and rigorous engineering. Every line of code and every design choice
            is backed by a focus on conversions — not guesswork.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

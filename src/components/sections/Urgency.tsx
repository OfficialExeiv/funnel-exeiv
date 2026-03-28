import { Reveal } from "@/components/ui/Reveal";

/**
 * Full-bleed red urgency block. No CTA — pure agitation copy.
 */
export function Urgency() {
  return (
    <div
      role="region"
      aria-label="Urgency — why you should act now"
      style={{
        position: "relative",
        background: "#ff2a2a",
        padding: "clamp(3.5rem, 6vw, 5rem) 0",
        overflow: "hidden",
        zIndex: 10,
      }}
    >
      {/* Decorative background watermark */}
      <span className="urgency-watermark">URGENT</span>

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Reveal>
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
            Every Day You Wait… You're Losing More Than Just Traffic.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            style={{
              color: "#ffffff",
              marginBottom: 16,
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              lineHeight: 1.7,
            }}
          >
            Let's be honest — you're not struggling because you lack industry expertise.
            You're struggling because the modern market rewards clarity, speed, and trust.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            style={{
              color: "#ffffff",
              marginBottom: 24,
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              lineHeight: 1.7,
            }}
          >
            While you're busy delivering for clients and duct-taping your tech stack,
            your competitors are building authority and signing high-paying clients simply
            because their digital infrastructure looks and feels premium.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p
            className="font-condensed"
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
              color: "#ffffff",
            }}
          >
            In today's world, a bad UI isn't just ugly — it's expensive.
            <br />
            Visibility = Credibility = Clients.
          </p>
        </Reveal>
      </div>
    </div>
  );
}

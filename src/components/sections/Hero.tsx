import { Reveal } from "@/components/ui/Reveal";
import { CALENDLY_URL, TEAM } from "@/lib/constants";

/**
 * Above-the-fold hero: headline, sub-copy, team authority cards, and primary CTA.
 */
export function Hero() {
  return (
    <section
      aria-label="Hero — Production-Grade Web Platforms in 30 Days"
      style={{
        paddingTop: "clamp(4rem, 8vw, 7rem)",
        paddingBottom: "clamp(3.5rem, 6vw, 5rem)",
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
        {/* Live badge */}
        <div
          className="anim-fadedown"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,42,42,0.08)",
            border: "1px solid rgba(255,42,42,0.35)",
            padding: "8px 16px",
            borderRadius: 999,
            color: "#ff2a2a",
            fontSize: "0.85rem",
            fontWeight: 600,
            marginBottom: 28,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            className="anim-blink"
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#ff2a2a",
              flexShrink: 0,
            }}
          />
          For Ambitious Founders, Agencies &amp; SaaS Companies
        </div>

        {/* Main headline */}
        <h1
          className="anim-hero1 font-condensed"
          style={{
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            marginBottom: 24,
            fontSize: "clamp(2rem, 7vw, 5rem)",
            color: "#fff",
          }}
        >
          Get a Production-Grade,{" "}
          <span style={{ display: "block" }}>High-Converting Web Platform</span>
          in{" "}
          <span style={{ color: "#ff2a2a" }}>30 Days Guaranteed</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="anim-hero2"
          style={{
            fontWeight: 600,
            color: "#fff",
            maxWidth: 560,
            margin: "0 auto 12px",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          }}
        >
          ...or you don't pay a single dollar until you absolutely love it.
        </p>

        <p
          style={{
            color: "#909090",
            maxWidth: 480,
            margin: "0 auto 32px",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
          }}
        >
          Our "Digital Architecture" method will make you the undeniable, most
          trusted authority in your market.
        </p>

        {/* Team authority cards */}
        <Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
              marginBottom: 32,
              textAlign: "left",
            }}
          >
            {TEAM.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </div>
        </Reveal>

        {/* Social proof line */}
        <Reveal>
          <p
            style={{
              color: "#fff",
              maxWidth: 560,
              margin: "0 auto 32px",
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              lineHeight: 1.6,
            }}
          >
            Stop losing high-ticket clients because your website looks outdated or your
            software is broken. Start using digital infrastructure that guarantees trust,
            performance, and real conversions — not just pretty pixels.
          </p>
        </Reveal>

        {/* Primary CTA */}
        <Reveal>
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
            }}
          >
            ⚡ Yes, I Want My Free UI Teardown &amp; Strategy Call
          </a>
          <p style={{ color: "#909090", fontSize: "0.8rem", marginTop: 8 }}>
            A 30-minute session to uncover the bottlenecks leaking revenue on your
            current site.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Team Card ───────────────────────────────────────────────────────────────

interface TeamCardProps {
  name: string;
  role: string;
  creds: string[];
}

function TeamCard({ name, role, creds }: TeamCardProps) {
  return (
    <div
      className="auth-card"
      style={{
        background: "#111111",
        border: "1px solid #2a2a2a",
        borderRadius: 6,
        padding: "28px 32px",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,42,42,0.35)";
        e.currentTarget.style.boxShadow = "0 0 40px rgba(255,42,42,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#2a2a2a";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <h3
        className="font-condensed"
        style={{
          fontWeight: 900,
          textTransform: "uppercase",
          fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
          color: "#fff",
        }}
      >
        {name}
      </h3>
      <p style={{ color: "#ff2a2a", fontWeight: 700, fontSize: "0.8rem", marginTop: 4, marginBottom: 16 }}>
        {role}
      </p>
      <p style={{ color: "#909090", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 12 }}>
        Credentials:
      </p>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
        {creds.map((cred) => (
          <li key={cred} style={{ display: "flex", gap: 8, color: "#ccc", fontSize: "0.85rem", fontWeight: 500 }}>
            <span style={{ color: "#ff2a2a", fontWeight: 900, flexShrink: 0 }}>✓</span>
            {cred}
          </li>
        ))}
      </ul>
    </div>
  );
}

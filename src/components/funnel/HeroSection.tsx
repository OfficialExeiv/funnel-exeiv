import Link from "next/link";
import { CALENDLY_URL, HERO_STATS } from "@/lib/constants";
import { CounterStat } from "@/components/funnel/CounterStat";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
      aria-label="Hero"
    >
      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid opacity-100" aria-hidden="true" />

      {/* Radial vignette to keep grid subtle at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, #141018 90%)",
        }}
        aria-hidden="true"
      />

      {/* Accent glow blob */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(115,60,151,0.12)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center pt-32 pb-28 md:pt-44 md:pb-36">
        {/* Status pill */}
        <div className="anim-reveal anim-delay-1 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-(--brand-accent)/25 bg-(--brand-accent)/5 text-brand-soft text-xs font-medium tracking-widest uppercase mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
          </span>
          Engineering Premium Solutions for Founders
        </div>

        {/* H1 */}
        <h1 className="anim-reveal anim-delay-2 font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-brand-base leading-[1.02] tracking-tight mb-8">
          Your Business Runs.
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #c084fc 0%, #733c97 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Your Tech Is Bleeding It Dry.
          </span>
        </h1>

        {/* Subhead */}
        <p className="anim-reveal anim-delay-3 text-lg md:text-xl text-brand-soft max-w-2xl mx-auto leading-relaxed font-sans mb-12">
          We architect custom tech stacks that eliminate revenue leaks, automate
          broken workflows, and make your operation run like a machine.
        </p>

        {/* CTA buttons */}
        <div className="anim-reveal anim-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-primary-cta"
            aria-label="Claim your free audit"
            className="cta-glow cta-pulse group relative bg-brand-accent text-white font-heading font-bold px-10 py-5 rounded-2xl transition-all duration-300 tracking-wide text-lg overflow-hidden"
          >
            <span className="relative z-10">Claim Your Free Audit</span>
            <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>

          <a
            href="#how-it-works"
            id="hero-secondary-cta"
            className="glass border border-white/10 text-brand-base hover:border-(--brand-accent)/30 font-heading font-semibold px-10 py-5 rounded-2xl transition-all duration-300 text-lg"
          >
            See How It Works ↓
          </a>
        </div>

        {/* Trust bar */}
        <div className="anim-reveal anim-delay-4 mb-16 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-brand-soft text-xs font-sans tracking-widest uppercase">
          {[
            "220+ Product Shipped",
            "0 Audit Cost",
            "No Pitch Pressure",
            "Trusted by 7-Figure Founders",
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <svg
                className="w-3.5 h-3.5 text-brand-accent shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </span>
          ))}
        </div>

        {/* Counter stats */}
        <div className="anim-reveal anim-delay-5 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {HERO_STATS.map((s) => (
            <CounterStat
              key={s.label}
              target={s.target}
              suffix={s.suffix}
              prefix={s.prefix}
              label={s.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

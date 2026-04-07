import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--brand-dark)]">
      {/* Animated gradient mesh background */}
      <div className="hero-mesh" aria-hidden="true" />
      
      {/* Subtle radial overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--brand-dark)_100%)] opacity-60 z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Floating Tag */}
        <div className="anim-reveal anim-delay-1 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/5 text-[var(--brand-soft)] text-xs font-medium tracking-widest uppercase mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-accent)]"></span>
          </span>
          Engineering Premium Solutions
        </div>

        {/* Main headline */}
        <h1 className="anim-reveal anim-delay-1 font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--brand-base)] leading-[1.05] tracking-tight mb-8">
          Your business works.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-accent)] via-[#ff6b6b] to-[var(--brand-soft)]">
            Your tech is holding it back.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="anim-reveal anim-delay-2 text-lg md:text-xl text-[var(--brand-base)]/60 max-w-2xl mx-auto leading-relaxed font-sans mb-12">
          Disconnected tools and broken software are silent profit killers. 
          We architect custom tech stacks that scale as fast as your ambition.
        </p>

        {/* CTA buttons */}
        <div className="anim-reveal anim-delay-3 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-glow group relative bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white font-heading font-semibold px-10 py-5 rounded-2xl transition-all duration-300 tracking-wide text-lg shadow-lg shadow-[var(--brand-accent)]/20 overflow-hidden"
          >
            <span className="relative z-10">Book Free Bottleneck Audit</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Link>

          <a
            href="#how-it-works"
            className="group glass border border-white/10 text-[var(--brand-base)] hover:bg-white/5 font-heading font-medium px-10 py-5 rounded-2xl transition-all duration-300 text-lg"
          >
            Explore Workflow
          </a>
        </div>

        {/* Trust bar */}
        <div className="anim-reveal anim-delay-4 mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-[var(--brand-soft)]/50 font-sans tracking-widest uppercase">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[var(--brand-accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            $0 Cost Audit
          </span>
          <span className="w-1 h-1 rounded-full bg-white/10 hidden md:block" />
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[var(--brand-accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            No Pitch Pressure
          </span>
          <span className="w-1 h-1 rounded-full bg-white/10 hidden md:block" />
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[var(--brand-accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Expert Led
          </span>
        </div>
      </div>
    </section>
  );
}


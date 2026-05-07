import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";

export function FinalCTASection() {
  return (
    <section className="relative py-24 md:py-40 bg-[var(--brand-dark)] overflow-hidden">
      {/* Large glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(115,60,151,0.15)" }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10 text-center">
        <div className="glass-accent p-10 md:p-20 rounded-[2.5rem] relative overflow-hidden group">
          {/* Shimmer on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--brand-accent)]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

          <span className="text-[var(--brand-accent)] text-xs uppercase tracking-widest font-bold font-heading block mb-8">
            Ready to Grow?
          </span>

          <h2 className="font-heading text-4xl md:text-6xl font-bold text-[var(--brand-base)] mb-8 leading-tight">
            One Custom Tool Away
            <br />
            <span className="text-[var(--brand-accent)]">From Your Next Level.</span>
          </h2>

          <p className="text-[var(--brand-soft)] font-sans text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            Most founders wait too long. The audit is free.{" "}
            <span className="text-[var(--brand-base)]">
              The opportunity cost isn&apos;t.
            </span>
          </p>

          <div className="flex flex-col items-center gap-6">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="final-cta"
              aria-label="Book your free audit now"
              className="cta-glow cta-pulse bg-[var(--brand-accent)] text-white font-heading font-bold px-12 py-6 rounded-2xl hover:opacity-90 transition-opacity tracking-wide text-xl md:text-2xl"
            >
              Book Your Free Audit Now →
            </Link>

            <p className="text-[var(--brand-soft)]/50 font-sans text-sm">
              No payment. No pressure. No pitch. Just answers.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-2 text-[var(--brand-soft)]/40 text-xs uppercase tracking-widest font-heading">
              {["Secure", "Confidential", "Expert-Led", "4 Spots/Week"].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]/50 inline-block" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

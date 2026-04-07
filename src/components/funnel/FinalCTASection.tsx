import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";

export function FinalCTASection() {
  return (
    <section className="relative py-24 md:py-40 bg-[var(--brand-dark)] overflow-hidden">
      {/* Intense background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--brand-accent)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10 text-center">
        <div className="glass-accent p-8 md:p-16 lg:p-24 rounded-[2rem] md:rounded-[3rem] border-white/10 relative overflow-hidden group">
          {/* Subtle animated border */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--brand-accent)]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-[var(--brand-base)] mb-8 leading-tight">
            Ready to fix your <br />
            <span className="text-[var(--brand-accent)]">revenue leaks?</span>
          </h2>
          
          <p className="text-[var(--brand-base)]/60 font-sans text-xl max-w-2xl mx-auto mb-12">
            Most businesses are one custom tool away from their next level. 
            Claim your free audit and find out exactly what yours is.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-glow bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white font-heading font-bold px-12 py-6 rounded-2xl transition-all duration-300 tracking-wide text-2xl shadow-2xl shadow-[var(--brand-accent)]/40 hover:scale-105"
            >
              Book Your Free Audit Now
            </Link>
            
            <div className="flex items-center gap-8 text-[var(--brand-soft)]/40 text-sm font-medium uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Limited Spots
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Zero Risk
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


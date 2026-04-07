import { CASE_STUDIES } from "@/lib/constants";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative py-24 md:py-32 bg-[var(--brand-dark)] overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,42,42,0.06)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-base)] mb-6">
              Proven <span className="text-[var(--brand-accent)]">Results.</span>
            </h2>
            <p className="text-[var(--brand-base)]/50 font-sans text-lg max-w-xl mx-auto md:mx-0">
              We don&apos;t just write code. We build the engines that power multi-million dollar operations.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="px-5 py-2 rounded-full border border-white/10 text-[var(--brand-soft)]/60 text-sm font-medium uppercase tracking-widest">
              Built by <span className="text-[var(--brand-accent)]">EXEIV</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, i) => (
            <div
              key={i}
              className="card-hover glass p-8 md:p-10 lg:p-12 rounded-[2.5rem] flex flex-col h-full group border-white/5 hover:border-[var(--brand-accent)]/20 transition-all duration-500"
            >
              <div className="mb-8">
                <span className="inline-block px-3 py-1 rounded-lg bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-xs font-bold uppercase tracking-wider mb-6">
                  {study.tag}
                </span>
                <h3 className="font-heading text-2xl font-bold text-[var(--brand-base)] leading-tight group-hover:text-[var(--brand-accent)] transition-colors">
                  {study.headline}
                </h3>
              </div>

              <ul className="space-y-5 mb-8">
                {study.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-4 group/item">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] shrink-0 shadow-[0_0_8px_rgba(255,42,42,0.5)] group-hover/item:scale-125 transition-transform" />
                    <p className="text-[var(--brand-base)]/60 font-sans leading-relaxed group-hover/item:text-[var(--brand-base)]/80 transition-colors">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[var(--brand-accent)] text-xs font-heading font-bold uppercase tracking-wider opacity-60">
                  Engineered Performance
                </span>
                <svg className="w-5 h-5 text-[var(--brand-accent)]/40 group-hover:text-[var(--brand-accent)] transition-colors transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


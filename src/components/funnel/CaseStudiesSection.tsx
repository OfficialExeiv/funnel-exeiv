import { CASE_STUDIES } from "@/lib/constants";

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="relative py-24 md:py-32 bg-brand-dark overflow-hidden"
    >
      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, rgba(115,60,151,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-brand-accent text-xs uppercase tracking-widest font-bold font-heading block mb-4">
              Proof Section
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-base mb-4">
              What EXEIV-Engineered{" "}
              <span className="text-brand-accent">Actually Looks Like</span>
            </h2>
            <p className="text-brand-soft font-sans text-lg max-w-xl">
              We don&apos;t just write code. We build the engines powering
              multi-million dollar operations.
            </p>
          </div>
          <div className="shrink-0">
            <div className="px-5 py-2 rounded-full border border-white/8 text-brand-soft text-xs font-medium uppercase tracking-widest">
              Built by <span className="text-brand-accent">EXEIV</span>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((study, i) => (
            <div
              key={i}
              className={`card-hover glass group p-8 md:p-10 rounded-[2rem] flex flex-col border-white/5 hover:border-(--brand-accent)/20 transition-all duration-500 ${
                // Make last card (odd total) span full width on md
                i === CASE_STUDIES.length - 1 && CASE_STUDIES.length % 2 !== 0
                  ? "md:col-span-2 md:max-w-2xl md:mx-auto"
                  : ""
              }`}
            >
              {/* Tag + stat row */}
              <div className="flex items-start justify-between mb-6 gap-4">
                <span className="inline-block px-3 py-1 rounded-lg bg-(--brand-accent)/10 text-brand-accent text-xs font-bold uppercase tracking-wider">
                  {study.tag}
                </span>
                <span className="glass px-3 py-1 rounded-lg text-brand-accent text-xs font-bold font-heading shrink-0">
                  {study.stat}
                </span>
              </div>

              <h3 className="font-heading text-xl md:text-2xl font-bold text-brand-base leading-tight mb-6 group-hover:text-brand-accent transition-colors duration-300">
                {study.headline}
              </h3>

              <ul className="space-y-4 mb-8 flex-1">
                {study.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 shadow-[0_0_8px_rgba(115,60,151,0.6)]" />
                    <p className="text-brand-soft font-sans text-sm leading-relaxed">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                <span className="text-(--brand-accent)/60 text-xs font-heading font-bold uppercase tracking-wider">
                  Engineered Performance
                </span>
                <svg
                  className="w-5 h-5 text-(--brand-accent)/40 group-hover:text-brand-accent group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

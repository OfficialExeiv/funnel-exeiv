import { PAIN_POINTS } from "@/lib/constants";

export function PainSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--brand-dark)] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--brand-base)] mb-6">
            Tech shouldn&apos;t be your <span className="text-[var(--brand-accent)]">bottleneck.</span>
          </h2>
          <p className="text-[var(--brand-base)]/50 font-sans text-lg max-w-2xl mx-auto">
            If any of these sound familiar, you&apos;re leaving money on the table every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PAIN_POINTS.map((point, i) => (
            <div
              key={i}
              className="card-hover glass group p-6 md:p-8 rounded-3xl relative overflow-hidden min-h-[160px]"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--brand-accent)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[var(--brand-accent)]/30 transition-colors">
                  <svg className="w-5 h-5 text-[var(--brand-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <p className="text-[var(--brand-base)]/70 font-sans text-[16px] leading-relaxed group-hover:text-[var(--brand-base)] transition-colors">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[var(--brand-soft)]/80 font-medium">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Stop the leaks. Start the audit.
          </div>
        </div>
      </div>
    </section>
  );
}


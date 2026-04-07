import { PROCESS_STEPS } from "@/lib/constants";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-[var(--brand-dark)]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-base)] mb-6">
            The <span className="text-[var(--brand-accent)]">Process.</span>
          </h2>
          <p className="text-[var(--brand-base)]/50 font-sans text-lg max-w-2xl mx-auto">
            From audit to execution, we keep it simple, transparent, and focused on your ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--brand-accent)]/20 to-transparent -translate-y-1/2" />

          {PROCESS_STEPS.map((step, i) => (
            <div key={step.n} className="relative group">
              <div className="card-hover glass p-8 md:p-10 rounded-[2.5rem] relative z-10 h-full flex flex-col items-center text-center">
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full bg-[var(--brand-dark)] border-2 border-[var(--brand-accent)] flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,42,42,0.3)] transition-all duration-300 group-hover:scale-110">
                  <span className="font-heading text-xl font-bold text-[var(--brand-base)]">
                    {step.n}
                  </span>
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-[var(--brand-base)] mb-4 group-hover:text-[var(--brand-accent)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[var(--brand-base)]/60 font-sans text-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Mobile Connector */}
              {i !== PROCESS_STEPS.length - 1 && (
                <div className="lg:hidden w-px h-12 bg-gradient-to-b from-[var(--brand-accent)]/30 to-transparent mx-auto mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


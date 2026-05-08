import { PROCESS_STEPS } from "@/lib/constants";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-brand-accent text-xs uppercase tracking-widest font-bold font-heading block mb-4">
            The Process
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-base mb-5">
            From Chaos to Clarity{" "}
            <span className="text-brand-accent">in 3 Steps</span>
          </h2>
          <p className="text-brand-soft font-sans text-lg max-w-xl mx-auto">
            From audit to execution — simple, transparent, and focused on your ROI.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-px bg-linear-to-r from-transparent via-(--brand-accent)/20 to-transparent pointer-events-none" />

          {PROCESS_STEPS.map((step, i) => (
            <div key={step.n} className="relative group">
              <div className="card-hover glass p-8 md:p-10 rounded-[2rem] h-full flex flex-col items-center text-center relative z-10">
                {/* Step number */}
                <div className="w-16 h-16 rounded-full bg-brand-dark border-2 border-brand-accent flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(115,60,151,0.25)] group-hover:shadow-[0_0_32px_rgba(115,60,151,0.45)] transition-shadow duration-300">
                  <span className="font-heading text-xl font-bold text-brand-accent">
                    {step.n}
                  </span>
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-bold text-brand-base mb-4 group-hover:text-brand-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-brand-soft font-sans text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Mobile connector */}
              {i !== PROCESS_STEPS.length - 1 && (
                <div className="lg:hidden w-px h-10 bg-linear-to-b from-(--brand-accent)/30 to-transparent mx-auto mt-4" />
              )}
            </div>
          ))}
        </div>

        {/* Closing quote */}
        <div className="mt-16 text-center">
          <p className="text-brand-soft font-sans text-base md:text-lg italic max-w-xl mx-auto">
            &ldquo;Most calls end with a founder saying{" "}
            <span className="text-brand-base not-italic font-semibold">
              &lsquo;I wish I did this 6 months ago.&rsquo;
            </span>
            &rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

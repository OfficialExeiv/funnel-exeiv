import Link from "next/link";
import { CALENDLY_URL, FREE_DELIVERABLES } from "@/lib/constants";

function AuditIcon() {
  return (
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[var(--brand-accent)]/50 transition-all duration-300">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--brand-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M12 18v-6" />
        <path d="M8 15h8" />
      </svg>
    </div>
  );
}

function MapIcon() {
  return (
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[var(--brand-accent)]/50 transition-all duration-300">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--brand-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 7 6-3 6 3 6-3v13l-6 3-6-3-6 3V7Z" />
        <path d="M9 4v13" />
        <path d="M15 7v13" />
      </svg>
    </div>
  );
}

const icons: Record<string, React.FC> = {
  audit: AuditIcon,
  map: MapIcon,
};

export function FreeOfferSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--brand-dark)] overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,42,42,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-base)] mb-6">
            Show up to the call. <br className="hidden md:block" />
            <span className="text-[var(--brand-accent)]">Leave with a plan.</span>
          </h2>
          <p className="text-[var(--brand-base)]/50 font-sans text-lg max-w-2xl mx-auto">
            We do the heavy lifting before we even meet. You walk in with answers, not an awkward intro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {FREE_DELIVERABLES.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.title}
                className="card-hover glass-accent group p-10 rounded-[2.5rem] flex flex-col items-start gap-8"
              >
                {Icon && <Icon />}
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[var(--brand-base)] mb-4 group-hover:text-[var(--brand-accent)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[var(--brand-base)]/60 font-sans text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-glow inline-flex items-center gap-4 bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white font-heading font-bold px-10 py-5 rounded-2xl transition-all duration-300 tracking-wide text-xl"
          >
            Claim Your Free Audit
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-6 text-[var(--brand-soft)]/40 text-sm font-sans uppercase tracking-[0.2em]">
            Limited to 4 Audit calls per week
          </p>
        </div>
      </div>
    </section>
  );
}


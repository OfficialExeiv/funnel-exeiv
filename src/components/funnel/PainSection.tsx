import Link from "next/link";
import { PAIN_POINTS, CALENDLY_URL } from "@/lib/constants";

// Pain icons mapped by key
function PainIcon({ type }: { type: string }) {
  const paths: Record<string, string> = {
    spreadsheet: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    ghost: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
    silos: "M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z",
    competitor: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    blind: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21",
    saas: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  };

  return (
    <div className="w-11 h-11 rounded-xl bg-[var(--brand-accent)]/8 border border-[var(--brand-accent)]/15 flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-accent)]/15 transition-colors duration-300">
      <svg
        className="w-5 h-5 text-[var(--brand-accent)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d={paths[type] ?? paths.saas}
        />
      </svg>
    </div>
  );
}

export function PainSection() {
  return (
    <section
      id="pain"
      className="relative py-24 md:py-32 bg-[var(--brand-dark)] overflow-hidden"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[var(--brand-accent)] text-xs uppercase tracking-widest font-bold font-heading mb-4">
            If Any of These Sound Familiar...
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-base)] mb-5">
            You&apos;re Not Broken.{" "}
            <span className="text-[var(--brand-accent)]">Your Tech Stack Is.</span>
          </h2>
          <p className="text-[var(--brand-soft)] font-sans text-lg max-w-xl mx-auto">
            Every one of these is a revenue leak. Quiet, daily, expensive.
          </p>
        </div>

        {/* Pain grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {PAIN_POINTS.map((point, i) => (
            <div
              key={i}
              className="card-hover glass group p-6 md:p-8 rounded-2xl relative overflow-hidden"
            >
              {/* Left accent bar on hover */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-[var(--brand-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start gap-5">
                <PainIcon type={point.icon} />
                <div>
                  <p className="font-heading font-bold text-[var(--brand-base)] text-base md:text-lg mb-2 leading-snug">
                    {point.pain}
                  </p>
                  <p className="text-[var(--brand-soft)] font-sans text-sm leading-relaxed">
                    {point.cost}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-14 text-center">
          <p className="text-[var(--brand-base)]/70 font-sans text-base md:text-lg mb-8 max-w-lg mx-auto">
            Every one of these is a revenue leak.{" "}
            <span className="text-[var(--brand-base)] font-semibold">
              We find them. We fix them.
            </span>
          </p>
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="pain-cta"
            className="cta-glow inline-flex items-center gap-3 bg-[var(--brand-accent)] text-white font-heading font-bold px-8 py-4 rounded-xl transition-all hover:opacity-90 tracking-wide"
          >
            Show Me My Leaks →
          </Link>
        </div>
      </div>
    </section>
  );
}

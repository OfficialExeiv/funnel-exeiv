import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";

const GOT: { label: string }[] = [
  { label: "Full Tech Stack Audit (what to cut, keep, build)" },
  { label: "Revenue Leak Map — 3 biggest money drains identified" },
  { label: "Custom 90-day roadmap built for your operation" },
  { label: "Honest expert opinion — even if we're not the right fit" },
];

const NOTGOT: { label: string }[] = [
  { label: "A sales pitch disguised as a consultation" },
  { label: "Vague advice with no action plan" },
  { label: "Pressure to commit before you're ready" },
];

export function AuditOfferSection() {
  return (
    <section
      id="audit"
      className="relative py-24 md:py-36 bg-brand-dark overflow-hidden"
    >
      {/* Center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(115,60,151,0.10) 0%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-accent text-xs uppercase tracking-widest font-bold font-heading mb-4">
            The Offer
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-brand-base mb-6 leading-tight">
            A $2,000 Audit.{" "}
            <span className="text-brand-accent">Free.</span>
            <br />
            <span className="text-3xl md:text-4xl text-brand-soft font-semibold">
              For 4 Founders Per Week.
            </span>
          </h2>
        </div>

        {/* Two-column value stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* LEFT — You Get */}
          <div className="glass-accent rounded-2xl p-8 md:p-10">
            <p className="font-heading font-bold text-brand-accent text-xs uppercase tracking-widest mb-6">
              ✓ What You Get
            </p>
            <ul className="space-y-5">
              {GOT.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold text-lg shrink-0 leading-tight">
                    ✓
                  </span>
                  <span className="text-brand-base font-sans text-base leading-snug">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — You Don't Get */}
          <div className="glass rounded-2xl p-8 md:p-10 border-white/5">
            <p className="font-heading font-bold text-brand-soft text-xs uppercase tracking-widest mb-6">
              ✗ What You Don&apos;t Get
            </p>
            <ul className="space-y-5">
              {NOTGOT.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-(--brand-soft)/60 font-bold text-lg shrink-0 leading-tight">
                    ✗
                  </span>
                  <span className="text-brand-soft font-sans text-base leading-snug line-through decoration-(--brand-soft)/30">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Urgency progress bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex justify-between text-xs uppercase tracking-widest font-heading font-bold mb-3">
            <span className="text-brand-soft">Weekly spots</span>
            <span className="text-brand-accent">2 of 4 claimed</span>
          </div>
          <div className="h-2 w-full rounded-full bg-white/8 overflow-hidden">
            <div
              className="h-full rounded-full bg-brand-accent progress-bar-fill"
              style={{ width: "0%" }}
            />
          </div>
          <p className="text-(--brand-soft)/50 text-xs text-center mt-3 font-sans">
            2 of 4 spots claimed this week
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="audit-offer-cta"
            aria-label="Book your free audit"
            className="cta-glow cta-pulse inline-flex items-center gap-3 bg-brand-accent text-white font-heading font-bold px-10 py-5 rounded-2xl transition-all hover:opacity-90 tracking-wide text-lg"
          >
            Book My Free Audit — Only 4 Spots/Week
          </Link>
          <p className="text-(--brand-soft)/40 text-xs mt-5 uppercase tracking-widest font-heading">
            No payment · No pressure · No pitch · Just answers
          </p>
        </div>
      </div>
    </section>
  );
}

import { TEAM } from "@/lib/constants";

export function TeamSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--brand-dark)]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-base)] mb-6">
            The <span className="text-[var(--brand-accent)]">Engine.</span>
          </h2>
          <p className="text-[var(--brand-base)]/50 font-sans text-lg max-w-2xl mx-auto">
            We are engineers, not just agencies. We own the outcome of every line of code we ship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="card-hover glass p-10 rounded-[2.5rem] flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--brand-accent)] to-[#ff6b6b] flex items-center justify-center text-white text-3xl font-bold mb-8 shadow-2xl shadow-[var(--brand-accent)]/20 group-hover:scale-110 transition-transform duration-500">
                {member.initials}
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-[var(--brand-base)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors">
                {member.name}
              </h3>
              <div className="text-[var(--brand-soft)]/60 text-sm uppercase tracking-widest font-bold mb-6">
                {member.role}
              </div>
              
              <ul className="list-none space-y-2 text-[var(--brand-base)]/60 font-sans text-lg leading-relaxed">
                {member.creds.map((cred) => (
                  <li key={cred} className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold shrink-0">✓</span>
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[var(--brand-soft)]/40 font-sans text-sm uppercase tracking-[0.3em]">
            Remote-first studio · Globally Trusted
          </p>
        </div>
      </div>
    </section>
  );
}


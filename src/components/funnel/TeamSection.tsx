import { TEAM } from "@/lib/constants";

export function TeamSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--brand-dark)]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[var(--brand-accent)] text-xs uppercase tracking-widest font-bold font-heading block mb-4">
            Who You Work With
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-base)] mb-5">
            Engineers Who{" "}
            <span className="text-[var(--brand-accent)]">Own the Outcome</span>
          </h2>
          <p className="text-[var(--brand-soft)] font-sans text-lg max-w-2xl mx-auto">
            Remote-first. Globally trusted. No middlemen. No account managers.
            You work directly with us.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="card-hover glass group p-10 rounded-[2rem] flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-8 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #733c97)",
                  boxShadow: "0 0 32px rgba(115,60,151,0.4)",
                }}
              >
                {member.initials}
              </div>

              <h3 className="font-heading text-2xl font-bold text-[var(--brand-base)] mb-1 group-hover:text-[var(--brand-accent)] transition-colors">
                {member.name}
              </h3>
              <div className="text-[var(--brand-soft)] text-xs uppercase tracking-widest font-bold mb-7">
                {member.role}
              </div>

              <ul className="space-y-2.5 text-left w-full">
                {member.creds.map((cred) => (
                  <li key={cred} className="flex items-start gap-3">
                    <span className="text-[var(--brand-accent)] font-bold shrink-0 text-sm mt-0.5">
                      ✓
                    </span>
                    <span className="text-[var(--brand-soft)] font-sans text-base">
                      {cred}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="relative py-12 bg-[var(--brand-dark)] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2"
          >
            <div className="w-6 h-6 rounded bg-[var(--brand-accent)] flex items-center justify-center text-white font-black text-[10px]">
              E
            </div>
            <span className="font-heading text-xl font-bold tracking-[0.2em] text-[var(--brand-base)] group-hover:text-[var(--brand-accent)] transition-colors duration-300">
              EXEIV
            </span>
          </Link>
          <p className="text-[var(--brand-base)]/30 font-sans text-xs uppercase tracking-widest">
            Engineering the future of operations.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-[var(--brand-base)]/50 font-sans text-sm">
            &copy; 2026 EXEIV. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="https://exeiv.com" target="_blank" className="text-[var(--brand-soft)]/40 hover:text-[var(--brand-accent)] text-xs uppercase tracking-widest transition-colors">
              Main Site
            </Link>
            <span className="text-white/5">|</span>
            <span className="text-[var(--brand-soft)]/40 text-xs uppercase tracking-widest">
              Operating Worldwide
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}


import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  // Duplicate for seamless loop
  const doubleTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative py-24 md:py-32 bg-[var(--brand-dark)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-16 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-base)] mb-6">
          Loved by <span className="text-[var(--brand-accent)]">Founders.</span>
        </h2>
        <p className="text-[var(--brand-base)]/50 font-sans text-lg max-w-2xl mx-auto">
          We build long-term partnerships with founders who value engineering excellence and clear communication.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden py-10">
        <div className="testimonial-marquee">
          {doubleTestimonials.map((t, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[450px] shrink-0 glass p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between border-white/5 hover:border-[var(--brand-accent)]/30 transition-all duration-500 group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[var(--brand-accent)] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[var(--brand-base)]/80 font-sans text-lg italic leading-relaxed mb-8 group-hover:text-[var(--brand-base)] transition-colors">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-accent)] to-[#ff6b6b] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[var(--brand-accent)]/20">
                  {t.initials}
                </div>
                <div>
                  <div className="font-heading font-bold text-[var(--brand-base)] text-base">
                    {t.name}
                  </div>
                  <div className="text-[var(--brand-soft)]/50 text-xs uppercase tracking-widest font-medium">
                    {t.context}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient Overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--brand-dark)] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--brand-dark)] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}


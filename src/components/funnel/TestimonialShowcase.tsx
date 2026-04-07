"use client";

import { useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";

/**
 * Featured video testimonial on top + horizontally scrolling text
 * testimonials marquee below.
 */
export function TestimonialShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Duplicate for seamless loop
  const doubleTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative py-24 md:py-32 bg-[var(--brand-dark)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-base)] mb-6">
            Don&apos;t take our word.{" "}
            <span className="text-[var(--brand-accent)]">Watch theirs.</span>
          </h2>
          <p className="text-[var(--brand-base)]/50 font-sans text-lg max-w-2xl mx-auto">
            Real founders. Real results. Hear directly from the people who
            trusted us with their most critical tech.
          </p>
        </div>

        {/* ── Video Testimonial ──────────────────────────────────────── */}
        <div className="anim-reveal anim-delay-2 max-w-4xl mx-auto mb-20">
          <div className="relative rounded-3xl overflow-hidden glass-accent group">
            {/* Decorative glow behind the video */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[var(--brand-accent)]/20 via-transparent to-[#ff6b6b]/10 rounded-3xl blur-xl opacity-60 pointer-events-none" />

            <div className="relative">
              {/* Video element */}
              <video
                ref={videoRef}
                className="w-full aspect-video object-cover rounded-3xl"
                poster=""
                preload="metadata"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                controls={isPlaying}
              >
                <source src="/videos/bala.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom play overlay — fades out when playing */}
              <button
                type="button"
                onClick={handlePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className={`absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/40 backdrop-blur-sm transition-all duration-500 cursor-pointer ${
                  isPlaying
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                }`}
              >
                {/* Play icon */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[var(--brand-accent)] flex items-center justify-center shadow-2xl shadow-[var(--brand-accent)]/40 group-hover:scale-110 transition-transform duration-500">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-heading text-white/80 text-sm md:text-base font-bold uppercase tracking-[0.25em]">
                  Watch Client Story
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Text Testimonials Marquee ──────────────────────────────── */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-[var(--brand-base)] mb-4">
            Loved by <span className="text-[var(--brand-accent)]">Founders.</span>
          </h3>
          <p className="text-[var(--brand-base)]/50 font-sans text-base max-w-xl mx-auto">
            We build long-term partnerships with founders who value engineering
            excellence and clear communication.
          </p>
        </div>

        <div className="relative py-8 overflow-hidden">
          {/* Scrolling track */}
          <div className="testimonial-marquee">
            {doubleTestimonials.map((t, i) => (
              <div
                key={i}
                className="w-[340px] md:w-[420px] shrink-0 glass p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between border-white/5 hover:border-[var(--brand-accent)]/30 transition-all duration-500 group"
              >
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-4 h-4 text-[var(--brand-accent)] fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-[var(--brand-base)]/80 font-sans text-base md:text-lg italic leading-relaxed mb-8 group-hover:text-[var(--brand-base)] transition-colors">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--brand-accent)] to-[#ff6b6b] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[var(--brand-accent)]/20">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[var(--brand-base)] text-sm">
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

          {/* Gradient edge fades */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-[var(--brand-dark)] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-[var(--brand-dark)] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

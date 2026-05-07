"use client";

import { useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";

function VideoCard({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden glass-accent group h-full">
      <div
        className="absolute -inset-1 rounded-3xl blur-xl opacity-50 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(115,60,151,0.22) 0%, transparent 60%)",
        }}
      />
      <div className="relative h-full">
        <video
          ref={videoRef}
          className="w-full aspect-video object-cover rounded-3xl"
          preload="metadata"
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          controls={isPlaying}
        >
          <source src={src} type="video/mp4" />
        </video>
        <button
          type="button"
          onClick={handlePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className={`absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black/45 backdrop-blur-sm transition-all duration-400 cursor-pointer ${
            isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300"
            style={{
              background: "var(--brand-accent)",
              boxShadow: "0 0 32px rgba(115,60,151,0.55)",
            }}
          >
            <svg
              className="w-8 h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="font-heading text-white/80 text-sm font-bold uppercase tracking-[0.25em]">
            {title}
          </span>
        </button>
      </div>
    </div>
  );
}

export function TestimonialShowcase() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative py-24 md:py-32 bg-[var(--brand-dark)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[var(--brand-accent)] text-xs uppercase tracking-widest font-bold font-heading block mb-4">
            Social Proof
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-base)] mb-5">
            Founders Don&apos;t Lie.{" "}
            <span className="text-[var(--brand-accent)]">Read What Theirs Said.</span>
          </h2>
          <p className="text-[var(--brand-soft)] font-sans text-lg max-w-xl mx-auto">
            Real results from founders who trusted us with their most critical tech.
          </p>
        </div>

        {/* Video testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <VideoCard src="/videos/testimonial/1.mp4" title="Watch Client Story" />
          <VideoCard src="/videos/testimonial/2.mp4" title="Watch Client Story" />
        </div>

        {/* Text testimonials marquee */}
        <div className="relative py-4 overflow-hidden">
          <div className="testimonial-marquee">
            {doubled.map((t, i) => (
              <div
                key={i}
                className="w-[340px] md:w-[400px] shrink-0 glass p-8 rounded-[2rem] flex flex-col justify-between border-white/5 hover:border-[var(--brand-accent)]/20 transition-all duration-500 group"
              >
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg
                        key={j}
                        className="w-4 h-4 text-[var(--brand-accent)] fill-current"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-[var(--brand-soft)] font-sans text-base leading-relaxed mb-6 group-hover:text-[var(--brand-base)] transition-colors">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shrink-0"
                    style={{ background: "linear-gradient(135deg, #a855f7, #733c97)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[var(--brand-base)] text-sm">
                      {t.name}
                    </div>
                    <div className="text-[var(--brand-soft)]/50 text-xs uppercase tracking-widest">
                      {t.context}
                    </div>
                  </div>
                  {/* Verified badge */}
                  <div className="ml-auto shrink-0">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20 text-[var(--brand-accent)] text-[10px] font-bold uppercase tracking-wider">
                      ✓ Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--brand-dark)] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--brand-dark)] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

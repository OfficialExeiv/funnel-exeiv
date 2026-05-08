"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";

export function InitialOfferPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show instantly on every load
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center px-6 pointer-events-none">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-3xl pointer-events-auto"
        onClick={() => setShow(false)}
      />

      <div className="relative w-full max-w-lg bg-[#1c1621]/95 border border-(--brand-accent)/40 rounded-[2.5rem] p-8 md:p-12 text-center pointer-events-auto anim-reveal shadow-[0_0_180px_rgba(115,60,151,0.6)]">
        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-6 right-6 text-(--brand-soft)/50 hover:text-brand-base transition-colors p-2"
          aria-label="Close offer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <span className="text-brand-accent text-xs uppercase tracking-widest font-bold font-heading block mb-6">
          Limited Time Offer
        </span>

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-base mb-4">
          Claim Your Free <br />
          <span className="text-brand-accent">$2,000 Tech Audit</span>
        </h2>

        <p className="text-brand-soft font-sans text-base mb-8 leading-relaxed">
          We identify exactly where your business is leaking revenue. 

        </p>



        <Link
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setShow(false)}
          className="cta-glow cta-pulse block w-full bg-brand-accent text-white font-heading font-bold py-5 rounded-2xl text-lg hover:opacity-90 transition-opacity tracking-wide"
        >
          Secure My Free Audit →
        </Link>

        <p className="text-(--brand-soft)/40 text-[10px] mt-6 uppercase tracking-widest font-heading">
          No credit card required · 30-min strategy call
        </p>
      </div>
    </div>
  );
}

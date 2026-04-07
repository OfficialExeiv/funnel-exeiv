"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 ${open ? "rotate-180 border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/5" : ""}`}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="var(--brand-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[var(--brand-dark)]">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-base)] mb-6">
            Common <span className="text-[var(--brand-accent)]">Questions.</span>
          </h2>
          <p className="text-[var(--brand-base)]/50 font-sans text-lg">
            Everything you need to know before we jump on a call.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`glass rounded-3xl overflow-hidden transition-all duration-500 border-white/5 hover:border-[var(--brand-accent)]/20 ${
                  isOpen ? "border-[var(--brand-accent)]/30 ring-1 ring-[var(--brand-accent)]/10" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-8 py-7 text-left cursor-pointer gap-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-[var(--brand-base)] font-bold text-lg md:text-xl transition-colors group-hover:text-[var(--brand-accent)]">
                    {item.q}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      <div className="px-8 pb-8 pt-2">
                        <div className="border-t border-white/5 pt-6">
                          <p className="text-[var(--brand-base)]/60 font-sans text-lg leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


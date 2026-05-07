"use client";

import { useState, useEffect, useRef } from "react";
import { TOAST_NAMES } from "@/lib/constants";

export function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const showToast = (i: number) => {
    setIndex(i);
    setVisible(true);

    timerRef.current = setTimeout(() => setVisible(false), 5000);
  };

  useEffect(() => {
    // First toast at 8 seconds
    const initial = setTimeout(() => showToast(0), 8000);

    // Repeat every 30 seconds
    let count = 1;
    cycleRef.current = setInterval(() => {
      showToast(count % TOAST_NAMES.length);
      count++;
    }, 30_000);

    return () => {
      clearTimeout(initial);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (cycleRef.current) clearInterval(cycleRef.current);
    };
  }, []);

  const current = TOAST_NAMES[index];

  return (
    <div
      className={`fixed bottom-6 left-4 z-[200] transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={visible ? { animation: "toast-slide 0.4s cubic-bezier(0.16,1,0.3,1) forwards" } : {}}
      aria-live="polite"
      aria-label="Social proof notification"
    >
      <div className="glass-accent rounded-2xl px-5 py-4 flex items-center gap-4 max-w-xs shadow-2xl">
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-[var(--brand-accent)] flex items-center justify-center text-black font-bold text-xs shrink-0">
          {current.name.charAt(0)}
        </div>
        <div>
          <p className="text-white text-sm font-heading font-bold leading-tight">
            {current.name} just booked their free audit
          </p>
          <p className="text-[var(--brand-soft)] text-xs mt-0.5">{current.time}</p>
        </div>
        {/* Dismiss */}
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Dismiss"
          className="ml-2 text-[var(--brand-soft)] hover:text-white text-xs shrink-0"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

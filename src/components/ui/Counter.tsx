"use client";

import { useEffect, useState, type RefObject } from "react";
import { useInView } from "@/lib/hooks/useInView";

interface CounterProps {
  target: number;
  suffix: string;
}

/**
 * Animates from 0 → target using a cubic ease-out curve,
 * starting only once the element is visible in the viewport.
 */
export function Counter({ target, suffix }: CounterProps) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const DURATION = 1600; // ms
    const startTime = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3); // cubic ease-out
      setValue(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span
      ref={ref as RefObject<HTMLSpanElement>}
      className="font-condensed font-black text-5xl sm:text-6xl text-white block leading-none"
    >
      {value}{suffix}
    </span>
  );
}

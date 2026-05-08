"use client";

import { useEffect, useRef, useState } from "react";

interface CounterStatProps {
  target: number;
  suffix: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export function CounterStat({
  target,
  suffix,
  prefix = "",
  label,
  duration = 1800,
}: CounterStatProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const startTime = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, started]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1.5">
      <span className="font-heading text-3xl md:text-4xl font-bold text-brand-accent">
        {prefix}{count}{suffix}
      </span>
      <span className="text-brand-soft text-xs uppercase tracking-widest font-medium text-center leading-tight">
        {label}
      </span>
    </div>
  );
}

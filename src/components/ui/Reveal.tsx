"use client";

import { useInView } from "@/lib/hooks/useInView";
import type { RefObject, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;    // seconds
  className?: string;
}

/**
 * Wraps children in a fade-up reveal animation triggered by scroll.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "0px 0px -30px 0px",
  });

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `
          opacity   0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s,
          transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s
        `,
      }}
    >
      {children}
    </div>
  );
}

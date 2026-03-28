"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires once when the observed element enters the viewport.
 * Disconnects the observer after the first intersection so it never re-triggers.
 */
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []); // intentionally empty — options are stable at mount

  return { ref, inView };
}

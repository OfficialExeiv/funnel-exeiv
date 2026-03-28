"use client";

import { useEffect, useState } from "react";

/**
 * Returns a 0–1 value representing how far the user has scrolled the page.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      setProgress(doc.scrollTop / (doc.scrollHeight - doc.clientHeight));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

"use client";

import { useEffect, useState } from "react";

interface ScrollState {
  scrollY: number;
  scrollX: number;
  isScrolled: boolean;
  scrollDirection: "up" | "down" | null;
}

/**
 * Hook to track window scroll position and direction.
 */
export function useScroll(threshold: number = 20): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollX: 0,
    isScrolled: false,
    scrollDirection: null,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
      const direction = currentScrollY > lastScrollY ? "down" : "up";

      setScrollState({
        scrollY: currentScrollY,
        scrollX: currentScrollX,
        isScrolled: currentScrollY > threshold,
        scrollDirection: direction,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrollState;
}

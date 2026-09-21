"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PosterSlide {
  id: number;
  image: string;
  alt: string;
  link: string;
}

const POSTER_SLIDES: PosterSlide[] = [
  {
    id: 1,
    image: "/images/poster-1.jpg",
    alt: "PTE Academic A-Z Masterclass - Bring a Friend Get 35% Off Course Poster",
    link: "/register",
  },
  {
    id: 2,
    image: "/images/poster-2.jpg",
    alt: "Score 79+ Guaranteed 1-on-1 Intensive Masterclass Course Poster",
    link: "/register",
  },
  {
    id: 3,
    image: "/images/poster-3.jpg",
    alt: "Official PTE Exam Booking Center Bangladesh - Instant Slot Confirmation Poster",
    link: "/register",
  },
];

const AUTOPLAY_INTERVAL = 5000;

export function PromoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = POSTER_SLIDES.length;

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (idx: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex(idx);
  };

  // Mobile Touch Swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] mx-auto select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Ambient subtle glow behind poster */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/20 via-blue-500/15 to-amber-500/20 blur-2xl -z-10 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Main Clean Poster Display Container */}
      <div className="relative aspect-square w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-border/60 dark:border-white/15 bg-card">
        {/* Slides rendering with smooth cross-fade */}
        {POSTER_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <Link
              key={slide.id}
              href={slide.link}
              className={cn(
                "absolute inset-0 block transition-opacity duration-700 ease-in-out cursor-pointer",
                isActive
                  ? "opacity-100 z-10 pointer-events-auto"
                  : "opacity-0 z-0 pointer-events-none"
              )}
              aria-hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="(max-width: 768px) 100vw, 510px"
                className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </Link>
          );
        })}

        {/* Floating Minimal Navigation Arrows (Subtle appearance on hover) */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Minimal Bottom Pagination Dots (Embedded cleanly inside the poster bottom) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-sm pointer-events-auto">
          {POSTER_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={(e) => handleDotClick(idx, e)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                idx === currentIndex
                  ? "w-6 bg-white shadow-xs"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

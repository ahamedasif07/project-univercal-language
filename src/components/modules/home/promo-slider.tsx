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

const AUTOPLAY_INTERVAL = 5500;
const PEEL_DURATION = 900; // ms

export function PromoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPeeling, setIsPeeling] = useState(false);
  const [peelDirection, setPeelDirection] = useState<"forward" | "backward">("forward");
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = POSTER_SLIDES.length;

  const nextIndex = (currentIndex + 1) % totalSlides;
  const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  const targetIndex = peelDirection === "forward" ? nextIndex : prevIndex;

  const goToNextPage = () => {
    if (isPeeling) return;
    setPeelDirection("forward");
    setIsPeeling(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
      setIsPeeling(false);
    }, PEEL_DURATION);
  };

  const goToPrevPage = () => {
    if (isPeeling) return;
    setPeelDirection("backward");
    setIsPeeling(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      setIsPeeling(false);
    }, PEEL_DURATION);
  };

  const goToPage = (idx: number) => {
    if (isPeeling || idx === currentIndex) return;
    setPeelDirection(idx > currentIndex ? "forward" : "backward");
    setIsPeeling(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsPeeling(false);
    }, PEEL_DURATION);
  };

  // Auto-play timer with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      goToNextPage();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex, isPeeling]);

  // Touch Swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToNextPage();
      else goToPrevPage();
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
      {/* Dynamic Keyframes for Diagonal Corner Page-Turn */}
      <style jsx global>{`
        @keyframes diagonalCornerPeelForward {
          0% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%);
          }
          20% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 70% 100%, 0% 100%, 0% 0%);
          }
          50% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 18%, 18% 100%, 0% 100%, 0% 0%);
          }
          80% {
            clip-path: polygon(0% 0%, 65% 0%, 0% 65%, 0% 100%, 0% 100%, 0% 0%);
          }
          100% {
            clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%);
          }
        }

        @keyframes diagonalCornerPeelBackward {
          0% {
            clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%);
          }
          25% {
            clip-path: polygon(0% 0%, 40% 0%, 0% 40%, 0% 0%, 0% 0%, 0% 0%);
          }
          55% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 20%, 20% 100%, 0% 100%, 0% 0%);
          }
          80% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 70% 100%, 0% 100%, 0% 0%);
          }
          100% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%);
          }
        }

        @keyframes paperCurlBarForward {
          0% {
            transform: translate(62%, 62%) rotate(-45deg);
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          88% {
            opacity: 1;
          }
          100% {
            transform: translate(-65%, -65%) rotate(-45deg);
            opacity: 0;
          }
        }

        @keyframes paperCurlBarBackward {
          0% {
            transform: translate(-65%, -65%) rotate(-45deg);
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          88% {
            opacity: 1;
          }
          100% {
            transform: translate(62%, 62%) rotate(-45deg);
            opacity: 0;
          }
        }

        @keyframes cornerPeelShadow {
          0% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>

      {/* Ambient subtle glow behind poster frame */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/20 via-blue-500/15 to-amber-500/20 blur-2xl -z-10 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Main Poster Frame */}
      <div className="relative aspect-square w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-border/60 dark:border-white/15 bg-card">
        {/* Layer 1: UNDERNEATH POSTER (Waiting page revealed as the corner peels) */}
        <div className="absolute inset-0 z-0">
          <Link
            href={POSTER_SLIDES[targetIndex].link}
            className="block w-full h-full relative cursor-pointer"
          >
            <Image
              src={POSTER_SLIDES[targetIndex].image}
              alt={POSTER_SLIDES[targetIndex].alt}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-center w-full h-full"
            />

            {/* Shadow cast on the revealed page by the peeling paper */}
            <div
              className={cn(
                "absolute inset-0 pointer-events-none bg-black/45",
                isPeeling
                  ? "opacity-0 duration-900 ease-out"
                  : "opacity-0"
              )}
            />
          </Link>
        </div>

        {/* Layer 2: TOP ACTIVE POSTER (Peeling diagonally from corner to opposite corner) */}
        <div
          className={cn(
            "absolute inset-0 z-10",
            isPeeling && peelDirection === "forward" && "pointer-events-none",
            isPeeling && peelDirection === "backward" && "pointer-events-none"
          )}
          style={{
            animation: isPeeling
              ? peelDirection === "forward"
                ? `diagonalCornerPeelForward ${PEEL_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1) forwards`
                : `diagonalCornerPeelBackward ${PEEL_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1) forwards`
              : "none",
          }}
        >
          <Link
            href={POSTER_SLIDES[currentIndex].link}
            className="block w-full h-full relative cursor-pointer"
          >
            <Image
              src={POSTER_SLIDES[currentIndex].image}
              alt={POSTER_SLIDES[currentIndex].alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </Link>
        </div>

        {/* Layer 3: PHYSICAL 3D DIAGONAL PAPER CURL & SHADOW (The sweeping crease/curl) */}
        {isPeeling && (
          <div
            className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            {/* The sweeping paper curl cylinder bar */}
            <div
              className="absolute w-[240%] h-[95px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                background: `linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 0.5) 0%,
                  rgba(0, 0, 0, 0.25) 20%,
                  transparent 35%,
                  rgba(0, 0, 0, 0.3) 42%,
                  #e2e8f0 46%,
                  #ffffff 50%,
                  #f1f5f9 54%,
                  #94a3b8 58%,
                  rgba(0, 0, 0, 0.45) 68%,
                  transparent 100%
                )`,
                filter: "drop-shadow(0 12px 24px rgba(0, 0, 0, 0.4))",
                animation:
                  peelDirection === "forward"
                    ? `paperCurlBarForward ${PEEL_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1) forwards`
                    : `paperCurlBarBackward ${PEEL_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1) forwards`,
              }}
            />
          </div>
        )}

        {/* Static Corner Lift Cue in Bottom-Right (When not peeling, inviting click to turn) */}
        {!isPeeling && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToNextPage();
            }}
            title="Click corner to turn page"
            aria-label="Turn page"
            className="absolute bottom-0 right-0 w-14 h-14 z-30 flex items-end justify-end p-2 cursor-pointer group/corner focus:outline-none"
          >
            {/* Triangular paper lift fold in corner */}
            <div className="relative w-8 h-8 rounded-tl-xl bg-gradient-to-br from-white/95 via-slate-100 to-slate-200 dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 border-t border-l border-white/60 shadow-[-4px_-4px_12px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover/corner:scale-125 group-hover/corner:-translate-x-1.5 group-hover/corner:-translate-y-1.5">
              {/* Paper curl shadow beneath flap */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/25 to-transparent rounded-tl-xl pointer-events-none" />
            </div>
          </button>
        )}

        {/* Minimal Floating Nav Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToPrevPage();
          }}
          disabled={isPeeling}
          aria-label="Previous Page"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center bg-black/45 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-30 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            goToNextPage();
          }}
          disabled={isPeeling}
          aria-label="Next Page"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center bg-black/45 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-30 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Minimal Frosted Glass Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 shadow-sm pointer-events-auto">
          {POSTER_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={(e) => {
                e.stopPropagation();
                goToPage(idx);
              }}
              disabled={isPeeling}
              aria-label={`Go to page ${idx + 1}`}
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

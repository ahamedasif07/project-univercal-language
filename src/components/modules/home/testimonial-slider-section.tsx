"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MessageSquareQuote,
} from "lucide-react";
import { STUDENT_TESTIMONIALS, StudentTestimonial } from "@/data/testimonials";

export function TestimonialSliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive visible cards based on viewport
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalCards = STUDENT_TESTIMONIALS.length;
  const maxIndex = Math.max(0, totalCards - visibleCards);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
  };

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    autoPlayTimerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 lg:py-26 bg-gradient-to-b from-background via-slate-50/50 to-background dark:from-background dark:via-muted/10 dark:to-background border-t border-slate-200/70 dark:border-white/[0.06] overflow-hidden"
      aria-label="Student Testimonials and Reviews"
    >
      {/* Background Soft Glows matching the site theme */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-primary/4 dark:bg-primary/8 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[280px] bg-blue-500/4 dark:bg-blue-500/8 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-semibold uppercase tracking-wider shadow-2xs">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Student Testimonials &amp; Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-[1.2]">
            Real Experiences,{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Authentic Results
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
            Hear directly from students and working professionals who achieved their target
            scores through our live interactive PTE and language mentorship.
          </p>
        </div>

        {/* ── Auto-Slider Container ── */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Overflow Viewport */}
          <div className="overflow-hidden py-3 -my-3">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% + 24px) / ${visibleCards}))`,
              }}
            >
              {STUDENT_TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="shrink-0 flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-white/[0.08] bg-white/90 dark:bg-card/70 backdrop-blur-md p-6 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-300 group"
                  style={{
                    width:
                      visibleCards === 1
                        ? "100%"
                        : visibleCards === 2
                        ? "calc(50% - 12px)"
                        : "calc((100% - 48px) / 3)",
                  }}
                >
                  {/* Top Row: Stars + Quote Icon + Score Pill */}
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-2">
                      {/* Star Rating */}
                      <div className="flex items-center gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      {/* Course / Score Badge */}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary dark:text-blue-300 border border-primary/20 shrink-0">
                        {testimonial.scoreBadge}
                      </span>
                    </div>

                    {/* Review Text */}
                    <div className="relative">
                      <Quote className="w-6 h-6 text-primary/15 dark:text-blue-400/20 mb-1" />
                      <p className="text-[14px] sm:text-[14.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-normal italic">
                        &ldquo;{testimonial.review}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Bottom Row: Profile & Target */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 dark:border-white/10 shrink-0 shadow-2xs bg-slate-100 dark:bg-slate-800">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="44px"
                        />
                      </div>

                      <div className="min-w-0 space-y-0.5">
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                          {testimonial.course}
                        </p>
                      </div>
                    </div>

                    {/* Target Country Flag */}
                    <div className="flex flex-col items-end shrink-0 text-right">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04] px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-white/[0.06]">
                        <span>{testimonial.targetFlag}</span>
                        <span>{testimonial.targetCountry}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10.5px] font-medium text-emerald-600 dark:text-emerald-400 mt-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Navigation Arrows ── */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonials"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200/90 dark:border-white/[0.1] bg-white/95 dark:bg-slate-900/95 text-slate-700 dark:text-slate-200 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white hover:border-primary transition-all shadow-md flex items-center justify-center cursor-pointer z-10 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonials"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200/90 dark:border-white/[0.1] bg-white/95 dark:bg-slate-900/95 text-slate-700 dark:text-slate-200 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white hover:border-primary transition-all shadow-md flex items-center justify-center cursor-pointer z-10 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* ── Dot Indicators & Status ── */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Showing verified student feedback • Auto-playing (pause on hover)
          </div>

          {/* Interactive Pagination Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-7 h-2 bg-primary"
                    : "w-2 h-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

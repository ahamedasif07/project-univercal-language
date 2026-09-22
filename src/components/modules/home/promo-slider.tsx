"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface PosterSlide {
  id: number;
  title: string;
  badge: string;
  tag: string;
  image: string;
  alt: string;
  link: string;
  discountText: string;
}

export const POSTER_SLIDES: PosterSlide[] = [
  {
    id: 1,
    title: "PTE Academic A-Z Masterclass",
    badge: "10% Instant Discount",
    tag: "Special Admission Offer",
    image: "/images/poster-1.jpg",
    alt: "PTE Academic A-Z Full Course Private 1-on-1 Masterclass at Universal Language with 10% Discount",
    link: "/register",
    discountText: "Save BDT 1,000 (BDT 10,500 reg. BDT 11,500)",
  },
  {
    id: 2,
    title: "Score 79+ Guaranteed Masterclass",
    badge: "Score Guarantee",
    tag: "1-on-1 Intensive Mentorship",
    image: "/images/poster-2.jpg",
    alt: "Score 79+ Guaranteed PTE Academic 1-on-1 Coaching with Pearson Certified Expert at Universal Language",
    link: "/register",
    discountText: "Free Repeat Classes if Target Not Met",
  },
  {
    id: 3,
    title: "Official PTE Exam Booking Center",
    badge: "Official Pearson Partner",
    tag: "Instant Slot Confirmation",
    image: "/images/poster-3.jpg",
    alt: "Official Pearson PTE Exam Booking Center in Bangladesh with Zero Dual Currency Card Fees",
    link: "/register",
    discountText: "Zero Card Fees • Local bKash/Nagad/Bank",
  },
];

const AUTOPLAY_INTERVAL = 5500; // ms

export function PromoSlider({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = POSTER_SLIDES.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToIndex = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  // Progress Bar & Auto-Advance Timer
  useEffect(() => {
    if (isPaused) return;

    const stepMs = 50;
    const increment = (stepMs / AUTOPLAY_INTERVAL) * 100;

    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          goToNext();
          return 0;
        }
        return old + increment;
      });
    }, stepMs);

    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
  };

  const activeSlide = POSTER_SLIDES[currentIndex];

  return (
    <div
      className={cn(
        "relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[520px] mx-auto select-none group",
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="PTE Course Promotional Offers Carousel"
    >
      {/* Ambient Multi-Layered Backlight Glow */}
      <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-primary/25 via-blue-600/20 to-blue-400/20 blur-2xl -z-10 opacity-70 group-hover:opacity-95 transition-opacity duration-700" />

      {/* Main Poster Display Card (Cleaned without top tabs) */}
      <div className="relative aspect-square w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-border/70 dark:border-white/15 bg-card">
        {/* Slides Stack with smooth fade-in */}
        {POSTER_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-out",
                isActive
                  ? "opacity-100 scale-100 z-10 pointer-events-auto"
                  : "opacity-0 scale-[1.03] z-0 pointer-events-none"
              )}
            >
              <Link
                href={slide.link}
                className="block w-full h-full relative cursor-pointer group/link"
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover object-center w-full h-full transition-transform duration-700 group-hover/link:scale-102"
                />

                {/* Subtle gradient overlay to highlight text badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/30 pointer-events-none" />

                {/* Top Corner Badge: Offer Tag */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 shadow-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-[11px] font-bold text-white tracking-wide uppercase">
                    {slide.tag}
                  </span>
                </div>

                {/* Top Right: Slide Number Counter */}
                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold text-white shadow-md">
                  0{idx + 1} / 0{totalSlides}
                </div>

                {/* Bottom Overlay Info Banner on Hover */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-white flex items-center justify-between gap-2 shadow-lg">
                  <div className="truncate">
                    <p className="text-xs font-black truncate">{slide.title}</p>
                    <p className="text-[11px] text-blue-300 font-semibold truncate">
                      {slide.discountText}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-bold shadow-sm group-hover/link:bg-blue-600 transition-colors">
                    <span>Enroll</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}

        {/* Previous & Next Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToPrev();
          }}
          aria-label="Previous Slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          aria-label="Next Slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Progress Bar & Pagination Dots */}
      <div className="mt-3.5 flex items-center justify-between gap-3 px-1">
        {/* Pagination Dots */}
        <div className="flex items-center gap-1.5">
          {POSTER_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300 cursor-pointer",
                idx === currentIndex
                  ? "w-7 bg-primary dark:bg-blue-400"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>

        {/* Slide Title / Auto-advance Progress Line */}
        <div className="flex items-center gap-2 flex-1 max-w-[220px]">
          <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider truncate">
            {activeSlide.badge}
          </span>
          <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#0b3a82] via-primary to-blue-500 rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CoursePromoSection() {
  return (
    <section
      id="course-masterclass"
      className="relative py-14 sm:py-20 lg:py-24 overflow-hidden border-b border-border/40 bg-gradient-to-b from-background via-muted/15 to-background"
      aria-label="Universal Language PTE Academic 1-on-1 Masterclass"
    >
      {/* Background Ambience & Grid Texture */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[350px] bg-primary/10 dark:bg-primary/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-blue-500/10 dark:bg-blue-500/15 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800e_1px,transparent_1px),linear-gradient(to_bottom,#8080800e_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ── Left Column: Clean, Minimal, Humanized Copy ── */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Top Credential Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Universal Language • Pearson Certified Partner</span>
            </div>

            {/* Headline */}
            <div className="space-y-2.5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
                Score 79+ in PTE Academic in Just{" "}
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative inline-block text-primary dark:text-blue-400 whitespace-nowrap"
                >
                  12 Classes!
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary/80 dark:text-blue-400/90 overflow-visible"
                    viewBox="0 0 120 14"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M2,10 Q60,1 118,10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      variants={{
                        hidden: {
                          pathLength: 0,
                          opacity: 0,
                          transition: { duration: 0.2 },
                        },
                        visible: {
                          pathLength: 1,
                          opacity: 1,
                          transition: {
                            pathLength: {
                              duration: 1.1,
                              ease: [0.22, 1, 0.36, 1],
                              delay: 0.2,
                            },
                            opacity: {
                              duration: 0.2,
                              delay: 0.05,
                            },
                          },
                        },
                      }}
                    />
                  </svg>
                </motion.span>
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
                Skip the crowded batches. Learn directly from a Pearson Certified
                Expert with personalized 1-on-1 coaching, real-time AI mock
                scoring, and official exam booking.
              </p>
            </div>

            {/* Minimal & Punchy Value Checklist */}
            <div className="space-y-2.5 w-full text-left pt-0.5">
              {[
                "100+ students successfully scored 79+ on first attempt",
                "100% private 1-to-1 coaching — zero crowded batches",
                "Score Guarantee — free repeat classes if needed",
                "Achieve target score within 30 days (12 intensive classes)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="h-4.5 w-4.5 rounded-full bg-primary/15 text-primary dark:text-blue-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Compact, Sleek Admission Offer Strip */}
            <div className="w-full flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-primary text-white">
                  10% Off
                </span>
                <div className="text-xs">
                  <span className="font-black text-foreground">BDT 10,500</span>{" "}
                  <span className="line-through text-muted-foreground text-[11px] mr-1">
                    BDT 11,500
                  </span>
                  <span className="text-muted-foreground hidden sm:inline">
                    • 12 Private Classes + AI Mocks
                  </span>
                </div>
              </div>

              {/* Glowing High-Attraction Claim Offer Button */}
              <Link
                href="/register"
                className="relative group/claim inline-flex items-center shrink-0 focus:outline-none"
              >
                {/* Radiant Pulsing Backlight Glow */}
                <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#0b3a82] via-primary to-blue-500 opacity-75 blur-md group-hover/claim:opacity-100 transition-opacity duration-300 animate-pulse" />

                <span className="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-primary hover:via-blue-600 hover:to-indigo-600 shadow-md active:scale-95 transition-all duration-200">
                  <span>Claim Offer</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/claim:translate-x-0.5" />
                </span>
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full">
              <Link href="/register" className="inline-block group focus:outline-none">
                <button className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-primary hover:via-blue-600 hover:to-indigo-600 shadow-[0_4px_14px_-2px_rgba(11,58,130,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  <span className="relative z-10">Enroll Now — Free Consultation</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>

              <a
                href="https://wa.me/8801674166241?text=Hello%20Universal%20Language,%20I%20want%20to%20know%20more%20about%20the%201-to-1%20PTE%20A-Z%20Masterclass%20and%20claim%20the%2010%%20discount."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border border-border/70 dark:border-white/15 bg-background/80 hover:bg-secondary/60 transition-all hover:scale-[1.01] active:scale-[0.98] text-foreground cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-emerald-500" />
                <span>Call / WhatsApp</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
              </a>
            </div>

            {/* Minimal Social Proof */}
            <div className="pt-1.5 flex flex-wrap items-center justify-center lg:justify-start gap-4 border-t border-border/40 w-full text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="font-bold text-foreground">4.9/5</span>
                <span>(150+ Students)</span>
              </div>

              <div className="h-3.5 w-px bg-border/80 hidden sm:block" />

              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>Pearson Authorized Test Partner</span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Interactive Promotional Flyer Slider ── */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center w-full">
            <PromoSlider />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoursePromoSection;

"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  discountText: string;
}

export const POSTER_SLIDES: PosterSlide[] = [
  {
    id: 1,
    title: "PTE Premium Course",
    badge: "35% Special Discount",
    tag: "Pearson Certified Strategy",
    image: "/images/dic-image-1.jpeg",
    alt: "PTE Premium Course at Universal Language with 35% Discount - 18 Live Classes, 4-8 Students, 5 Mock Tests",
    discountText: "35% OFF • 18 Live Classes • 4-8 Students • 5 Mock Tests",
  },
  {
    id: 2,
    title: "PTE Practical Simulation & Focused Course",
    badge: "35% Special Discount",
    tag: "Focused-Based Mini-Batch",
    image: "/images/dic-image-2.jpeg",
    alt: "PTE Practical Simulation and Focused-Based Mini-Batch Course with 35% Discount at Universal Language",
    discountText: "35% OFF • 1 Month Premium Portal • Pearson Guided Strategies",
  },
  {
    id: 3,
    title: "PTE Simulation & Mini-Batch Masterclass",
    badge: "35% Special Discount",
    tag: "Pearson Certified Partner",
    image: "/images/dic-image-3.jpeg",
    alt: "Official Pearson Partner PTE Focused-Based Mini-Batch Course with 35% Discount",
    discountText: "35% OFF • 18 Live Classes • 1 Month Portal • 5 Mock Tests",
  },
];

const AUTOPLAY_INTERVAL = 6000; // ms

// Function to generate the dedicated WhatsApp enrollment link with the selected course flyer
function getWhatsAppEnrollUrl(slide: PosterSlide) {
  const phoneNumber = "8801772224283";
  const message = [
    `Hello Universal Language, I want to enroll in this course:`,
    `📚 Course: ${slide.title}`,
    `🎯 Offer: ${slide.badge} (${slide.discountText})`,
    `🖼️ Selected Flyer: https://universallanguagebd.com${slide.image}`,
    `Please share the batch schedule, enrollment process, and fee details.`,
  ].join("\n");

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

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
        "relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[470px] mx-auto select-none group",
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

      {/* Main Unified Poster Display & Enrollment Card */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-border/80 dark:border-white/15 bg-card flex flex-col">
        {/* ── 1. Poster Image Frame (Aspect 4/5 - Matches the exact 1080x1350 / 1122x1402 poster ratio) ── */}
        {/* Completely unobstructed: No overlays, no text coverings, 100% full view */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950/5 dark:bg-slate-950/40">
          {POSTER_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={slide.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500 ease-out",
                  isActive
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none"
                )}
              >
                <a
                  href={getWhatsAppEnrollUrl(slide)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative cursor-pointer group/poster"
                  title={`Click to enroll in ${slide.title} via WhatsApp`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, 470px"
                    className="object-contain w-full h-full transition-transform duration-500 group-hover/poster:scale-[1.01]"
                  />
                </a>
              </div>
            );
          })}

          {/* Previous & Next Navigation Arrows (Cleanly placed on side edges) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            aria-label="Previous Slide"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next Slide"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* ── 2. Dedicated Slide Enrollment Section (Placed SEPARATELY below the image, NEVER covering it) ── */}
        <div className="p-3.5 sm:p-4 bg-card/95 dark:bg-card border-t border-border/70 dark:border-white/10 flex flex-col gap-3">
          {/* Active Course Details & Offer Badges */}
          <div className="flex items-start justify-between gap-2.5">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-rose-600 text-white shadow-xs">
                  {activeSlide.badge}
                </span>
                <span className="text-[11px] font-bold text-primary dark:text-blue-400 truncate">
                  {activeSlide.tag}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-foreground truncate">
                {activeSlide.title}
              </h3>
              <p className="text-xs text-muted-foreground truncate mt-0.5">
                {activeSlide.discountText}
              </p>
            </div>

            {/* Slide Index Pill */}
            <span className="shrink-0 px-2 py-1 rounded-md bg-muted text-[11px] font-mono font-bold text-muted-foreground border border-border/50">
              0{currentIndex + 1} / 0{totalSlides}
            </span>
          </div>

          {/* Dedicated WhatsApp Direct Enrollment CTA */}
          <a
            href={getWhatsAppEnrollUrl(activeSlide)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enroll in ${activeSlide.title} on WhatsApp`}
            className="group/cta relative flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden"
          >
            {/* Authentic WhatsApp SVG Logo */}
            <svg
              className="w-4.5 h-4.5 fill-current shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-10.416c-5.522 0-10 4.477-10 10 0 1.769.459 3.498 1.338 5.023l-1.422 5.195 5.344-1.401c1.465.799 3.117 1.22 4.74 1.22 5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10z" />
            </svg>
            <span>Enroll via WhatsApp (Claim 35% Discount)</span>
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover/cta:translate-x-1" />
          </a>
        </div>
      </div>

      {/* ── 3. Bottom Progress Bar & Pagination Dots ── */}
      <div className="mt-3.5 flex items-center justify-between gap-3 px-1">
        {/* Pagination Dots */}
        <div className="flex items-center gap-1.5">
          {POSTER_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300 cursor-pointer",
                idx === currentIndex
                  ? "w-7 bg-primary dark:bg-blue-400"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>

        {/* Slide Counter / Auto-advance Progress Line */}
        <div className="flex items-center gap-2 flex-1 max-w-[200px]">
          <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider truncate">
            Auto-Slide
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
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
                  24 Classes!
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
                Skip the crowded batches. Learn directly from a Pearson Certified Expert
                with personalized coaching, real-time AI mock scoring, and official
                Pearson exam booking assistance.
              </p>
            </div>

            {/* Minimal & Punchy Value Checklist */}
            <div className="space-y-2.5 w-full text-left pt-0.5">
              {[
                "100+ students successfully scored 79+ on first attempt",
                "Private 1-to-1 coaching & focused mini-batches (4-8 students)",
                "Score Guarantee — free repeat classes if needed",
                "Full 1-month AI practice portal with 5 complete mock tests",
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
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-rose-600 text-white">
                  35% Off
                </span>
                <div className="text-xs">
                  <span className="font-black text-foreground">
                    Special Admission Offer
                  </span>{" "}
                  <span className="text-muted-foreground hidden sm:inline">
                    • 18 Live Classes + 1 Month AI Portal + 5 Mocks
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
                href="https://wa.me/8801772224283?text=Hello%20Universal%20Language,%20I%20want%20to%20know%20more%20about%20your%20PTE%20Masterclass%20and%20claim%20the%2035%%20discount."
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
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
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

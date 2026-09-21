"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Star,
  ShieldCheck,
} from "lucide-react";
import { PromoSlider } from "./promo-slider";

const KEY_HIGHLIGHTS = [
  "100+ students scored 79+ on their first attempt",
  "Score Guarantee — complimentary repeat classes if needed",
  "Official Pearson PTE exam booking center in Bangladesh",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-18">
      {/* Subtle Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[300px] bg-primary/10 dark:bg-primary/15 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-blue-500/10 dark:bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Tight, High-Impact & Premium Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            {/* Compact Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/25 dark:border-primary/30 bg-primary/5 dark:bg-primary/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-primary dark:text-blue-300">
                Pearson Certified 1-to-1 PTE Coaching
              </span>
            </div>

            {/* Controlled, Impactful Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
              Score 79+ in PTE Academic in Just{" "}
              <span className="relative inline-block text-amber-500 dark:text-amber-400">
                12 Classes!
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2.5 text-amber-400/60 dark:text-amber-400/40"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q50,0 100,8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Concise Subheadline (2 lines max on desktop) */}
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
              Skip crowded batches. Get personalized 1-on-1 mentorship, instant
              AI mock scoring, and guaranteed score improvement with official exam
              booking support.
            </p>

            {/* Focused 3 Key Points */}
            <div className="space-y-2 pt-0.5">
              {KEY_HIGHLIGHTS.map((point, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="h-4.5 w-4.5 rounded-full flex items-center justify-center bg-amber-500/15 dark:bg-amber-400/20 text-amber-600 dark:text-amber-400 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground/90">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Tight CTA Actions */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <Link href="/register" className="inline-block group focus:outline-none">
                <button className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-primary hover:via-blue-600 hover:to-indigo-600 shadow-[0_4px_14px_-2px_rgba(11,58,130,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  <span className="relative z-10">Book Free Consultation</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>

              <a
                href="https://wa.me/8801700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border border-border/70 dark:border-white/15 bg-background/80 hover:bg-secondary/60 transition-all hover:scale-[1.01] active:scale-[0.98] text-foreground cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-emerald-500" />
                <span>Call / WhatsApp</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
              </a>
            </div>

            {/* Minimal Social Proof Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4 border-t border-border/40">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-foreground">4.9/5</span>
                <span className="text-xs text-muted-foreground">(500+ Students)</span>
              </div>

              <div className="h-3.5 w-px bg-border/80 hidden sm:block" />

              <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>Pearson Authorized Partner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Poster Slider */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            <PromoSlider />
          </div>
        </div>
      </div>
    </section>
  );
}

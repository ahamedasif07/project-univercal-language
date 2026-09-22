"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, Star, BadgeCheck, CheckCircle2 } from "lucide-react";
import { GlobeSphere } from "./globe-sphere";

export function HeroSection() {
  return (
    <section className="relative overflow-x-clip pt-3 pb-8 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-16">
      {/* Subtle Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[350px] bg-primary/10 dark:bg-primary/15 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-blue-500/10 dark:bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* ── Left Column: Grounded, Authentic & Human Institute Gateway ── */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Direct, Human & Memorable Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
                Universal Language.
              </span>
              Score High and
              <span className="relative inline-block text-primary dark:text-blue-400 whitespace-nowrap">
                Study Abroad.
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2.5 text-primary/70 dark:text-blue-400/70"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
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

            {/* Grounded, Student-Centric Subtext (Zero AI Buzzwords) */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We help students and job seekers in Bangladesh clear{" "}
              <strong>PTE Academic, IELTS, German, and Japanese</strong> on their first
              attempt. Get private 1-on-1 coaching, official mock tests, and end-to-end
              admission guidance for universities across Australia, Canada, the UK, and
              Europe.
            </p>

            {/* Tangible Human Value Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-0.5 text-xs font-semibold text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/70 border border-border/70 text-foreground/90 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                1-on-1 Private Coaching
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/70 border border-border/70 text-foreground/90 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Official Exam Seat Booking
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/70 border border-border/70 text-foreground/90 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Free Admission Counseling
              </span>
            </div>

            {/* ── Conversion-Driven Action Buttons ── */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full">
              <Link href="/register" className="inline-block group focus:outline-none">
                <button className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-primary hover:via-blue-600 hover:to-indigo-600 shadow-[0_4px_14px_-2px_rgba(11,58,130,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  <span className="relative z-10">Book Free Assessment</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>

              <a
                href="https://wa.me/8801674166241?text=Hello%20Universal%20Language,%20I%20want%20to%20inquire%20about%20your%20PTE,%20IELTS,%20German,%20Japanese,%20and%20Study%20Abroad%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border border-border/70 dark:border-white/15 bg-background/80 hover:bg-secondary/60 transition-all hover:scale-[1.01] active:scale-[0.98] text-foreground cursor-pointer shadow-2xs"
              >
                <PhoneCall className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp Admissions</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
              </a>
            </div>

            {/* ── Real Human Trust Footnote ── */}
            {/* <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 border-t border-border/40 w-full text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-foreground">4.9/5 Rating</span>
                <span>(250+ Verified Students)</span>
              </div>

              <div className="h-3.5 w-px bg-border/80 hidden sm:block" />

              <div className="flex items-center gap-1.5 font-medium">
                <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                <span>Pearson Authorized Test Center</span>
              </div>

              <div className="h-3.5 w-px bg-border/80 hidden sm:block" />

              <div className="flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Dhaka Center &amp; Online</span>
              </div>
            </div> */}
          </div>

          {/* ── Right Column: 3D Interactive Global Destination Sphere ── */}
          <div
            className="lg:col-span-6 relative flex items-center justify-center w-full h-full"
            style={{ overflow: "visible" }}
          >
            <GlobeSphere />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

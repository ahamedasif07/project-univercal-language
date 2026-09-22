"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Users,
  ClipboardCheck,
  Compass,
  GraduationCap,
  CalendarCheck,
  PlaneTakeoff,
  Sparkles,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Award,
  ChevronRight,
  Check,
} from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  stage: string;
  timeline: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  iconGradient: string;
  badgeAccent: string;
  highlights: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "1-on-1 Strategic Profile Audit",
    stage: "Free Consultation",
    timeline: "Day 01",
    description:
      "Sit 1-on-1 with a senior Pearson instructor to analyze your university cutoff, visa points, and current English baseline with zero sales pressure.",
    icon: Users,
    gradient: "from-[#061e47] via-[#0b3a82] to-[#1d5ec9]",
    iconGradient: "from-[#0b3a82] to-blue-600",
    badgeAccent: "bg-blue-500/20 text-blue-100 border-blue-400/30",
    highlights: [
      "Country-Specific Cutoff & Intake Timeline",
      "100% Free 1-on-1 Profile Evaluation",
    ],
  },
  {
    step: "02",
    title: "Pearson AI Diagnostic Mock",
    stage: "Diagnostic Assessment",
    timeline: "Day 02",
    description:
      "Take an official AI-graded simulation that diagnoses oral fluency, pronunciation pitch, and algorithmic traps so you never waste weeks practicing blindly.",
    icon: ClipboardCheck,
    gradient: "from-[#092252] via-[#0d4295] to-[#2563eb]",
    iconGradient: "from-[#0d4295] to-indigo-600",
    badgeAccent: "bg-indigo-500/20 text-indigo-100 border-indigo-400/30",
    highlights: [
      "Official AI-Scored Matrix (All 4 Modules)",
      "Pinpoint Algorithmic Weaknesses Fast",
    ],
  },
  {
    step: "03",
    title: "Custom 79+ Study Blueprint",
    stage: "Personalized Plan",
    timeline: "Week 01",
    description:
      "Receive a tailored daily study schedule built around your routine, focusing on the 80/20 high-weightage tasks (WFD, RS) for maximum score gains.",
    icon: Compass,
    gradient: "from-[#062444] via-[#094b79] to-[#0284c7]",
    iconGradient: "from-[#094b79] to-cyan-600",
    badgeAccent: "bg-cyan-500/20 text-cyan-100 border-cyan-400/30",
    highlights: [
      "80/20 Rule: Focus on Top Scoring Tasks",
      "Custom Daily Practice Plan & Tracker",
    ],
  },
  {
    step: "04",
    title: "Private 1-on-1 Mastery Classes",
    stage: "1-on-1 Classes",
    timeline: "Weeks 02–04",
    description:
      "Zero crowded batches. Train privately with lead mentors to master proven 90-score speaking templates, essay structures, and mic positioning.",
    icon: GraduationCap,
    gradient: "from-[#0a1e4d] via-[#16449c] to-[#3b82f6]",
    iconGradient: "from-[#16449c] to-blue-500",
    badgeAccent: "bg-blue-500/20 text-blue-100 border-blue-400/30",
    highlights: [
      "Tested 90-Score Speaking & Writing Templates",
      "Direct 1-on-1 Feedback on Every Single Drill",
    ],
  },
  {
    step: "05",
    title: "Official Seat Booking & Simulation",
    stage: "Exam Day",
    timeline: "Test Week",
    description:
      "Book your official Pearson test seat without dual-currency credit cards (bKash/Bank accepted). Experience full-length test center simulations.",
    icon: CalendarCheck,
    gradient: "from-[#081a3d] via-[#0e3c7e] to-[#1d4ed8]",
    iconGradient: "from-[#0e3c7e] to-sky-600",
    badgeAccent: "bg-sky-500/20 text-sky-100 border-sky-400/30",
    highlights: [
      "Instant Slot Booking via Local Payment (bKash)",
      "Real Exam-Center Simulation & Anxiety Relief",
    ],
  },
  {
    step: "06",
    title: "Score 79+ & Fast-Track Visa Launch",
    stage: "Score & Fly!",
    timeline: "Success",
    description:
      "Secure your 79+ (Band 8.0 equivalent) on your very first try and transition directly into university admission processing and visa filing.",
    icon: PlaneTakeoff,
    gradient: "from-[#071f43] via-[#0b427b] to-[#059669]",
    iconGradient: "from-[#0b427b] to-emerald-600",
    badgeAccent: "bg-emerald-500/20 text-emerald-100 border-emerald-400/30",
    highlights: [
      "Guaranteed 79+ First-Attempt Methodology",
      "End-to-End Admission & Visa Launch Support",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function StepsSection() {
  return (
    <section
      id="how-it-works"
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-border/40 bg-gradient-to-b from-background via-muted/20 to-background"
      aria-label="Proven 6-Step Methodology to 79+"
    >
      {/* Background Soft Glow Accents in Brand Royal Blue */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[550px] h-[340px] bg-primary/8 dark:bg-primary/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-[520px] h-[320px] bg-blue-500/8 dark:bg-blue-500/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Blueprint Grid Texture matching Hero & Stats */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Proven 6-Step Methodology</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tight leading-[1.18]">
            From Enrollment to{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              79+ Target Score
            </span>{" "}
            in 6 Simple Steps
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We&apos;ve streamlined everything so you can focus on scoring, not figuring out what to do next.
            A scientifically structured preparation framework engineered to eliminate retake anxiety on your very first attempt.
          </p>
        </motion.div>

        {/* 6 Steps Grid: Framer Motion Staggered Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="group relative flex flex-col h-full rounded-2xl sm:rounded-3xl border border-border/80 dark:border-white/10 bg-card/95 dark:bg-card/45 backdrop-blur-xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-12px_rgba(11,58,130,0.22)] dark:hover:shadow-[0_20px_45px_-12px_rgba(59,130,246,0.15)] hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
              >
                {/* ── Top Rich Colored Hero Header Zone ── */}
                <div
                  className={`relative h-36 sm:h-38 w-full p-5 flex flex-col justify-between overflow-hidden bg-gradient-to-br ${step.gradient}`}
                >
                  {/* Radial Light Flare on top-right */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_65%)] pointer-events-none" />

                  {/* Micro Grid Texture for High-End Depth */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none" />

                  {/* Light Sheen Sweep on Hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                  {/* Top Badges Row */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    {/* Stage Pill */}
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full backdrop-blur-md text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-xs ${step.badgeAccent}`}
                    >
                      <Sparkles className="w-3 h-3" />
                      {step.stage}
                    </span>

                    {/* Timeline Tag */}
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/15 text-white/95 text-[10px] sm:text-[11px] font-semibold">
                      <Clock className="w-3 h-3 text-white/80" />
                      {step.timeline}
                    </span>
                  </div>

                  {/* Header Bottom Row: Elegant Big Number Monogram */}
                  <div className="relative z-10 flex items-end justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/70">
                      Step {step.step} of 06
                    </span>
                    <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* ── Floating Overlapping Icon Medallion ── */}
                <div className="relative -mt-7 sm:-mt-8 ml-6 sm:ml-7 z-20 flex items-center justify-between pr-6">
                  <div className="p-1 rounded-2xl bg-card border-2 border-border/80 dark:border-white/15 shadow-[0_10px_25px_-5px_rgba(11,58,130,0.32)] group-hover:shadow-[0_12px_28px_-4px_rgba(11,58,130,0.45)] group-hover:border-primary transition-all duration-300">
                    <div
                      className={`w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-gradient-to-br ${step.iconGradient} flex items-center justify-center text-white shadow-inner group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 sm:w-6.5 sm:h-6.5" strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Stage Progress Pill */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 text-primary dark:text-blue-300 text-[11px] font-bold tracking-wider uppercase border border-primary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Stage {step.step}
                  </div>
                </div>

                {/* ── Card Content Body ── */}
                <div className="p-6 sm:p-7 pt-4 flex-1 flex flex-col">
                  {/* Step Title */}
                  <h3 className="text-lg sm:text-xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Informative Body Copy */}
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2 mb-5">
                    {step.description}
                  </p>

                  {/* Micro-Perks Checklist inside tinted containers */}
                  <div className="mt-auto space-y-2 pt-2">
                    {step.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2.5 p-2 rounded-xl bg-muted/40 dark:bg-white/[0.03] border border-border/50 text-xs font-medium text-foreground/90 transition-colors group-hover:bg-primary/[0.03] group-hover:border-primary/20"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Deliverable Action */}
                  <div className="mt-5 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    <span>Phase {step.step} • Milestone Verified</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 text-primary" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Bottom Call To Action Area ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 flex flex-col items-center justify-center text-center space-y-4"
        >
          {/* Main Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link href="/register" className="inline-block group focus:outline-none">
              <button className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-primary hover:via-blue-600 hover:to-indigo-600 shadow-[0_6px_20px_-3px_rgba(11,58,130,0.38)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                <span className="relative z-10">Book A Free Consultation</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>

            <a
              href="https://wa.me/8801674166241?text=Hello%20Universal%20Language,%20I%20want%20to%20know%20more%20about%20your%206-step%20program%20for%20scoring%2079%2B."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border border-border/70 dark:border-white/15 bg-background/90 hover:bg-secondary/60 text-foreground transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer shadow-2xs"
            >
              <PhoneCall className="w-4 h-4 text-emerald-500" />
              <span>Direct WhatsApp Advisor</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              100% Free Initial Assessment
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Pearson Certified Mentors
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              Guaranteed 79+ First-Attempt Roadmap
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

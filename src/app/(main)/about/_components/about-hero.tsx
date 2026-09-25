"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  Cpu,
  BarChart3,
  Award,
  Layers,
  GraduationCap,
  Volume2,
  CalendarCheck,
} from "lucide-react";
import { Container } from "@/components/common/container";

const CORE_CAPABILITIES = [
  {
    icon: BarChart3,
    title: "Diagnostic & Mock Evaluation",
    description: "Multi-dimensional diagnostic audit pinpointing exact algorithmic score gaps.",
  },
  {
    icon: Cpu,
    title: "Machine-Scoring Calibration",
    description: "Reverse-engineered training aligned precisely with Pearson's automated evaluation engine.",
  },
  {
    icon: Volume2,
    title: "Acoustic & Oral Fluency Lab",
    description: "Voice pitch, cadence, and microphone calibration for accent-agnostic 90/90 speaking.",
  },
  {
    icon: Layers,
    title: "Tailored Score Roadmaps",
    description: "Custom day-by-day study roadmap adapted to your baseline and target deadline.",
  },
  {
    icon: ShieldCheck,
    title: "Pearson Certified Mentorship",
    description: "Direct guidance from master trainers certified by Pearson South Asia leadership.",
  },
  {
    icon: Award,
    title: "Proven 79+ & 90 Strategies",
    description: "Battle-tested templates, lexical matrices, and real exam question simulations.",
  },
];

export function AboutHero() {
  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-950/30">
      {/* Decorative ambient glow orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-r from-blue-600/10 via-primary/10 to-indigo-600/10 dark:from-blue-500/15 dark:via-primary/10 dark:to-indigo-500/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[420px] h-[300px] bg-blue-500/8 dark:bg-indigo-500/8 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b3a8208_1px,transparent_1px),linear-gradient(to_bottom,#0b3a8208_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Vision & Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>Universal Language × CRACK PTE Academy</span>
            </div>

            {/* Heading matching home page title styling */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground tracking-tight leading-[1.12]">
              PTE Academic{" "}
              <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
                Expert Coaching
              </span>{" "}
              &amp; Strategic Pedagogy
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We replace guesswork with algorithmic precision. Led by Pearson-certified master trainers,
              Universal Language provides the most authentic, diagnostic-driven PTE Academic and language
              training in Bangladesh—turning ambitious test-takers into verified 79+ and 90 high-scorers.
            </p>

            {/* CTA action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/courses" className="inline-block group">
                <button className="relative overflow-hidden inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0b3a82] via-[#0e489c] to-[#1e3a8a] hover:from-[#0a316e] hover:to-[#173075] shadow-lg shadow-blue-900/20 hover:shadow-blue-900/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer">
                  <span>Explore Master Courses</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>

              <a
                href="#faculty-section"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-border/80 bg-card/60 dark:bg-card/40 backdrop-blur-md text-foreground hover:bg-muted/80 hover:border-border transition-all duration-200 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>Meet Our Faculty</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-border/60 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-foreground">
                  98.8<span className="text-primary">%</span>
                </div>
                <div className="text-xs font-medium text-muted-foreground mt-0.5">
                  Target Score Rate
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-foreground">
                  1,400<span className="text-primary">+</span>
                </div>
                <div className="text-xs font-medium text-muted-foreground mt-0.5">
                  Successful Alumni
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-foreground">
                  90<span className="text-primary">/90</span>
                </div>
                <div className="text-xs font-medium text-muted-foreground mt-0.5">
                  Certified Mentors
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2x3 Interactive Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-card/90 via-card/70 to-card/90 dark:from-card/60 dark:via-card/40 dark:to-card/60 backdrop-blur-xl border border-border/80 shadow-2xl shadow-slate-900/5 dark:shadow-black/20">
              {/* Header inside right card */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-border/60">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Everything You Need to Prepare with Confidence
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Built around Pearson&apos;s authentic automated scoring rubric
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary dark:text-blue-300">
                  <CalendarCheck className="w-3 h-3" /> Live Batches
                </span>
              </div>

              {/* 2x3 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CORE_CAPABILITIES.map((cap, idx) => {
                  const Icon = cap.icon;
                  return (
                    <motion.div
                      key={cap.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.06 }}
                      className="group relative rounded-2xl p-4 bg-muted/40 dark:bg-muted/15 border border-border/60 hover:border-primary/40 hover:bg-card/90 dark:hover:bg-card/70 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary dark:text-blue-300 mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {cap.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                        {cap.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

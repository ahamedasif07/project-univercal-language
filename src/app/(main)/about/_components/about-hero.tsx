"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  GraduationCap,
  Award,
  Users2,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/common/container";

export function AboutHero() {
  return (
    <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50/40 to-background dark:from-blue-950/25 dark:via-slate-950/20 dark:to-background">
      {/* Soft light blue ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-r from-blue-500/12 via-primary/10 to-indigo-500/10 dark:from-blue-500/15 dark:via-primary/15 dark:to-indigo-500/15 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-12 left-10 w-[380px] h-[300px] bg-blue-400/8 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b3a8208_1px,transparent_1px),linear-gradient(to_bottom,#0b3a8208_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Universal Language Academy</span>
          </motion.div>

          {/* Clean, impactful headline matching home page */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.12]"
          >
            PTE Academic{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Expert Coaching
            </span>{" "}
            &amp; Strategic Pedagogy
          </motion.h1>

          {/* Minimal, classy description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            We replace guesswork with algorithmic precision. Led by Pearson-certified master trainers,
            Universal Language delivers authentic, diagnostic-driven coaching designed to secure your
            target score on the very first attempt.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Link href="/courses" className="inline-block group">
              <button className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-[#082b61] hover:to-[#0b3a82] shadow-lg shadow-blue-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer">
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>

            <a
              href="#faculty-section"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-border bg-card/70 hover:bg-muted text-foreground transition-all duration-200 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>Meet Mentors</span>
            </a>
          </motion.div>

          {/* Minimal horizontal trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="pt-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-card/60 dark:bg-card/30 border border-border/70 backdrop-blur-md">
              <div className="space-y-0.5 text-center">
                <div className="text-xl sm:text-2xl font-black text-foreground">98.8%</div>
                <div className="text-[11px] text-muted-foreground font-medium">First Pass Rate</div>
              </div>
              <div className="space-y-0.5 text-center">
                <div className="text-xl sm:text-2xl font-black text-foreground">650+</div>
                <div className="text-[11px] text-muted-foreground font-medium">Students Mentored</div>
              </div>
              <div className="space-y-0.5 text-center">
                <div className="text-xl sm:text-2xl font-black text-foreground">90/90</div>
                <div className="text-[11px] text-muted-foreground font-medium">Certified Mentors</div>
              </div>
              <div className="space-y-0.5 text-center">
                <div className="text-xl sm:text-2xl font-black text-primary">NSDA</div>
                <div className="text-[11px] text-muted-foreground font-medium">Govt. Registered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

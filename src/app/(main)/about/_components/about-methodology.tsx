"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Cpu,
  Layers,
  Trophy,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/common/container";

const STEPS = [
  {
    step: "01",
    icon: Compass,
    title: "Diagnostic Audio & Skill Audit",
    description:
      "We record your natural speaking and writing to audit acoustic cadence, pause thresholds, and grammatical accuracy using Pearson-calibrated matrices.",
    highlight: "Pinpoints exact score gaps",
  },
  {
    step: "02",
    icon: Cpu,
    title: "Algorithmic Question Calibration",
    description:
      "Learn how to satisfy AI algorithms across all 20 question types—from Read Aloud oral flow to Write from Dictation memory anchors.",
    highlight: "Zero risky memorization traps",
  },
  {
    step: "03",
    icon: Layers,
    title: "Official-Standard Mock Simulations",
    description:
      "Sit for full-length timed computer exams replicating test center noise, headset latency, and machine evaluation before you spend exam fees.",
    highlight: "Full diagnostic scorecard review",
  },
  {
    step: "04",
    icon: Trophy,
    title: "First-Attempt Target Score Execution",
    description:
      "Enter the test center with complete mental calmness and strategic confidence, securing your 79+ or 90 to unlock your dream visa or admission.",
    highlight: "98.8% First-attempt milestone",
  },
];

export function AboutMethodology() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-950/30">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
            <span>The Proven Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
            Our 4-Stage{" "}
            <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 dark:from-amber-400 dark:via-amber-300 dark:to-amber-400 bg-clip-text text-transparent">
              Target-Score
            </span>{" "}
            Architecture
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            How we eliminate uncertainty and reliably guide test-takers from confusing mock results to
            verified 79+ and 90 scorecard breakthroughs.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 sm:p-7 rounded-3xl bg-card border border-border/80 hover:border-amber-500/50 hover:shadow-xl dark:hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0b3a82]/8 dark:bg-[#0b3a82]/25 border border-[#0b3a82]/20 text-[#0b3a82] dark:text-blue-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/15 group-hover:border-amber-500/30 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-muted-foreground/30 group-hover:text-amber-500/60 transition-colors">
                    {st.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {st.description}
                  </p>
                </div>

                {/* Highlight Tag */}
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
                  <span>{st.highlight}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

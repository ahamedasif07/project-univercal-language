"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Headphones, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/common/container";

const PILLARS = [
  {
    icon: Cpu,
    title: "Algorithmic Precision",
    description:
      "We replace generic memorization with scoring engine calibration. Learn how automated acoustic and lexical algorithms evaluate oral cadence, pronunciation, and syntax.",
    highlight: "Zero risky templates",
  },
  {
    icon: ShieldCheck,
    title: "Pearson Certified Pedagogy",
    description:
      "Trained directly under Pearson South Asia academic leadership. Every lesson, mock test, and evaluation rubric strictly follows official testing standards.",
    highlight: "Official training standard",
  },
  {
    icon: Headphones,
    title: "1-on-1 Audio Diagnostics",
    description:
      "Daily diagnostic audits analyzing microphone distance, pitch stability, and speech flow—helping you achieve 90/90 in Speaking with your natural accent.",
    highlight: "Natural accent friendly",
  },
];

export function AboutPhilosophy() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-card/30 via-muted/20 to-background border-y border-border/50 relative overflow-hidden">
      <Container>
        {/* Minimal Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Universal Language Difference</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-[1.15]">
            Why Our Students{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Pass First Time
            </span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            A scientific, diagnostic approach to test preparation engineered for predictable results.
          </p>
        </div>

        {/* Minimal 3-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-7 sm:p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-xl dark:hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary dark:text-blue-300 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#0b3a82] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs font-semibold text-primary dark:text-blue-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>{pillar.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

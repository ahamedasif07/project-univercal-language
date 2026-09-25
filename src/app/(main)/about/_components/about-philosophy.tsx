"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Headphones,
  Stethoscope,
  Zap,
  FileCheck2,
  Ticket,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/common/container";

const SERVICES = [
  {
    icon: BrainCircuit,
    title: "Pearson AI Simulation Portal",
    description: "Official-calibrated mock portal replicating test center latency, noise, and exact scoring algorithms.",
  },
  {
    icon: Headphones,
    title: "1-on-1 Acoustic Audio Lab",
    description: "Real-time waveform analysis to fix pitch hesitation, microphone distance, and pronunciation markers.",
  },
  {
    icon: Stethoscope,
    title: "Medical & Migration Pathway",
    description: "Tailored programs for doctors, nurses, and engineers targeting 79+ for AHPRA, GMC, and 20 PR points.",
  },
  {
    icon: Zap,
    title: "Score-Recovery Sprint",
    description: "Targeted 3-week intensive sprint for repeaters who are plateaued between 58 and 64 points.",
  },
  {
    icon: FileCheck2,
    title: "Grammar & Lexical Matrix",
    description: "Foolproof logical templates and formal academic collocations ensuring zero syntax deductions.",
  },
  {
    icon: Ticket,
    title: "Direct Slot & Voucher Booking",
    description: "Official Pearson exam registration support without requiring an international credit card.",
  },
];

export function AboutPhilosophy() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-card/30 via-muted/30 to-background border-y border-border/50 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-primary/5 dark:bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Educational Philosophy & Credo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0b3a82]/20 dark:border-blue-400/30 bg-[#0b3a82]/5 dark:bg-blue-400/10 text-[#0b3a82] dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <span>Our Pedagogical Vision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.18]">
              We Believe:{" "}
              <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 dark:from-amber-400 dark:via-amber-300 dark:to-amber-400 bg-clip-text text-transparent">
                Score Mastery
              </span>{" "}
              is a Science, Not Luck.
            </h2>

            {/* Quote Box */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0b3a82]/8 via-[#0b3a82]/4 to-transparent dark:from-[#0b3a82]/25 dark:via-transparent border-l-4 border-amber-500 rounded-l-md space-y-3">
              <Quote className="w-8 h-8 text-amber-500/40 -mb-2" />
              <p className="text-base sm:text-lg font-semibold text-foreground/90 italic leading-relaxed">
                &ldquo;PTE success is not only about English proficiency. It&apos;s about understanding the
                automated exam system strategically.&rdquo;
              </p>
              <div className="text-xs font-bold text-amber-600 dark:text-amber-400 tracking-wide uppercase">
                — Universal Language Academic Directorate
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Standard language academies teach PTE like a conventional classroom, relying on generic
                memorization and rote drills. However, Pearson uses automated speech processing algorithms,
                computational semantic scoring, and machine acoustic models.
              </p>
              <p>
                At Universal Language, we train you from the perspective of the machine. We teach you how
                the acoustic model interprets pause thresholds, how lexical collocations generate reading
                points, and how structured essay blueprints eliminate syntax penalties.
              </p>
            </div>

            {/* Strategic Pillars checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-foreground/90">
              {[
                "Zero Artificial Accent Pressure",
                "Pearson-Calibrated Mock Scoring",
                "Direct Trainer WhatsApp Access",
                "Daily Speaking Diagnostic Labs",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                Institutional Capabilities
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-foreground mt-1">
                Our Comprehensive Academic Ecosystem
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <motion.div
                    key={srv.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.07 }}
                    className="group relative p-5 rounded-2xl bg-card border border-border/80 hover:border-amber-500/40 hover:shadow-lg dark:hover:shadow-amber-500/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0b3a82]/8 dark:bg-[#0b3a82]/20 border border-[#0b3a82]/20 text-[#0b3a82] dark:text-blue-300 flex items-center justify-center mb-3 group-hover:scale-105 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-foreground group-hover:text-[#0b3a82] dark:group-hover:text-blue-300 transition-colors">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                      {srv.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

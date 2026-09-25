"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, ArrowDownRight } from "lucide-react";
import { Container } from "@/components/common/container";

export function ServicesHero() {
  return (
    <section className="relative pt-16 pb-14 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-100/75 via-blue-50/50 to-background dark:from-blue-950/50 dark:via-slate-950/40 dark:to-background">
      {/* Richer, more visible ambient blue lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[920px] h-[460px] bg-gradient-to-r from-blue-500/25 via-[#0b3a82]/20 to-indigo-500/25 dark:from-blue-500/30 dark:via-primary/25 dark:to-indigo-500/30 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 left-5 w-[420px] h-[320px] bg-blue-400/20 dark:bg-blue-500/20 blur-[110px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-5 w-[420px] h-[320px] bg-sky-400/18 dark:bg-indigo-500/20 blur-[110px] rounded-full pointer-events-none -z-10" />

      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b3a820a_1px,transparent_1px),linear-gradient(to_bottom,#0b3a820c_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/6 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-widest"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Courses &amp; Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black tracking-tight text-foreground leading-[1.1]"
          >
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Score High
            </span>{" "}
            &amp; Study Abroad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.16 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            From beginner English to PTE 90, from exam booking to study abroad
            counselling — Universal Language covers every step of your journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground pt-2"
          >
            <ArrowDownRight className="w-4 h-4 animate-bounce text-primary" />
            <span>Explore all 7 packages below</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

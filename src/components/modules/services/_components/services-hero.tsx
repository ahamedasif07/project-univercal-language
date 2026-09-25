"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, ArrowDownRight } from "lucide-react";
import { Container } from "@/components/common/container";

export function ServicesHero() {
  return (
    <section className="relative pt-16 pb-14 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[420px] bg-primary/8 dark:bg-primary/12 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[300px] bg-blue-500/6 dark:bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none -z-10" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/6 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-widest"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Courses & Services</span>
          </motion.div>

          {/* Headline */}
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
            & Study Abroad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.16 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            From beginner English to PTE 90, from exam booking to study abroad counselling — 
            Universal Language has one solution for every step of your journey.
          </motion.p>

          {/* Scroll cue */}
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

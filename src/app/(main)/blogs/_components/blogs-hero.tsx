"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Container } from "@/components/common/container";

export function BlogsHero() {
  return (
    <section className="relative pt-16 pb-14 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[350px] bg-primary/8 dark:bg-primary/12 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue-500/6 dark:bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none -z-10" />

      <Container>
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/6 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-widest"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Insights &amp; Guides</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1]"
          >
            Language Learning{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Blog
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Expert strategies, study guides, and exam insights from Universal Language&apos;s
            certified PTE, IELTS, German, and study abroad mentors.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}

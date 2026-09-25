"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Globe2, Users } from "lucide-react";
import { Container } from "@/components/common/container";

export function AboutHero() {
  return (
    <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/8 dark:bg-primary/12 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-blue-500/8 dark:bg-indigo-500/12 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none -z-10" />

      <Container>
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/6 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Our Story</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1]"
          >
            Shaping{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Global Futures
            </span>{" "}
            from Dhaka
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Universal Language was built on one conviction — every student in Bangladesh
            deserves access to world-class language coaching that actually gets them
            their target score and opens doors to universities abroad.
          </motion.p>

          {/* Quick stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 pt-4"
          >
            {[
              { icon: Users, label: "150+ Students Mentored", color: "text-blue-500" },
              { icon: Globe2, label: "12+ Countries Reached", color: "text-emerald-500" },
              { icon: GraduationCap, label: "96% First-Attempt Pass Rate", color: "text-purple-500" },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                <Icon className={`w-4 h-4 ${color}`} />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

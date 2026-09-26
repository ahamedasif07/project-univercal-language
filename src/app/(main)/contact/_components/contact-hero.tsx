"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Container } from "@/components/common/container";

export function ContactHero() {
  return (
    <section className="relative pt-16 pb-14 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-100/75 via-blue-50/50 to-background dark:from-blue-950/50 dark:via-slate-950/40 dark:to-background">
      {/* Richer, more visible ambient blue lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[920px] h-[460px] bg-gradient-to-r from-blue-500/25 via-[#0b3a82]/20 to-indigo-500/25 dark:from-blue-500/30 dark:via-primary/25 dark:to-indigo-500/30 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 left-5 w-[420px] h-[320px] bg-blue-400/20 dark:bg-blue-500/20 blur-[110px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-5 w-[420px] h-[320px] bg-sky-400/18 dark:bg-indigo-500/20 blur-[110px] rounded-full pointer-events-none -z-10" />

      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b3a820a_1px,transparent_1px),linear-gradient(to_bottom,#0b3a820c_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

      <Container>
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/6 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-widest"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1]"
          >
            We Are Here to{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Help You
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Have a question about courses, exam booking, or study abroad counselling? Our
            mentors respond within 24 hours — or chat immediately with an academic advisor on WhatsApp.
          </motion.p>

          {/* Quick Direct WhatsApp & Email CTA in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <a
              href="https://wa.me/8801772224283?text=Hello%20Universal%20Language,%20I%20would%20like%20to%20learn%20more%20about%20your%20PTE%20and%20language%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
                <path d="M12.031 2C6.516 2 2.025 6.491 2.025 12.006c0 1.942.556 3.76 1.523 5.305L2 22l4.839-1.526a9.96 9.96 0 0 0 5.192 1.458h.004c5.514 0 10.005-4.491 10.005-10.006A10.01 10.01 0 0 0 12.031 2zm5.828 14.188c-.244.686-1.42 1.309-1.968 1.391-.525.078-1.207.112-3.486-.83-2.915-1.206-4.793-4.185-4.939-4.379-.142-.194-1.18-1.572-1.18-2.998 0-1.426.746-2.128 1.01-2.42.264-.292.576-.365.768-.365.193 0 .385.002.553.01.179.008.419-.068.656.5.244.584.83 2.028.903 2.174.073.146.122.316.024.51-.097.194-.146.316-.292.486-.146.17-.308.38-.44.51-.146.146-.298.305-.128.597.17.292.756 1.246 1.623 2.019 1.115.993 2.055 1.302 2.347 1.448.292.146.463.122.633-.073.17-.195.731-.852.926-1.144.195-.292.39-.244.657-.146.268.097 1.706.804 1.998.95.292.146.487.219.56.341.073.122.073.706-.171 1.392z" />
              </svg>
              <span>Chat on WhatsApp</span>
              <span className="w-2 h-2 rounded-full bg-emerald-200 animate-pulse ml-0.5" />
            </a>

            <a
              href="mailto:info@universallanguage.com.bd"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border/80 hover:border-primary/50 text-foreground font-bold text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>Email: info@universallanguage.com.bd</span>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/common/container";

const PROCESS = [
  {
    step: "01",
    label: "Free Consultation",
    desc: "Tell us your target score, timeline, and exam date. We identify the best course fit in 15 minutes.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    step: "02",
    label: "Diagnostic Mock",
    desc: "Take a free AI diagnostic mock to expose your exact score leaks before we build your study plan.",
    gradient: "from-[#0b3a82] to-blue-600",
  },
  {
    step: "03",
    label: "Enroll & Start",
    desc: "Pay via bKash, Nagad, or bank transfer. Your first class is usually scheduled within 24 hours.",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    step: "04",
    label: "Score & Study Abroad",
    desc: "Hit your target score with your mentor's guidance, then get SOP and university application support.",
    gradient: "from-purple-600 to-violet-600",
  },
];

export function ServicesProcess() {
  return (
    <section className="py-20 sm:py-28 border-t border-border/40 bg-gradient-to-b from-background via-muted/15 to-background overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/6 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
            From Zero to Enrolled in{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-border/50 z-0" />
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.52, delay: i * 0.12 }}
              className="relative z-10 text-center flex flex-col items-center gap-4"
            >
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex flex-col items-center justify-center shadow-xl`}
              >
                <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Step</span>
                <span className="text-2xl font-black text-white">{step.step}</span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-black text-foreground">{step.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-48 mx-auto">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#060e2b] via-[#0b3a82] to-[#1a56b0] p-10 sm:p-14 text-center"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Start Your Free Assessment Today
            </h2>
            <p className="text-blue-100/85 text-base sm:text-lg leading-relaxed">
              No commitment. No payment upfront. Just a 15-minute session with a certified
              mentor who will map your fastest path to your target score.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link href="/register" className="inline-block group focus:outline-none">
                <button className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold tracking-wide text-primary bg-white hover:bg-blue-50 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-primary/10 to-transparent pointer-events-none" />
                  <span className="relative z-10">Book Free Assessment</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
              <a
                href="https://wa.me/8801772224283?text=Hello%20Universal%20Language,%20I%20want%20to%20enroll%20in%20a%20course."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border border-white/25 bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-emerald-300" />
                WhatsApp Admissions
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

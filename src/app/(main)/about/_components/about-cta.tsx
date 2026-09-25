"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/common/container";

export function AboutCta() {
  return (
    <section className="py-20 sm:py-28 border-t border-border/40 bg-gradient-to-b from-background via-muted/10 to-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b3a82] via-primary to-blue-600 p-10 sm:p-14 text-center"
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Ready to Start Your Journey?
            </h2>
            <p className="text-blue-100/90 text-base sm:text-lg leading-relaxed">
              Book a free 15-minute diagnostic session. Our mentors will identify your exact
              score gaps and hand you a personalised study roadmap — no commitment required.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link href="/register" className="inline-block group focus:outline-none">
                <button className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold tracking-wide uppercase text-primary bg-white hover:bg-blue-50 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-primary/10 to-transparent pointer-events-none" />
                  <span className="relative z-10">Book Free Assessment</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
              <a
                href="https://wa.me/8801772224283?text=Hello%20Universal%20Language,%20I%20want%20to%20know%20more%20about%20your%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border border-white/25 bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-emerald-300" />
                <span>WhatsApp Us</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

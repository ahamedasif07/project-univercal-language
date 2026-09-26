import React from "react";
import type { Metadata } from "next";
import { HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/common/container";
import { FaqSection } from "@/components/modules/home/faq-section";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Universal Language",
  description:
    "Find answers to common questions about Universal Language's Pearson PTE coaching, NSDA government accreditation, exam voucher booking, and score guarantee programs.",
  alternates: {
    canonical: "https://universallanguage.com.bd/faq",
  },
};

export default function FaqPage() {
  return (
    <div className="w-full min-h-screen">
      {/* ── 1. Hero with matching visible light blue background ── */}
      <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-100/75 via-blue-50/50 to-background dark:from-blue-950/50 dark:via-slate-950/40 dark:to-background">
        {/* Rich visible ambient blue lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[920px] h-[460px] bg-gradient-to-r from-blue-500/25 via-[#0b3a82]/20 to-indigo-500/25 dark:from-blue-500/30 dark:via-primary/25 dark:to-indigo-500/30 blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-10 left-5 w-[420px] h-[320px] bg-blue-400/20 dark:bg-blue-500/20 blur-[110px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-10 right-5 w-[420px] h-[320px] bg-sky-400/18 dark:bg-indigo-500/20 blur-[110px] rounded-full pointer-events-none -z-10" />

        {/* Blueprint grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b3a820a_1px,transparent_1px),linear-gradient(to_bottom,#0b3a820c_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Help &amp; Knowledge Base</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.12]">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about our Pearson-certified PTE coaching, NSDA
              government registration, credit-card-free exam booking, and score guarantee pathways.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 2. Official Home Page Categorized FAQ Section ── */}
      <FaqSection />

      {/* ── 3. Still Have Questions Callout ── */}
      <section className="py-16 sm:py-20 border-t border-border/60 bg-gradient-to-b from-card/30 via-background to-background">
        <Container>
          <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-lg text-center space-y-4">
            <h3 className="text-2xl font-black text-foreground">
              Didn&apos;t Find Your Answer?
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Our academic advisors are available on WhatsApp to answer any specific questions regarding your preparation.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/8801772224283?text=Hello%20Universal%20Language,%20I%20have%20a%20question%20regarding%20your%20coaching%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-[#082b61] hover:to-[#0b3a82] shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

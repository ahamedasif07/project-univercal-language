"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

interface FaqItem {
  id: string;
  category: "accreditation" | "coaching" | "booking" | "general";
  question: string;
  answer: string;
  badge: string;
  highlights?: string[];
}

const FAQS: FaqItem[] = [
  {
    id: "legal-status",
    category: "accreditation",
    badge: "Government Accreditation",
    question: "Is Universal Language officially registered with the Government?",
    answer:
      "Yes, absolutely. Universal Language is officially registered under the Prime Minister's Office — National Skills Development Authority (NSDA). This statutory registration certifies that our training infrastructure, curriculum standards, and learning hours are officially recognized by Bangladesh national skills frameworks and authorized visa authorities.",
    highlights: ["PMO (NSDA) Registered", "100% Genuine Legal Status", "Audited Training Facility"],
  },
  {
    id: "pearson-mentors",
    category: "coaching",
    badge: "Pearson Master Trainer",
    question: "How is your mentorship different from other coaching centres?",
    answer:
      "Our lead mentors are trained and certified directly by Pearson's South Asia Academic Lead, Shonali Khanna. Unlike institutions that rely on leaked internet 'templates' which Pearson's 2024 AI algorithm actively penalizes, we teach Pearson's authentic pedagogical scaffolding, speech acoustic fluency correction, and rubric-based summarization techniques.",
    highlights: ["Pearson South Asia Certified", "Zero AI-Penalty Templates", "1-on-1 Pitch Correction"],
  },
  {
    id: "exam-booking",
    category: "booking",
    badge: "Pearson Exam Booking",
    question: "Can I book my Pearson PTE exam without an international credit card?",
    answer:
      "Yes. Universal Language is an authorized Pearson PTE Academic test voucher and booking partner. You can reserve your preferred exam slot and test center in Dhaka without any credit card endorsement, foreign currency markups, or payment failure risks using local bKash, Nagad, or direct bank transfer.",
    highlights: ["bKash / Nagad Accepted", "Zero Foreign Bank Markups", "Instant Slot Confirmation"],
  },
  {
    id: "alfa-pte-portal",
    category: "coaching",
    badge: "AI Scoring Portal",
    question: "What is your Alfa PTE AI partnership, and how does it help students?",
    answer:
      "As an official Alfa PTE Institutional Partner, every enrolled student receives VIP access to Pearson-calibrated artificial intelligence scoring software. This provides real-time acoustic feedback on oral fluency, pronunciation pitch, and high-frequency real exam questions—eliminating surprises on test day.",
    highlights: ["Official Pearson AI Calibration", "Speech Fluency Analytics", "Weekly Question Bank"],
  },
  {
    id: "score-guarantee",
    category: "coaching",
    badge: "Target 79+ Roadmap",
    question: "My English foundation is weak (below 50). Can I realistically achieve 65+ or 79+?",
    answer:
      "Yes. Over 96% of our students achieve their target score on their first attempt after our mentorship. We begin with a 10-minute diagnostic evaluation to identify your exact score leaks (e.g. Read Aloud pitch, repeat sentence memory, or write-from-dictation spelling). Then, we build a customized 3 to 6-week daily drill schedule that bridges foundation gaps systematically.",
    highlights: ["Diagnostic Speaking Analysis", "45 to 79+ Roadmap", "96% First-Attempt Success"],
  },
  {
    id: "campus-visit",
    category: "accreditation",
    badge: "Institutional Transparency",
    question: "Can students and parents inspect your original accreditation certificates in person?",
    answer:
      "Yes, we warmly encourage it. We believe in complete transparency. You and your guardians are welcome to visit our Dhanmondi Campus to review original registration documents, meet our Pearson-certified mentors face-to-face, and receive a free diagnostic consultation.",
    highlights: ["Dhanmondi Campus", "Physical Document Inspection", "Free Mentor Consultation"],
  },
  {
    id: "class-timings",
    category: "general",
    badge: "Flexible Schedules",
    question: "Do you offer evening or weekend batches for working professionals?",
    answer:
      "Yes. We offer both offline classroom sessions at our Dhanmondi Campus and live interactive online sessions. Timings include morning, evening, and exclusive Friday/Saturday weekend batches designed specifically for doctors, engineers, bankers, and study abroad applicants.",
    highlights: ["Offline & Live Online", "Evening & Weekend Batches", "Recorded Session Access"],
  },
];

type CategoryFilter = "all" | "accreditation" | "coaching" | "booking";

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [expandedId, setExpandedId] = useState<string | null>("legal-status");

  const filteredFaqs = FAQS.filter((faq) => {
    if (activeCategory === "all") return true;
    return faq.category === activeCategory;
  });

  const toggleFaq = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-background via-muted/10 to-background border-t border-border/60 overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-primary/5 dark:bg-primary/8 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[280px] bg-blue-500/5 dark:bg-blue-500/8 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? Clear Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
            Frequently Asked Questions:{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Everything You Need to Know
            </span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Clear, transparent answers about our Prime Minister&apos;s Office (NSDA)
            registration, Pearson-certified trainers, Alfa PTE AI testing portal, and exam voucher booking.
          </p>

          {/* Category Filter Tabs */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex p-1 rounded-2xl bg-slate-200/60 dark:bg-slate-900 border border-slate-300/60 dark:border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  activeCategory === "all"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Questions ({FAQS.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("accreditation")}
                className={`px-4 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  activeCategory === "accreditation"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Accreditation &amp; Legality
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("coaching")}
                className={`px-4 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  activeCategory === "coaching"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                PTE Prep &amp; Score
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("booking")}
                className={`px-4 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  activeCategory === "booking"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Exam Booking
              </button>
            </div>
          </div>
        </div>

        {/* ── Interactive Accordion FAQ List ── */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? "border-primary/40 bg-card shadow-md dark:border-primary/30"
                    : "border-border/70 bg-card/70 hover:border-border hover:bg-card dark:bg-card/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none select-none"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1.5 min-w-0 pr-2">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-primary dark:text-blue-300">
                      {faq.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border border-border/80 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isExpanded
                        ? "bg-primary text-primary-foreground rotate-180 border-primary"
                        : "bg-muted/60 text-muted-foreground"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/40 animate-in fade-in-50 duration-200">
                    <p className="text-foreground/90">{faq.answer}</p>

                    {faq.highlights && (
                      <div className="flex flex-wrap gap-2 pt-3.5 mt-2">
                        {faq.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-primary/10 text-primary dark:text-blue-300 border border-primary/20"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Bottom Instant Question & Mentor Support Bar ── */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#0b2545] via-[#0b3a82] to-[#124285] text-white p-6 sm:p-8 shadow-xl border border-blue-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-200 tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              1-on-1 Consultation Guarantee
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Have a specific question about your score or visa deadline?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl leading-relaxed">
              Message our certified Pearson mentor on WhatsApp or visit our Dhanmondi Campus for a free 10-minute diagnostic speaking evaluation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/8801831251910?text=Hello%20Universal%20Language,%20I%20have%20a%20question%20regarding%20PTE%20Academic%20preparation%20and%20exam%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>

            <a
              href="tel:+8801831251910"
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-all border border-white/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-blue-200" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

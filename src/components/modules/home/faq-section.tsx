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
    highlights: [
      "PMO (NSDA) Registered",
      "100% Genuine Legal Status",
      "Audited Training Facility",
    ],
  },
  {
    id: "pearson-mentors",
    category: "coaching",
    badge: "Pearson Master Trainer",
    question: "How is your mentorship different from other coaching centres?",
    answer:
      "Our lead mentors are trained and certified directly by Pearson's South Asia Academic Lead, Shonali Khanna. Unlike institutions that rely on leaked internet 'templates' which Pearson's 2024 AI algorithm actively penalizes, we teach Pearson's authentic pedagogical scaffolding, speech acoustic fluency correction, and rubric-based summarization techniques.",
    highlights: [
      "Pearson South Asia Certified",
      "Zero AI-Penalty Templates",
      "1-on-1 Pitch Correction",
    ],
  },
  {
    id: "exam-booking",
    category: "booking",
    badge: "Pearson Exam Booking",
    question: "Can I book my Pearson PTE exam without an international credit card?",
    answer:
      "Yes. Universal Language is an authorized Pearson PTE Academic test voucher and booking partner. You can reserve your preferred exam slot and test center in Dhaka without any credit card endorsement, foreign currency markups, or payment failure risks using local bKash, Nagad, or direct bank transfer.",
    highlights: [
      "bKash / Nagad Accepted",
      "Zero Foreign Bank Markups",
      "Instant Slot Confirmation",
    ],
  },
  {
    id: "alfa-pte-portal",
    category: "coaching",
    badge: "AI Scoring Portal",
    question: "What is your Alfa PTE AI partnership, and how does it help students?",
    answer:
      "As an official Alfa PTE Institutional Partner, every enrolled student receives VIP access to Pearson-calibrated artificial intelligence scoring software. This provides real-time acoustic feedback on oral fluency, pronunciation pitch, and high-frequency real exam questions—eliminating surprises on test day.",
    highlights: [
      "Official Pearson AI Calibration",
      "Speech Fluency Analytics",
      "Weekly Question Bank",
    ],
  },
  {
    id: "score-guarantee",
    category: "coaching",
    badge: "Target 79+ Roadmap",
    question:
      "My English foundation is weak (below 50). Can I realistically achieve 65+ or 79+?",
    answer:
      "Yes. Over 96% of our students achieve their target score on their first attempt after our mentorship. We begin with a 10-minute diagnostic evaluation to identify your exact score leaks (e.g. Read Aloud pitch, repeat sentence memory, or write-from-dictation spelling). Then, we build a customized 3 to 6-week daily drill schedule that bridges foundation gaps systematically.",
    highlights: [
      "Diagnostic Speaking Analysis",
      "45 to 79+ Roadmap",
      "96% First-Attempt Success",
    ],
  },
  {
    id: "credential-verification",
    category: "accreditation",
    badge: "Official Verification",
    question:
      "How can students and parents verify your official registration and credentials?",
    answer:
      "We maintain 100% transparency. Our statutory NSDA registration numbers, Pearson Master Trainer credentials, and Alfa PTE institutional partnerships can be verified directly online via government registries and official QR verification codes. You can also request verified digital document copies directly via WhatsApp or consult live with our mentors.",
    highlights: [
      "Online Registry Verified",
      "Official QR Accreditation",
      "Direct Mentor Guidance",
    ],
  },
  {
    id: "class-timings",
    category: "general",
    badge: "Flexible Schedules",
    question: "Do you offer evening or weekend batches for working professionals?",
    answer:
      "Yes. All our courses are conducted through live interactive online sessions with small batch sizes for focused 1-on-1 mentor guidance. Timings include convenient morning, evening, and dedicated Friday/Saturday weekend batches designed specifically for university students, professionals, and study abroad applicants.",
    highlights: [
      "Live Interactive Online",
      "Evening & Weekend Batches",
      "Recorded Session Access",
    ],
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
      className="relative py-20 lg:py-26 bg-gradient-to-b from-background via-slate-50/50 to-background dark:from-background dark:via-muted/10 dark:to-background border-t border-slate-200/70 dark:border-white/[0.06] overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[300px] bg-primary/4 dark:bg-primary/8 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[280px] bg-blue-500/4 dark:bg-blue-500/8 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-semibold uppercase tracking-wider shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-[1.2]">
            Got Questions?{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Clear &amp; Honest Answers
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
            Straightforward details about our live batches, Pearson master trainers, AI
            practice portal, and exam booking support.
          </p>

          {/* Category Filter Tabs */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-md shadow-2xs">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === "all"
                    ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-xs border border-slate-200/70 dark:border-slate-700"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                All ({FAQS.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("accreditation")}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === "accreditation"
                    ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-xs border border-slate-200/70 dark:border-slate-700"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                Registration &amp; Trust
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("coaching")}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === "coaching"
                    ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-xs border border-slate-200/70 dark:border-slate-700"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                PTE Preparation
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("booking")}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === "booking"
                    ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-xs border border-slate-200/70 dark:border-slate-700"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                Exam Booking
              </button>
            </div>
          </div>
        </div>

        {/* ── Interactive Accordion FAQ List ── */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isExpanded = expandedId === faq.id;

            return (
              <div
                key={faq.id}
                className={`group relative rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? "border-primary/30 dark:border-primary/35 bg-white dark:bg-card/90 shadow-[0_8px_24px_-6px_rgba(11,58,130,0.06),0_2px_8px_-2px_rgba(0,0,0,0.02)] dark:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] ring-1 ring-primary/10 dark:ring-primary/20"
                    : "border-slate-200/80 dark:border-white/[0.07] bg-white/70 dark:bg-card/40 hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-white dark:hover:bg-card/70 hover:shadow-xs"
                }`}
              >
                {/* Active Left Accent Hairline */}
                <div
                  className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-gradient-to-b from-primary via-blue-500 to-indigo-500 transition-opacity duration-200 ${
                    isExpanded ? "opacity-100" : "opacity-0"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4.5 sm:p-5 text-left flex items-start justify-between gap-4 sm:gap-6 cursor-pointer focus:outline-none select-none group"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-3.5 sm:gap-4 min-w-0 pr-2">
                    {/* Monospace Index Badge */}
                    <div
                      className={`shrink-0 w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg border flex items-center justify-center font-mono text-[11px] font-semibold transition-all duration-200 mt-0.5 ${
                        isExpanded
                          ? "bg-primary/10 border-primary/25 text-primary dark:text-blue-300"
                          : "bg-slate-100/80 dark:bg-white/[0.03] border-slate-200/70 dark:border-white/[0.08] text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Content block: Badge + Question */}
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10.5px] font-semibold tracking-wide uppercase transition-colors duration-200 ${
                            isExpanded
                              ? "bg-primary/10 text-primary dark:text-blue-300 border border-primary/20"
                              : "bg-slate-100 dark:bg-white/[0.04] text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-white/[0.06] group-hover:text-slate-700 dark:group-hover:text-slate-300"
                          }`}
                        >
                          {faq.badge}
                        </span>
                      </div>

                      <h3
                        className={`text-[15px] sm:text-[17px] font-semibold tracking-tight leading-snug transition-colors duration-200 ${
                          isExpanded
                            ? "text-primary dark:text-blue-300 font-bold"
                            : "text-slate-800 dark:text-slate-200 group-hover:text-primary dark:group-hover:text-blue-300"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Rotating Chevron Container */}
                  <div
                    className={`w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5 ${
                      isExpanded
                        ? "bg-primary text-primary-foreground border-primary shadow-xs shadow-primary/25 rotate-180"
                        : "bg-slate-100/70 dark:bg-white/[0.03] border-slate-200/80 dark:border-white/[0.08] text-slate-500 dark:text-slate-400 group-hover:border-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4.5 sm:px-5 pb-5 pt-0 text-sm leading-relaxed animate-in fade-in-50 duration-200">
                    <div className="h-px w-full bg-slate-100 dark:bg-white/[0.06] mb-3.5 sm:ml-11" />

                    <div className="sm:pl-11">
                      <p className="text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {faq.answer}
                      </p>

                      {faq.highlights && (
                        <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-white/[0.05]">
                          <div className="text-[10.5px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-primary dark:text-blue-400" />
                            <span>Key Takeaways</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {faq.highlights.map((h, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.06] text-xs font-medium text-slate-700 dark:text-slate-300"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-blue-400 shrink-0" />
                                <span className="truncate">{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Direct Assistance Prompt Box ── */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-white/[0.08] bg-white/70 dark:bg-card/40 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xs">
          <div className="space-y-0.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:text-blue-300">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Need Direct Guidance?</span>
            </div>
            <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">
              Talk directly with our academic advisor
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Get immediate answers about batch schedules, diagnostic test assessment, or
              Pearson exam voucher booking.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/8801844909000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold shadow-xs hover:bg-primary/90 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp </span>
            </a>
            <a
              href="tel:+8801831251910"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-slate-500" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

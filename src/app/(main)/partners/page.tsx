import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  Globe2,
  TicketPercent,
  BrainCircuit,
  BookOpen,
  ArrowRight,
  PhoneCall,
  Building2,
} from "lucide-react";
import {
  GovCrest,
  PearsonCrest,
  AlfaCrest,
} from "@/components/modules/home/certificate-crests";

export const metadata: Metadata = {
  title: "Official Partners & Institutional Affiliations | Universal Language",
  description:
    "Universal Language is an authorized Pearson Education Academy, Alfa PTE Institutional Assessment Partner, and NSDA Government Registered Training Center in Dhaka, Bangladesh.",
  alternates: {
    canonical: "https://universallanguage.com.bd/partners",
  },
};

const OFFICIAL_PARTNERS = [
  {
    name: "Pearson Education",
    badge: "Authorized Preparation Partner",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    crest: <PearsonCrest className="w-14 h-14" />,
    role: "PTE Academic Global Examination Body",
    description:
      "Universal Language operates as an authorized Pearson Education partner, providing genuine PTE Academic test vouchers, official preparation curriculum, and Pearson-certified instruction.",
    benefits: [
      "Official PTE Academic exam vouchers at discounted institutional pricing",
      "Authentic Pearson test materials, question banks, and teacher manuals",
      "Direct Pearson-trained expert mentor guidance",
    ],
  },
  {
    name: "Alfa PTE",
    badge: "Institutional AI Platform Partner",
    badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    crest: <AlfaCrest className="w-14 h-14" />,
    role: "AI Mock Test & Diagnostic Scoring Portal",
    description:
      "Direct institutional integration with Alfa PTE, granting our students access to Pearson-aligned AI scoring algorithms, unlimited full-length mock exams, and real-time speech analytics.",
    benefits: [
      "Automated Pearson-standard speech and writing AI evaluation",
      "Unlimited mock tests with detailed item-by-item breakdown",
      "Real test environment simulator with Pearson user interface",
    ],
  },
  {
    name: "NSDA - Prime Minister's Office",
    badge: "Statutory Government Registry",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    crest: <GovCrest className="w-14 h-14" />,
    role: "National Skills Development Authority",
    description:
      "Legally registered training institution under the National Skills Development Authority (NSDA), ensuring our English proficiency courses comply with national quality frameworks.",
    benefits: [
      "Government-recognized institutional training center registration",
      "Adherence to national curriculum quality benchmarks",
      "Certified and verified training documentation for students",
    ],
  },
  {
    name: "Cambridge & British Council Framework",
    badge: "Curriculum & Test Benchmark",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    crest: (
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-md">
        <GraduationCap className="w-7 h-7" />
      </div>
    ),
    role: "IELTS Preparation & CEFR Language Alignment",
    description:
      "Our IELTS curriculum aligns with Cambridge English Language Assessment standards and Common European Framework of Reference for Languages (CEFR) levels.",
    benefits: [
      "Cambridge-aligned Band 8+ test-taking techniques and mock evaluation",
      "Official British Council / IDP test registration assistance",
      "Rigorous diagnostic assessments for Academic & General Training",
    ],
  },
];

const PARTNERSHIP_BENEFITS = [
  {
    icon: <TicketPercent className="w-6 h-6 text-primary" />,
    title: "Discounted Exam Vouchers",
    description:
      "Save on your official PTE Academic test booking with verified institutional voucher codes.",
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
    title: "AI-Powered Test Software",
    description:
      "Practice on full-scale AI mock portals that simulate real Pearson test conditions and score criteria.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    title: "Authentic Materials",
    description:
      "Study with authentic, regularly updated test question banks and officially sanctioned learning guides.",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    title: "Global University Pathways",
    description:
      "Your scores and certificates are recognized worldwide across Australia, the UK, Canada, the USA, and Europe.",
  },
];

export default function PartnersPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-blue-900/10 via-background to-background border-b border-border/40 overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Authorized &amp; Statutorily Accredited</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
            Our Official{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Partners &amp; Affiliations
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Universal Language collaborates with globally recognized examination bodies, AI testing
            platforms, and government statutory registries to guarantee authentic training and
            verified success for every student.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Pearson Authorized Academy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Alfa PTE Institutional Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>NSDA Prime Minister&apos;s Office Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Official Partners Grid */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
              Official Institutional Network
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Direct affiliations that power our mock testing labs, certification credentials, and exam voucher booking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {OFFICIAL_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="group relative rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-4 pb-5 border-b border-border/50">
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                        {partner.crest}
                      </div>
                      <div>
                        <span
                          className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-1 ${partner.badgeColor}`}
                        >
                          {partner.badge}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">
                          {partner.name}
                        </h3>
                        <p className="text-xs text-muted-foreground font-medium">
                          {partner.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="py-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {partner.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-foreground/80">
                      Key Highlights:
                    </div>
                    {partner.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Benefits Section */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
              What This Means for Students
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Direct partnerships translate to authentic test preparation, lower exam costs, and verified results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNERSHIP_BENEFITS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/60 bg-card p-6 space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration / Call to Action */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-blue-500/5 p-8 sm:p-12 text-center space-y-6 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Institutional Collaboration</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
              Looking to Partner with Universal Language?
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              We collaborate with colleges, universities, study abroad agencies, and educational institutions
              for institutional batch training, corporate English proficiency, and bulk voucher booking.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow hover:bg-primary/90 transition-colors"
              >
                <span>Contact Partnership Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+8801772224283"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card font-semibold text-sm text-foreground hover:bg-muted transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-primary" />
                <span>+880 1772-224283</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Award,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  Users,
  MessageCircle,
  Mail,
  MapPin,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Container } from "@/components/common/container";
import { FOUNDER_PROFILE } from "@/data/instructors";
import { CeoCertificates } from "./_components/ceo-certificates";

export const metadata: Metadata = {
  title: "Md Sohanor Rahman Shifat - Founder & CEO | Universal Language",
  description:
    "Profile and executive journey of Md Sohanor Rahman Shifat, Founder & CEO of Universal Language. Discover his 3+ years in PTE education, 600+ student leads guided, and 8 official Pearson accreditations.",
  alternates: {
    canonical: "https://universallanguage.com.bd/about/ceo",
  },
  openGraph: {
    title: "Md Sohanor Rahman Shifat - Founder & CEO | Universal Language",
    description:
      "Educational entrepreneur and Founder & CEO of Universal Language, connecting students with quality language learning and certified Pearson preparation.",
    url: "https://universallanguage.com.bd/about/ceo",
    images: [
      {
        url: "/images/ceo/ceo-sifat-pp.jpeg",
        width: 1200,
        height: 1200,
        alt: "Md Sohanor Rahman Shifat - Founder & CEO",
      },
    ],
  },
};

export default function CeoProfilePage() {
  const whatsappUrl =
    "https://wa.me/8801772224283?text=" +
    encodeURIComponent(
      "Hello Md Sohanor Rahman Shifat Sir, I would like to consult with you regarding Universal Language and PTE preparation programs."
    );

  return (
    <div className="w-full min-h-screen pb-24 bg-gradient-to-b from-background via-slate-50/40 to-background dark:via-slate-950/20">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-border/60 bg-muted/20 backdrop-blur-md py-4">
        <Container>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-foreground">
              Md Sohanor Rahman Shifat (Founder &amp; CEO)
            </span>
          </div>
        </Container>
      </div>

      {/* Executive Hero Section */}
      <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-10 left-1/4 w-[600px] h-[350px] bg-primary/10 dark:bg-primary/15 blur-[140px] rounded-full pointer-events-none -z-10" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Executive Portrait & Identity Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 dark:border-primary/40 shadow-2xl bg-slate-900 group">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={FOUNDER_PROFILE.image}
                    alt={FOUNDER_PROFILE.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081528] via-[#081528]/40 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0b3a82] text-white font-bold text-xs shadow-lg border border-white/20">
                    <Award className="w-4 h-4 text-blue-300" />
                    <span>Founder &amp; CEO</span>
                  </div>

                  {/* Bottom details on image */}
                  <div className="absolute bottom-5 left-5 right-5 z-10 text-white space-y-1">
                    <p className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                      Universal Language Leadership
                    </p>
                    <h1 className="text-2xl sm:text-3xl font-black text-white">
                      {FOUNDER_PROFILE.name}
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Founder &amp; Chief Executive Officer (CEO)
                    </p>
                  </div>
                </div>
              </div>

              {/* Executive Overview Card */}
              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      Executive Leadership
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Platform Operations &amp; Academic Vision
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-muted-foreground pt-1 border-t border-border/60">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">Academic Focus</span>
                    <span className="font-semibold text-primary">PTE &amp; Foreign Language</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">Industry Experience</span>
                    <span className="font-semibold text-foreground">3+ Years PTE Sector</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">Student Leads Handled</span>
                    <span className="font-semibold text-foreground">600+ Candidates</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">Accreditations</span>
                    <span className="font-semibold text-foreground">8 Pearson Credentials</span>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-[#082b61] hover:to-[#0b3a82] shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Connect on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Vision, Biography & Executive Pillars */}
            <div className="lg:col-span-7 space-y-8">
              {/* Executive Header Banner */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Executive Leadership Profile</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
                  Md Sohanor Rahman{" "}
                  <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
                    Shifat
                  </span>
                </h2>

                <p className="text-base sm:text-lg font-medium text-muted-foreground">
                  Founder &amp; Chief Executive Officer (CEO) • Universal Language
                </p>
              </div>

              {/* Leadership Impact Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-card border border-border/80 shadow-md">
                <div className="text-center p-3 rounded-xl bg-muted/40">
                  <p className="text-xl sm:text-2xl font-black text-primary">3+ Years</p>
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                    PTE Experience
                  </p>
                </div>
                <div className="text-center p-3 rounded-xl bg-muted/40">
                  <p className="text-xl sm:text-2xl font-black text-primary">600+</p>
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                    Student Leads
                  </p>
                </div>
                <div className="text-center p-3 rounded-xl bg-muted/40">
                  <p className="text-xl sm:text-2xl font-black text-primary">8 Certs</p>
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                    Pearson Training
                  </p>
                </div>
                <div className="text-center p-3 rounded-xl bg-muted/40">
                  <p className="text-xl sm:text-2xl font-black text-primary">Univ of Dhaka</p>
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                    Undergraduate
                  </p>
                </div>
              </div>

              {/* Mission Statement Quote Box */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-l-4 border-primary dark:from-primary/20">
                <p className="text-sm sm:text-base font-semibold text-foreground italic leading-relaxed">
                  &ldquo;{FOUNDER_PROFILE.quote}&rdquo;
                </p>
                <p className="text-xs font-bold text-primary mt-2 uppercase tracking-wider">
                  — Md Sohanor Rahman Shifat, Founder &amp; CEO
                </p>
              </div>

              {/* Full Profile & Journey Narrative */}
              <div className="space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <h3 className="text-xl font-bold text-foreground">Profile &amp; Journey</h3>

                <p>
                  <strong className="text-foreground font-semibold">Md Sohanor Rahman Shifat</strong> is the Founder &amp; CEO of{" "}
                  <strong className="text-foreground font-semibold">UNIVERSAL LANGUAGE</strong>, an educational initiative focused on connecting students with quality language learning opportunities, PTE preparation resources, and suitable professional instructors. With 3+ years of experience in the PTE education sector, he has developed a strong understanding of PTE Academic, student requirements, examination strategies, scoring methodologies, and the evolving digital learning environment.
                </p>

                <p>
                  Since entering the PTE education sector, Shifat has worked with 600+ student leads, gaining extensive practical experience in student communication, lead generation, follow-up, digital marketing, enrollment coordination, and education-focused business development. As the founder of Universal Language, he oversees the platform’s day-to-day operations, manages student inquiries, coordinates with learners and instructors, and works to create a smooth journey from initial enquiry to enrollment.
                </p>

                <p>
                  He regularly participates in Pearson webinars, workshops, and professional training sessions, keeping himself updated with the latest PTE scoring system, AI-based evaluation methods, examination strategies, and relevant Pearson policies and updates. His continuous engagement with industry developments allows him to maintain a strong understanding of the changing PTE assessment and preparation landscape.
                </p>

                <p>
                  Alongside managing Universal Language, Shifat focuses on student engagement, lead generation, digital marketing, enrollment management, and platform growth, with the goal of building a trusted and accessible digital education ecosystem for language learners. His experience combines knowledge of the PTE education sector with practical expertise in student acquisition, communication, and educational platform management.
                </p>
              </div>

              {/* Education & Academic Background */}
              <div className="space-y-4 pt-4 border-t border-border/60">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>Academic &amp; Institutional Background</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-card border border-border/80 space-y-1">
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                      Undergraduate Studies
                    </span>
                    <h4 className="text-sm font-bold text-foreground">
                      University of Dhaka
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Currently pursuing undergraduate studies under the premier national university.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-card border border-border/80 space-y-1">
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                      Higher Secondary Certificate (HSC)
                    </span>
                    <h4 className="text-sm font-bold text-foreground">
                      Dhaka City College, Dhaka
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Completed Higher Secondary Certificate with distinction from Dhaka City College.
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Competencies & Leadership Focus */}
              <div className="space-y-4 pt-4 border-t border-border/60">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span>Leadership Focus &amp; Core Competencies</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "PTE Education Sector Leadership & Strategic Growth",
                    "600+ Student Leads Management & Guidance",
                    "Pearson AI Automated Evaluation & Scoring Insights",
                    "Education-Focused Digital Marketing & Lead Strategy",
                    "Learner-Instructor Coordination & Quality Assurance",
                    "Accessible Digital Education Ecosystem Architecture",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/30 border border-border/60 text-xs sm:text-sm font-medium text-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Dedicated Pearson Certificates Showcase with Interactive PDF Viewer */}
      <CeoCertificates />

      {/* Navigation Footer */}
      <section className="pt-12 border-t border-border/60 bg-muted/15">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Universal Language Academic Directorate
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Learn more about our certified faculty mentors and programs.
              </p>
            </div>
            <Link
              href="/about#faculty-section"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-colors shadow-md"
            >
              <span>Explore Certified Faculty Mentors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

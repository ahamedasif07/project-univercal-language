import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Award,
  BadgeCheck,
  Calendar,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  TrendingUp,
  Users,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Trophy,
  Mail,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/common/container";
import { INSTRUCTORS, ALL_PROFILES, getInstructorBySlug } from "@/data/instructors";
import { InstructorCertificatesGallery } from "./_components/instructor-certificates-gallery";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_PROFILES.map((inst) => ({
    slug: inst.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const instructor = getInstructorBySlug(slug);

  if (!instructor) {
    return {
      title: "Instructor Profile | Universal Language",
    };
  }

  return {
    title: `${instructor.name} - ${instructor.role} | Universal Language`,
    description: instructor.shortBio,
    alternates: {
      canonical: `https://universallanguage.com.bd/about/instructors/${instructor.slug}`,
    },
  };
}

export default async function InstructorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const instructor = getInstructorBySlug(slug);

  if (!instructor) {
    notFound();
  }

  // Other mentors to navigate between (from faculty list)
  const otherInstructors = INSTRUCTORS.filter((inst) => inst.slug !== instructor.slug);

  const whatsappMessage = encodeURIComponent(
    `Hello Universal Language, I would like to consult with ${instructor.name} regarding my PTE / Duolingo / English preparation.`
  );

  return (
    <div className="w-full min-h-screen pb-24 bg-gradient-to-b from-background via-slate-50/40 to-background dark:via-slate-950/20">
      {/* Breadcrumb Bar */}
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
            <a href="/about#faculty-section" className="hover:text-primary transition-colors">
              Faculty
            </a>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-foreground">{instructor.name}</span>
          </div>
        </Container>
      </div>

      {/* Hero Section */}
      <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-10 left-1/3 w-[600px] h-[350px] bg-primary/10 dark:bg-primary/15 blur-[140px] rounded-full pointer-events-none -z-10" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Full Portrait Card & Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 dark:border-primary/40 shadow-2xl bg-slate-900 group">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081528] via-[#081528]/40 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0b3a82] text-white font-bold text-xs shadow-lg border border-white/20">
                    <Award className="w-4 h-4 text-blue-300" />
                    <span>{instructor.scoreHighlight}</span>
                  </div>

                  {/* Official Level 2 Badge Overlay (if available) */}
                  {instructor.officialBadgeImage && (
                    <div className="absolute top-3 right-3 z-10 w-16 h-16 sm:w-20 sm:h-20 drop-shadow-2xl">
                      <Image
                        src={instructor.officialBadgeImage}
                        alt="Pearson Level 2 Certified Badge"
                        fill
                        sizes="80px"
                        className="object-contain"
                      />
                    </div>
                  )}

                  {/* Bottom details on image */}
                  <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                    <p className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                      {instructor.badge}
                    </p>
                    <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      {instructor.name}
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                      {instructor.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Booking Callout Card */}
              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      Book Direct 1-on-1 Mentorship
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Diagnostic scorecard audit &amp; personalized plan
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <a
                    href={`https://wa.me/${instructor.socials.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-[#082b61] hover:to-[#0b3a82] shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consult on WhatsApp</span>
                  </a>

                  {instructor.socials.phone && (
                    <a
                      href={`tel:${instructor.socials.phone.replace(/[^0-9+]/g, "")}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold border border-border/80 bg-muted/40 hover:bg-muted text-foreground transition-all cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-primary" />
                      <span>Direct: {instructor.socials.phone}</span>
                    </a>
                  )}

                  {instructor.socials.email && (
                    <a
                      href={`mailto:${instructor.socials.email}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5 text-primary" />
                      <span>{instructor.socials.email}</span>
                    </a>
                  )}
                </div>

                {instructor.socials.location && (
                  <div className="pt-3 border-t border-border/60 flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{instructor.socials.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Rich Profile & Accreditations */}
            <div className="lg:col-span-7 space-y-8">
              {/* Header block */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{instructor.organization}</span>
                  </div>

                  {instructor.officialBadgeImage && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20">
                      <div className="relative w-5 h-5 shrink-0">
                        <Image
                          src={instructor.officialBadgeImage}
                          alt="Pearson Level 2"
                          fill
                          sizes="20px"
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs font-bold text-foreground">
                        Pearson Level 2 Certified
                      </span>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
                  {instructor.name}
                </h2>
                <p className="text-lg font-semibold text-primary">
                  {instructor.role}
                </p>

                <p className="text-base text-muted-foreground leading-relaxed pt-1">
                  {instructor.shortBio}
                </p>
              </div>

              {/* Verified Scorecard Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {instructor.scorecardHighlights.map((sc) => (
                  <div
                    key={sc.label}
                    className="p-4 rounded-2xl bg-card border border-border/80 shadow-xs text-center"
                  >
                    <div className="text-xl sm:text-2xl font-black text-foreground">
                      {sc.value}
                    </div>
                    <div className="text-xs font-bold text-primary dark:text-blue-400 mt-0.5">
                      {sc.label}
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">
                      {sc.sublabel}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Track Records */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-muted/40 border border-border/60">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-foreground">
                      {instructor.studentsTrained}
                    </div>
                    <div className="text-[10px] text-muted-foreground">Trained</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-foreground">
                      {instructor.targetSuccessRate}
                    </div>
                    <div className="text-[10px] text-muted-foreground">Achievement</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-blue-500 shrink-0" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-foreground">
                      {instructor.experience}
                    </div>
                    <div className="text-[10px] text-muted-foreground">Experience</div>
                  </div>
                </div>
              </div>

              {/* Full Biography */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>Biography &amp; Academic Philosophy</span>
                </h3>
                <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {instructor.fullBio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Key Test Specialties & Frameworks */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-emerald-500" />
                  <span>Key Test Specialties &amp; Frameworks</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {instructor.specialties.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-card border border-border/70 text-xs sm:text-sm text-foreground/90 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Higher Education */}
              <div className="space-y-3 pt-2">
                <h4 className="text-base font-bold text-foreground flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>Higher Education</span>
                </h4>
                <ul className="space-y-2">
                  {instructor.education.map((edu) => (
                    <li key={edu} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Official Certifications & Accreditations (Promoted up in place of work experience) */}
              <div className="space-y-4 pt-4 border-t border-border/60">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-500" />
                      <span>Official Certifications &amp; Accreditations</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                      Verified credentials awarded by Pearson Education, Mindtickle, and accredited authorities
                    </p>
                  </div>
                  {instructor.officialBadgeImage && (
                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-card border border-border/80 shadow-xs w-fit">
                      <div className="relative w-9 h-9 shrink-0">
                        <Image
                          src={instructor.officialBadgeImage}
                          alt="Pearson Level 2"
                          fill
                          sizes="36px"
                          className="object-contain"
                        />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] font-bold uppercase text-primary">Pearson Level 2</div>
                        <div className="text-xs font-bold text-foreground">Trainer 1 Professional</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {instructor.certifications.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-card border border-border/70 text-xs sm:text-sm text-foreground/90 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Certificates Gallery (nakibul-c1 to nakibul-c7 with Level 2 Badge) */}
              {instructor.certificatesGallery && instructor.certificatesGallery.length > 0 && (
                <InstructorCertificatesGallery
                  certificates={instructor.certificatesGallery}
                  instructorName={instructor.name}
                />
              )}

              {/* Awards & Achievements (if available) */}
              {instructor.awards && instructor.awards.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-border/60">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    <span>Honors &amp; Key Achievements</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {instructor.awards.map((award, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-card border border-border/80 flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Trophy className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-foreground">
                            {award.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {award.organization} • {award.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Featured Courses Taught */}
              <div className="space-y-4 pt-4 border-t border-border/60">
                <h3 className="text-xl font-bold text-foreground">
                  Courses Led by {instructor.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {instructor.featuredCourses.map((crs) => (
                    <div
                      key={crs.title}
                      className="p-5 rounded-2xl bg-card border border-border/80 space-y-2 hover:border-primary/40 transition-colors"
                    >
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary dark:text-blue-300">
                        {crs.duration}
                      </span>
                      <h4 className="text-sm font-bold text-foreground pt-1">
                        {crs.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {crs.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Other Instructors Showcase */}
      <section className="pt-12 border-t border-border/60 bg-muted/15">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-foreground">
                Meet Other Certified Mentors
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Explore our full academic directorate at Universal Language
              </p>
            </div>
            <Link
              href="/about#faculty-section"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Faculty Overview</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherInstructors.map((other) => (
              <Link
                key={other.id}
                href={`/about/instructors/${other.slug}`}
                className="group p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex items-center gap-5"
              >
                <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-slate-900">
                  <Image
                    src={other.image}
                    alt={other.name}
                    fill
                    sizes="96px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-primary dark:text-blue-300">
                    {other.badge}
                  </div>
                  <h4 className="text-base font-bold text-foreground truncate group-hover:text-primary transition-colors">
                    {other.name}
                  </h4>
                  <p className="text-xs text-muted-foreground truncate">{other.title}</p>
                  <div className="mt-2 text-xs font-bold text-primary flex items-center gap-1">
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}


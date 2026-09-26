import React from "react";
import type { Metadata } from "next";
import { ServicesHero } from "./_components/services-hero";
import { ServicesWhyUs } from "./_components/services-why-us";
import { ServicesComparison } from "./_components/services-comparison";
import { ServicesProcess } from "./_components/services-process";
// ✅ Real home-page course cards — no duplicated card component
import { CoursesServicesSection } from "@/components/modules/home/courses-services-section";

export const metadata: Metadata = {
  title: "Courses & Services | Universal Language",
  description:
    "Explore all 7 Universal Language packages — PTE Foundation, Complete PTE A-Z, Crash Score Booster, Group Batch, Official Exam Booking, Rescore Service, and AI Practice Portals. Pearson-certified coaching in Dhaka, Bangladesh.",
  alternates: {
    canonical: "https://universallanguage.com.bd/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* 1. Hero — headline, badge, scroll cue */}
      <ServicesHero />

      {/* 2. 4 trust pillars — quick credibility bar */}
      <ServicesWhyUs />

      {/* 3. Real course & service cards from home (same component, no duplication) */}
      <CoursesServicesSection />

      {/* 4. Feature comparison table */}
      <ServicesComparison />

      {/* 5. 4-step enrollment process + CTA banner */}
      <ServicesProcess />
    </div>
  );
}

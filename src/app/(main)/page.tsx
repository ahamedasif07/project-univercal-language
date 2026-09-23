import React from "react";
import { HeroSection } from "@/components/modules/home/hero-section";
import { StatsSection } from "@/components/modules/home/stats-section";
import { CoursePromoSection } from "@/components/modules/home/promo-slider";
import { StepsSection } from "@/components/modules/home/steps-section";
import { DestinationsSection } from "@/components/modules/home/destinations-section";
import { CoursesServicesSection } from "@/components/modules/home/courses-services-section";
import { SuccessStoriesSection } from "@/components/modules/home/success-stories-section";

export const metadata = {
  title: "Universal Language | Premier PTE, IELTS, German & Study Abroad Academy",
  description:
    "Bangladesh's trusted international education hub. Certified PTE Academic & IELTS coaching, German & Japanese language training, study abroad counseling, and authorized exam booking in Dhaka.",
};

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />

      <StatsSection />
      <CoursePromoSection />
      <StepsSection />

      <DestinationsSection />
      <CoursesServicesSection />
      <SuccessStoriesSection />
    </div>
  );
}

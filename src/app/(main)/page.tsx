import React from "react";
import { HeroSection } from "@/components/modules/home/hero-section";
import { StatsSection } from "@/components/modules/home/stats-section";
import { CoursePromoSection } from "@/components/modules/home/promo-slider";
import { DestinationsSection } from "@/components/modules/home/destinations-section";

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
      <DestinationsSection />
    </div>
  );
}

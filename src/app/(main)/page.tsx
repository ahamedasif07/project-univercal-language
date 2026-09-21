import React from "react";
import { HeroSection } from "@/components/modules/home/hero-section";

export const metadata = {
  title: "Universal Language | Bangladesh's Best 1-to-1 PTE Coaching & Exam Booking",
  description:
    "Score 79+ in PTE Academic in just 12 classes with 1-to-1 Pearson certified mentorship, AI scoring mock exam portal, and seamless exam booking in Bangladesh.",
};

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
    </div>
  );
}

import { Metadata } from "next";
import { AboutHero } from "./_components/about-hero";
import { AboutPhilosophy } from "./_components/about-philosophy";
import { AboutFaculty } from "./_components/about-faculty";
import { AboutMethodology } from "./_components/about-methodology";
import { AboutContactSection } from "./_components/about-contact-section";
import { AboutCta } from "./_components/about-cta";

export const metadata: Metadata = {
  title: "About Us | Pearson-Certified PTE & Language Academy | Universal Language",
  description:
    "Discover Universal Language & CRACK PTE. Meet our Pearson-certified mentors Showkat Chowdhury, Dr. Sumya Sultana Swarna, and Samia Chowdhury. Explore our algorithm-calibrated coaching, 98.8% target score pass rate, and full diagnostic framework.",
  alternates: {
    canonical: "https://universallanguage.com.bd/about",
  },
  openGraph: {
    title: "About Universal Language & CRACK PTE Academy",
    description:
      "Elite Pearson-certified language coaching in Dhaka, Bangladesh. Guided by 90/90 master mentors to achieve 79+ first-attempt milestones.",
    url: "https://universallanguage.com.bd/about",
    siteName: "Universal Language",
    images: [
      {
        url: "/images/instructors/showkat.jpg",
        width: 1200,
        height: 630,
        alt: "Universal Language Academic Mentors",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen">
      <AboutHero />
      <AboutPhilosophy />
      <AboutFaculty />
      <AboutMethodology />
      <AboutContactSection />
      <AboutCta />
    </div>
  );
}

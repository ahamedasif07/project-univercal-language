import { Metadata } from "next";
import { AboutHero } from "./_components/about-hero";
import { AboutFounder } from "./_components/about-founder";
import { AboutPhilosophy } from "./_components/about-philosophy";
import { AboutFaculty } from "./_components/about-faculty";

export const metadata: Metadata = {
  title: "About Us | Pearson-Certified PTE & Language Academy | Universal Language",
  description:
    "Meet Sifat Hasan (Founder & CEO), Dr. Sumya Sultana Swarna, and Samia Chowdhury. Discover Universal Language's NSDA-registered curriculum, Pearson South Asia certified master trainers, and 98.8% target score success rate.",
  alternates: {
    canonical: "https://universallanguage.com.bd/about",
  },
  openGraph: {
    title: "About Universal Language Academy",
    description:
      "Elite Pearson-certified language coaching in Dhaka, Bangladesh. Led by Founder & CEO Sifat Hasan and master faculty to achieve 79+ first-attempt milestones.",
    url: "https://universallanguage.com.bd/about",
    siteName: "Universal Language",
    images: [
      {
        url: "/images/instructors/showkat.jpg",
        width: 1200,
        height: 630,
        alt: "Sifat Hasan - Founder & CEO of Universal Language",
      },
    ],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://universallanguage.com.bd/#organization",
      name: "Universal Language",
      url: "https://universallanguage.com.bd",
      logo: "https://universallanguage.com.bd/icon.svg",
      description:
        "Premier Pearson PTE Academic, German & foreign language coaching in Dhaka, Bangladesh. Official Pearson exam voucher booking and Alfa PTE AI practice portal.",
      founder: {
        "@type": "Person",
        name: "Sifat Hasan",
        jobTitle: "Founder & Chief Executive Officer (CEO)",
        image: "https://universallanguage.com.bd/images/instructors/showkat.jpg",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      telephone: "+8801772224283",
    },
    {
      "@type": "Person",
      "@id": "https://universallanguage.com.bd/#founder",
      name: "Sifat Hasan",
      jobTitle: "Founder & Chief Executive Officer (CEO)",
      worksFor: {
        "@type": "EducationalOrganization",
        name: "Universal Language",
      },
      image: "https://universallanguage.com.bd/images/instructors/showkat.jpg",
      description:
        "Founder & CEO of Universal Language, Master of Education, Pearson South Asia Certified Master Trainer.",
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen">
      {/* Schema.org Structured JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <AboutHero />
      <AboutFounder />
      <AboutPhilosophy />
      <AboutFaculty />
    </div>
  );
}

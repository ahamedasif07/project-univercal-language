import { Metadata } from "next";
import { AboutHero } from "./_components/about-hero";
import { AboutFounder } from "./_components/about-founder";
import { AboutPhilosophy } from "./_components/about-philosophy";
import { AboutFaculty } from "./_components/about-faculty";

export const metadata: Metadata = {
  title: "About Us | Pearson-Certified PTE & Language Academy | Universal Language",
  description:
    "Meet Md Sohanor Rahman Shifat (Founder & CEO), MD Nakibul Quader Chowdhury (Head Instructor), Amatulla Tasnim, Shams Tashin, Khairul Islam, and Papon Miah. Discover Universal Language's certified faculty.",
  alternates: {
    canonical: "https://universallanguage.com.bd/about",
  },
  openGraph: {
    title: "About Universal Language Academy",
    description:
      "Elite Pearson-certified language coaching in Dhaka, Bangladesh. Led by Founder & CEO Md Sohanor Rahman Shifat and certified faculty to achieve target milestones.",
    url: "https://universallanguage.com.bd/about",
    siteName: "Universal Language",
    images: [
      {
        url: "/images/ceo/ceo-sifat-pp.jpeg",
        width: 1200,
        height: 1200,
        alt: "Md Sohanor Rahman Shifat - Founder & CEO of Universal Language",
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
        name: "Md Sohanor Rahman Shifat",
        jobTitle: "Founder & Chief Executive Officer (CEO)",
        image: "https://universallanguage.com.bd/images/ceo/ceo-sifat-pp.jpeg",
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
      name: "Md Sohanor Rahman Shifat",
      jobTitle: "Founder & Chief Executive Officer (CEO)",
      worksFor: {
        "@type": "EducationalOrganization",
        name: "Universal Language",
      },
      image: "https://universallanguage.com.bd/images/ceo/ceo-sifat-pp.jpeg",
      description:
        "Founder & CEO of Universal Language, 3+ years experience in the PTE education sector with 600+ student leads guided and Pearson Teacher Training Academy certifications.",
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
      {/* <AccreditationsSection /> */}
    </div>
  );
}

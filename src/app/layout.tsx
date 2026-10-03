import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { AppProviders } from "@/providers";
import { siteConfig } from "@/config/site";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#061e47" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Universal Language | Premier PTE Academic, IELTS & Language Academy",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Bangladesh's trusted language academy. Pearson-certified PTE master trainers, Alfa PTE AI testing portal, IELTS, German courses, and instant official Pearson exam voucher booking.",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  keywords: [
    "PTE Academic Bangladesh",
    "PTE Coaching Dhaka",
    "PTE Exam Booking Center",
    "Pearson Master Trainer Bangladesh",
    "IELTS Preparation Dhaka",
    "Duolingo English Test Coaching Bangladesh",
    "German Language Course Dhaka",
    "Alfa PTE AI Portal Subscription",
    "Study Abroad Mentorship Dhaka",
    "Australia PR PTE 79 Plus",
    "Canada Study Permit PTE",
    "UK Student Visa English Test",
    "Universal Language BD",
    "NSDA Certified Language Center",
  ],
  authors: [{ name: "Universal Language Academic Mentors" }],
  creator: "Universal Language",
  publisher: "Universal Language",
  category: "Education",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Universal Language | Premier PTE Academic & Language Academy",
    description:
      "Pearson-certified PTE master trainers, Alfa PTE AI scoring portal, IELTS, German language courses, and official Pearson exam voucher booking in Dhaka, Bangladesh.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Universal Language - Premier PTE & Language Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Language | Premier PTE Academic & Language Academy",
    description:
      "Pearson-certified PTE master trainers, Alfa PTE AI scoring portal, and official exam voucher booking in Bangladesh.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  other: {
    "geo.region": "BD",
    "geo.placename": "Dhaka",
    "geo.position": "23.8103;90.4125",
    ICBM: "23.8103, 90.4125",
  },
};

const rootStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${siteConfig.url}/#organization`,
      name: "Universal Language",
      alternateName: "Universal Language BD",
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon.svg`,
      image: `${siteConfig.url}/images/hero.webp`,
      description:
        "Premier Pearson PTE Academic, IELTS, German & foreign language coaching in Dhaka, Bangladesh. Official Pearson exam voucher booking and Alfa PTE AI practice portal.",
      telephone: "+8801772224283",
      email: "info@universallanguage.com.bd",
      priceRange: "৳৳",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.8103,
        longitude: 90.4125,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
          ],
          opens: "09:00",
          closes: "21:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/universallanguagebd",
        "https://wa.me/8801772224283",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Pearson Certified Partner",
          credentialCategory: "Institutional Accreditation",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "National Skills Development Authority (NSDA) Registered",
          credentialCategory: "Government Registration",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Alfa PTE Official Institutional Partner",
          credentialCategory: "AI Assessment License",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "340",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: "Universal Language",
      description: "Premier Pearson PTE Academic, IELTS & Language Academy in Bangladesh",
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootStructuredData) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${roboto.className} min-h-screen flex flex-col antialiased transition-colors`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

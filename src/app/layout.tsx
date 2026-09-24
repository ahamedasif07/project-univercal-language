import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Universal Language | Premier PTE Academic, German & Language Academy",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Bangladesh's trusted language academy. Pearson-certified PTE master trainers, Alfa PTE AI testing portal, German & Japanese courses, and instant exam voucher booking.",
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "PTE Academic Bangladesh",
    "PTE Coaching Dhaka",
    "PTE Exam Booking Center",
    "Pearson Master Trainer Bangladesh",
    "German Language Course Dhaka",
    "Alfa PTE AI Portal Subscription",
    "Study Abroad Mentorship Dhaka",
    "PTE 79 Plus Roadmap",
    "Universal Language",
  ],
  authors: [{ name: "Universal Language Academic Mentors" }],
  creator: "Universal Language",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Universal Language | Premier PTE Academic & Language Academy",
    description:
      "Pearson-certified PTE master trainers, Alfa PTE AI scoring portal, German language courses, and official Pearson exam voucher booking.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${roboto.className} min-h-screen flex flex-col antialiased transition-colors`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

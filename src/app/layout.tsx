import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AppProviders } from "@/providers";
import { siteConfig } from "@/config/site";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/favicon.ico",
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

import React from "react";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { PagePreloader } from "@/components/common/page-preloader";
import { FloatingWhatsApp } from "@/components/common/floating-whatsapp";
import { PromoPopupModal } from "@/components/modules/home/promo-popup-modal";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <PagePreloader />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <PromoPopupModal />
    </div>
  );
}

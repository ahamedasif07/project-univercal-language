import { Metadata } from "next";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { FloatingWhatsApp } from "@/components/common/floating-whatsapp";
import { NotFoundView } from "@/components/common/not-found-view";

export const metadata: Metadata = {
  title: "404 - Page Not Located | Universal Language",
  description: "The page or resource you are looking for does not exist on our global campus map.",
};

export default function RootNotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <NotFoundView />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

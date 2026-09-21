import React from "react";
import { Navbar } from "@/components/common/navbar";
import { PagePreloader } from "@/components/common/page-preloader";

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
    </div>
  );
}

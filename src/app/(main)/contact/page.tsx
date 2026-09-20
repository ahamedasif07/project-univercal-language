import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-6 text-center">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Contact Page
        </h1>
      </div>
    </div>
  );
}

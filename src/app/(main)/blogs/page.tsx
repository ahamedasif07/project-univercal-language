import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogsPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-6 text-center">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Blogs Page
        </h1>
      </div>
    </div>
  );
}

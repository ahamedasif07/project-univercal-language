import React from "react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Blog: ${slug}`,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-6 text-center">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Blog Post Detail
        </h1>
        <p className="text-muted-foreground text-sm">Slug: {slug}</p>
      </div>
    </div>
  );
}

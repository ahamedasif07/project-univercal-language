import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COURSES_AND_SERVICES } from "@/data/courses";
import { CourseDetailView } from "@/components/modules/courses/course-detail-view";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COURSES_AND_SERVICES.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES_AND_SERVICES.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found | Universal Language",
      description: "The requested course or Pearson service could not be found.",
    };
  }

  return {
    title: `${course.title} (${course.currency} ${course.price.toLocaleString()}) | Universal Language`,
    description: `${course.shortDescription} Premier Pearson PTE Academic training and official services in Bangladesh.`,
    openGraph: {
      title: `${course.title} | Universal Language`,
      description: course.shortDescription,
    },
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = COURSES_AND_SERVICES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = COURSES_AND_SERVICES.filter((c) => c.slug !== slug).slice(0, 3);

  return <CourseDetailView course={course} relatedCourses={relatedCourses} />;
}

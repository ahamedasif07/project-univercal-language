import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COURSES_AND_SERVICES } from "@/data/courses";
import { CourseDetailView } from "@/components/modules/courses/course-detail-view";
import { siteConfig } from "@/config/site";

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

  const courseUrl = `${siteConfig.url}/courses/${course.slug}`;

  return {
    title: `${course.title} (${course.currency} ${course.price.toLocaleString()}) | Universal Language`,
    description: `${course.shortDescription} Pearson-certified master mentorship and mock portal access in Bangladesh.`,
    alternates: {
      canonical: courseUrl,
    },
    openGraph: {
      title: `${course.title} | Universal Language`,
      description: course.shortDescription,
      url: courseUrl,
      images: [
        {
          url: course.thumbnailImage,
          width: 800,
          height: 500,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.shortDescription,
      images: [course.thumbnailImage],
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

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.shortDescription,
    provider: {
      "@type": "EducationalOrganization",
      name: "Universal Language",
      sameAs: siteConfig.url,
      telephone: "+8801772224283",
    },
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: "BDT",
      availability: "https://schema.org/InStock",
      category: "Paid",
      url: `${siteConfig.url}/courses/${course.slug}`,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      instructor: {
        "@type": "Person",
        name: "Md Sohanor Rahman Shifat",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <CourseDetailView course={course} relatedCourses={relatedCourses} />
    </>
  );
}

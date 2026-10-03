import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blogs";
import { BlogPostView } from "@/components/modules/blogs/_components/blog-post-view";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Blog Post Not Found | Universal Language" };
  }

  const articleUrl = `${siteConfig.url}/blogs/${post.slug}`;

  return {
    title: `${post.title} | Universal Language Blog`,
    description: post.excerpt,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      type: "article",
      title: `${post.title} | Universal Language`,
      description: post.excerpt,
      url: articleUrl,
      authors: [post.author],
      publishedTime: post.date,
      tags: [post.category, "PTE Academic", "IELTS", "Study Abroad Bangladesh"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.category === post.category
  ).slice(0, 3);

  const fallbackRelated =
    relatedPosts.length < 3
      ? [
          ...relatedPosts,
          ...BLOG_POSTS.filter((p) => p.slug !== slug && !relatedPosts.includes(p)).slice(
            0,
            3 - relatedPosts.length
          ),
        ]
      : relatedPosts;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: "Universal Language",
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon.svg`,
    },
    datePublished: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blogs/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostView post={post} relatedPosts={fallbackRelated} />
    </>
  );
}

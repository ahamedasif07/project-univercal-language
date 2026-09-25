import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blogs";
import { BlogPostView } from "@/components/modules/blogs/_components/blog-post-view";

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

  return {
    title: `${post.title} | Universal Language Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://universallanguage.com.bd/blogs/${post.slug}`,
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

  const fallbackRelated = relatedPosts.length < 3
    ? [...relatedPosts, ...BLOG_POSTS.filter((p) => p.slug !== slug && !relatedPosts.includes(p)).slice(0, 3 - relatedPosts.length)]
    : relatedPosts;

  return <BlogPostView post={post} relatedPosts={fallbackRelated} />;
}

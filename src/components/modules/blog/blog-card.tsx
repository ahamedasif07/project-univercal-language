import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
      <div className="relative w-full h-48 bg-slate-900 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          {post.category}
        </div>
      </div>

      <CardHeader className="flex-1">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
          <span>{formatDate(post.publishedAt)}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <CardTitle className="text-xl line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
      </CardContent>

      <CardFooter className="mt-auto justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 relative">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
            {post.author.name}
          </span>
        </div>
        <Link
          href={`/blogs/${post.slug}`}
          className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center gap-1"
        >
          Read article
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
}

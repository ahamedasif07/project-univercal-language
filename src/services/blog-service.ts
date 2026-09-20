import { BlogPost } from "@/types";

// Static mock posts data for fallback or initial rendering
export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "mastering-nextjs-app-router",
    title: "Mastering Next.js App Router Architecture",
    excerpt:
      "Explore standard practices for structuring production-grade Next.js applications using Route Groups, dynamic routes, and Server Components.",
    content: `
      Next.js App Router introduces a paradigm shift in how React applications are constructed. 
      By decoupling server and client components, web applications achieve instantaneous initial loads 
      and minimal JavaScript footprints.
      
      Key benefits include:
      - Native streaming and suspense boundaries
      - Colocated routing with layout hierarchy
      - Enhanced SEO and metadata generation
    `,
    coverImage: "/images/hero.webp",
    publishedAt: "2026-03-15",
    readTime: "5 min read",
    category: "Architecture",
    tags: ["Next.js", "React", "TypeScript", "Performance"],
    author: {
      id: "a1",
      name: "Alex Mercer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      role: "Principal Architect",
    },
  },
  {
    id: "2",
    slug: "modern-styling-with-tailwind-v4",
    title: "Modern Styling Patterns with Tailwind CSS",
    excerpt:
      "A deep dive into Tailwind CSS, design tokens, responsive breakpoints, and theme management in contemporary frontend applications.",
    content: `
      Tailwind CSS streamlines UI creation with high-performance utility classes and native CSS cascade layer support.
      Coupled with CSS variables and responsive design principles, creating accessible and aesthetic dark/light themes 
      becomes seamless.
    `,
    coverImage: "/images/hero.webp",
    publishedAt: "2026-03-10",
    readTime: "4 min read",
    category: "Design Systems",
    tags: ["CSS", "Tailwind", "UI/UX", "Frontend"],
    author: {
      id: "a2",
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
      role: "Design Technologist",
    },
  },
  {
    id: "3",
    slug: "type-safe-fullstack-patterns",
    title: "Type-Safe Fullstack Engineering Patterns",
    excerpt:
      "How to leverage TypeScript, Zod schemas, and data contracts to eliminate runtime bugs and enhance developer velocity.",
    content: `
      Type safety is more than just catching syntax errors: it defines the contract between components, 
      state management, and remote data boundaries. Utilizing schemas such as Zod guarantees incoming 
      payload integrity across the entire application lifecycle.
    `,
    coverImage: "/images/hero.webp",
    publishedAt: "2026-03-02",
    readTime: "6 min read",
    category: "TypeScript",
    tags: ["TypeScript", "Zod", "Engineering", "Best Practices"],
    author: {
      id: "a3",
      name: "David Vance",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      role: "Lead Software Engineer",
    },
  },
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  // In a live system, this can fetch from apiClient.get('/api/blogs')
  return Promise.resolve(MOCK_BLOG_POSTS);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = MOCK_BLOG_POSTS.find((p) => p.slug === slug);
  return Promise.resolve(post || null);
}

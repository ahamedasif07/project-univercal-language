export interface Author {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  category: string;
  author: Author;
  tags: string[];
}

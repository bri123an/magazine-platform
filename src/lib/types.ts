// Database types matching Supabase schema

export interface Author {
  id: string;
  name: string;
  slug: string;
  bio?: string;
  avatar?: string;
  articleCount?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  articleCount?: number;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  publishedAt: string;
  readTime: number;
  views?: number;
  status: 'draft' | 'published';
  authorId: string;
  categoryId: string;
  author?: Author;
  category?: Category;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  clerkId: string;
}

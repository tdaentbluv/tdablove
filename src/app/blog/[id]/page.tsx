import React from 'react';
import BlogEntryHeader from '@/components/blog/entry/BlogEntryHeader';
import BlogEntryHero from '@/components/blog/entry/BlogEntryHero';
import BlogArticleContent from '@/components/blog/entry/BlogArticleContent';
import { blogArticles } from '@/data/blogArticles';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function BlogEntryPage({ params }: Props) {
  const article = blogArticles.find(article => article.id === parseInt(params.id));
  
  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <BlogEntryHeader article={article} />
      <BlogEntryHero article={article} />
      <BlogArticleContent article={article} />
    </main>
  );
}

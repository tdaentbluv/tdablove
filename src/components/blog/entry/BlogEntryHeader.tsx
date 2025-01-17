import React from 'react';
import Link from 'next/link';
import { BlogArticle } from '@/data/blogArticles';

interface Props {
  article: BlogArticle;
}

const BlogEntryHeader = ({ article }: Props) => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-30 py-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            href="/blog"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">{article.readTime}</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{article.date}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogEntryHeader;

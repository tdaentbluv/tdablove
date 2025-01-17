import React from 'react';
import Image from 'next/image';
import { BlogArticle } from '@/data/blogArticles';

interface Props {
  article: BlogArticle;
}

const BlogEntryHero = ({ article }: Props) => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] mb-8 rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src="/TDALogoPNG.png"
            alt={article.title}
            fill
            className="object-contain p-8"
            priority
          />
        </div>
        <div className="space-y-6 text-center">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
              {article.category}
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {article.title}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className="ml-3 text-sm">
                <p className="font-medium text-gray-900">{article.author}</p>
                <p className="text-gray-600">{article.authorTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEntryHero;

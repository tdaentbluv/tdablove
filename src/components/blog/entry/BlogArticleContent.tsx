import React from 'react';
import { BlogArticle } from '@/data/blogArticles';
import ReactMarkdown from 'react-markdown';

interface Props {
  article: BlogArticle;
}

const BlogArticleContent = ({ article }: Props) => {
  return (
    <article className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-blue mx-auto">
          <div className="space-y-8 text-gray-600 [&>p]:indent-6 leading-relaxed">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Share
              </button>
              <button
                type="button"
                className="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogArticleContent;

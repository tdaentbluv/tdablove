import React from 'react';

const BlogHero = () => {
  return (
    <div className="relative bg-gray-900 py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-blue-900 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          EHS Insights & Updates
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Stay informed about the latest environmental health and safety trends, regulations, and best practices. Our experts share valuable insights to help you maintain a safer workplace.
        </p>
      </div>
    </div>
  );
};

export default BlogHero;

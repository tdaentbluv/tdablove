import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "OSHA's New Heat Safety Standards: What You Need to Know",
    excerpt: 'Understanding the latest OSHA regulations on heat exposure and implementing effective prevention strategies in your workplace.',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    author: 'Dr. Sarah Johnson',
    category: 'Safety Regulations',
    image: '/blog/heat-safety.jpg'
  },
  {
    id: 2,
    title: "Sustainable Waste Management Practices for Industry",
    excerpt: 'Explore innovative approaches to industrial waste reduction and management that benefit both the environment and your bottom line.',
    date: 'Jan 12, 2025',
    readTime: '6 min read',
    author: 'Michael Chen',
    category: 'Environmental',
    image: '/blog/waste-management.jpg'
  },
  {
    id: 3,
    title: "Emergency Response Planning in the Modern Workplace",
    excerpt: 'A comprehensive guide to creating and implementing effective emergency response plans for various workplace scenarios.',
    date: 'Jan 10, 2025',
    readTime: '10 min read',
    author: 'Robert Martinez',
    category: 'Emergency Preparedness',
    image: '/blog/emergency-response.jpg'
  },
  {
    id: 4,
    title: "The Future of PPE: Smart Safety Equipment",
    excerpt: 'Discover how IoT and smart technology are revolutionizing personal protective equipment and workplace safety monitoring.',
    date: 'Jan 8, 2025',
    readTime: '7 min read',
    author: 'Dr. Emily Parker',
    category: 'Technology',
    image: '/blog/smart-ppe.jpg'
  },
  {
    id: 5,
    title: "Chemical Safety Management: Best Practices",
    excerpt: 'Essential guidelines for handling, storing, and disposing of hazardous chemicals in industrial settings.',
    date: 'Jan 5, 2025',
    readTime: '9 min read',
    author: 'James Wilson',
    category: 'Chemical Safety',
    image: '/blog/chemical-safety.jpg'
  },
  {
    id: 6,
    title: "Mental Health in the Workplace: A Safety Perspective",
    excerpt: 'Understanding the importance of mental health in workplace safety and implementing supportive practices.',
    date: 'Jan 3, 2025',
    readTime: '5 min read',
    author: 'Dr. Lisa Thompson',
    category: 'Health & Wellness',
    image: '/blog/mental-health.jpg'
  }
];

const BlogArticles = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.id} className="relative isolate flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
                <div className="relative aspect-[16/9] sm:aspect-[2/1]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/0" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-x-4 text-xs mb-3">
                      <time dateTime={post.date} className="text-gray-500">
                        {post.date}
                      </time>
                      <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
                        {post.category}
                      </span>
                      <span className="text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={`/blog/${post.id}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        {post.author}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticles;

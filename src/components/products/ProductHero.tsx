'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const backgroundImages = [
  '/abstract-bg-1.jpg',
  '/abstract-bg-2.jpg',
  '/abstract-bg-3.jpg',
];

const ProductHero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[60vh]">
      {/* Background Image Slider */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full pt-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              TDA EHS AI
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl">
              Transform your Environmental Health & Safety operations with AI-powered solutions. 
              Stay ahead of the curve with intelligent automation and predictive analytics.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#features"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md transition-colors inline-block"
              >
                Explore Features
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors inline-block"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;

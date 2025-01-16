'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const backgroundImages = [
  '/abstract-bg-1.jpg',
  '/abstract-bg-2.jpg',
  '/abstract-bg-3.jpg',
  '/abstract-bg-4.jpg',
  '/abstract-bg-5.jpg',
];

const CertificationHero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full pt-20">
            {/* Left Column - Title */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Professional Safety Certifications
              </h1>
              <p className="text-xl text-white mb-8">
                Advance your career with industry-recognized safety certifications. Our comprehensive 
                programs are designed to meet OSHA standards and industry best practices.
              </p>
            </div>

            {/* Right Column - Navigation Links */}
            <div className="space-y-4 text-white">
              <button
                onClick={() => scrollToSection('certification-levels')}
                className="block w-full text-left p-4 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
              >
                View Certifications
              </button>
              <Link
                href="/contact"
                className="block w-full text-left p-4 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationHero;

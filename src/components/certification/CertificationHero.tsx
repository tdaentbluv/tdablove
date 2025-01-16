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
    <div className="relative h-screen">
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
                OSHA 10-Hour Safety Training
              </h1>
              <p className="text-xl text-white mb-8">
                Essential workplace safety training that meets OSHA requirements and helps create safer work environments
              </p>
            </div>

            {/* Right Column - Navigation Links */}
            <div className="space-y-4 text-white">
              <button
                onClick={() => scrollToSection('osha-training')}
                className="block w-full text-left p-4 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
              >
                About OSHA Safety Training
              </button>
              <button
                onClick={() => scrollToSection('certification-benefits')}
                className="block w-full text-left p-4 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
              >
                Benefits of Becoming Certified
              </button>
              <button
                onClick={() => scrollToSection('certification-overview')}
                className="block w-full text-left p-4 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
              >
                Certification Overview
              </button>
              <button
                onClick={() => scrollToSection('certification-levels')}
                className="block w-full text-left p-4 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
              >
                Certification Levels
              </button>
              <button
                onClick={() => scrollToSection('get-certified')}
                className="block w-full text-left p-4 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
              >
                Get Certified
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationHero;

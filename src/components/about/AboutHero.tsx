'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const backgroundImages = [
  '/images/abstract-bg-1.jpg',
  '/images/abstract-bg-2.jpg',
  '/images/abstract-bg-3.jpg',
  '/images/abstract-bg-4.jpg',
  '/images/abstract-bg-5.jpg',
];

const AboutHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative h-full">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between h-full py-20">
            {/* Left Column - Title */}
            <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Safety Through Excellence
              </h1>
              <p className="text-xl mb-8">
                TDA Enterprise LLC - Your trusted partner in occupational safety training and consultation. 
                Led by OSHA Authorized Trainer Tremayne Anderson, we're committed to creating safer workplaces 
                through comprehensive training and education.
              </p>
            </div>

            {/* Right Column - Navigation Links */}
            <div className="lg:w-1/2 text-white">
              <div className="space-y-4">
                <Link href="#ceo" className="block text-lg hover:text-primary transition-colors">
                  Meet Our CEO
                </Link>
                <Link href="#certifications" className="block text-lg hover:text-primary transition-colors">
                  Our Certifications
                </Link>
                <Link href="#tda" className="block text-lg hover:text-primary transition-colors">
                  About TDA Enterprise
                </Link>
                <Link href="#blove" className="block text-lg hover:text-primary transition-colors">
                  B Love Foundation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

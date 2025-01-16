'use client';

import { useState, useEffect } from 'react';

const videoFiles = [
  '/images/hero/9431311-hd_1920_1080_25fps.mp4',
  '/images/hero/4480572-hd_1920_1080_30fps.mp4',
  '/images/hero/4477607-hd_1280_720_30fps.mp4',
  '/images/hero/5846591-hd_1920_1080_25fps.mp4',
  '/images/hero/12747851_1920_1080_60fps.mp4'
];

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => 
        prevIndex === videoFiles.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          key={videoFiles[currentVideoIndex]}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={() => {
            setCurrentVideoIndex((prevIndex) =>
              prevIndex === videoFiles.length - 1 ? 0 : prevIndex + 1
            );
          }}
        >
          <source src={videoFiles[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6">
                <span className="block">Transform Your</span>
                <span className="block text-primary">Digital Experience</span>
              </h1>
              <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="mt-10 sm:mt-12">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

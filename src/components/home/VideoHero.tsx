'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Video {
  src: string;
  type: string;
  content: {
    title: string;
    description: string;
    link: string;
  };
}

const videos: Video[] = [
  {
    src: '/images/hero/9431311-hd_1920_1080_25fps.mp4',
    type: 'video/mp4',
    content: {
      title: 'TDA EHS Consulting Services',
      description: 'Standard and customized EHS training and consulting services to meet your company goals.',
      link: '/tdaehsconsulting'
    }
  },
  {
    src: '/images/hero/4480572-hd_1920_1080_30fps.mp4',
    type: 'video/mp4',
    content: {
      title: 'TDA Safety Training and Certification',
      description: 'Get your employees safety certified with standard OSHA stafety training.',
      link: '/tdaehsOSHAtraining'
    }
  },
  {
    src: '/images/hero/4477607-hd_1280_720_30fps.mp4',
    type: 'video/mp4',
    content: {
      title: 'TDA EHS Consulting Services',
      description: 'Standard and customized EHS training and consulting services to meet your company goals.',
      link: '/tdaehsconsulting'
    }
  },
  {
    src: '/images/hero/5846591-hd_1920_1080_25fps.mp4',
    type: 'video/mp4',
    content: {
      title: 'TDA Safety Training and Certification',
      description: 'Get your employees safety certified with standard OSHA stafety training.',
      link: '/tdaehsOSHAtraining'
    }
  },
  {
    src: '/images/hero/12747851_1920_1080_60fps.mp4',
    type: 'video/mp4',
    content: {
      title: 'TDA EHS Consulting Services',
      description: 'Standard and customized EHS training and consulting services to meet your company goals.',
      link: '/tdaehsconsulting'
    }
  }
];

const VideoHero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          key={videos[currentVideoIndex].src}
          autoPlay
          muted
          playsInline
          className="object-cover w-full h-full"
          onEnded={() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
          }}
        >
          <source src={videos[currentVideoIndex].src} type={videos[currentVideoIndex].type} />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 transition-opacity duration-500">
            {videos[currentVideoIndex].content.title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto transition-opacity duration-500">
            {videos[currentVideoIndex].content.description}
          </p>
          <Link 
            href={videos[currentVideoIndex].content.link}
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;

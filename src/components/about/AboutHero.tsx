'use client';

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faUsers,
  faUserTie,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] bg-white">
      {/* Content */}
      <div className="relative h-full">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between h-full py-12">
            {/* Left Column - Title */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Safety Through Excellence
              </h1>
              <p className="text-lg mb-6 text-gray-600">
                TDA Enterprise LLC - Your trusted partner in occupational safety training and consultation. 
                With decades of experience, we deliver comprehensive solutions that protect your workforce 
                and ensure regulatory compliance.
              </p>
              <div className="flex space-x-4">
                <Link 
                  href="/contact"
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md transition duration-300"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white transition duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 text-center">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary mb-3">
                  <FontAwesomeIcon icon={faCalendarDays} className="text-3xl" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary mb-3">
                  <FontAwesomeIcon icon={faUsers} className="text-3xl" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">1000+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary mb-3">
                  <FontAwesomeIcon icon={faUserTie} className="text-3xl" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600">Industry Experts</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary mb-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-3xl" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

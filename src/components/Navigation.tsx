'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navigation = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center rounded-lg py-3">
              <div className="relative w-20 h-20">
                <Image
                  src="/TDALogoPNG.png"
                  alt="TDA Logo"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
              <div className="flex flex-col ml-4">
                <span className="text-lg font-bold tracking-tight text-gray-900">TDA Enterprise</span>
                <span className="text-sm text-gray-600">Safety First</span>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center">
              <div className="flex space-x-6 mr-4">
                <Link href="/about" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  About
                </Link>

                {/* Services Dropdown */}
                <div className="relative">
                  <button
                    className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    Services
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <div
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="py-1">
                        <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Products
                        </Link>
                        <Link href="/certification" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Certification
                        </Link>
                        <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          All Services
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Resources Dropdown */}
                <div className="relative">
                  <button
                    className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    Resources
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isResourcesOpen && (
                    <div
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                      onMouseEnter={() => setIsResourcesOpen(true)}
                      onMouseLeave={() => setIsResourcesOpen(false)}
                    >
                      <div className="py-1">
                        <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Blog
                        </Link>
                        <Link href="/calendar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Calendar
                        </Link>
                        <Link href="/b-love-foundation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          B Love Foundation
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link href="/careers" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  Careers
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/signin"
                  className="inline-flex items-center justify-center px-4 py-2 border border-primary rounded-md text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

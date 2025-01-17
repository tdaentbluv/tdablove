import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { services } from '@/components/services/ProductsServices';

const Sitemap = () => {
  return (
    <main>
      <Navigation />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sitemap
            </h1>
            <div className="mt-10 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Main Pages</h2>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="/" className="text-blue-600 hover:text-blue-500">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-blue-600 hover:text-blue-500">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-blue-600 hover:text-blue-500">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-blue-600 hover:text-blue-500">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-blue-600 hover:text-blue-500">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">Services</h2>
                <ul className="mt-4 space-y-2">
                  {services.map((service) => (
                    <li key={service.title}>
                      <Link href={service.link} className="text-blue-600 hover:text-blue-500">
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">Legal</h2>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-blue-600 hover:text-blue-500">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Sitemap;

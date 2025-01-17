import React from 'react';
import Image from 'next/image';

const CertificationLogos = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Certifications & Partnerships
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          <div className="relative w-full h-[100px]">
            <Image
              src="/images/certifications/cert1.png"
              alt="Certification 1"
              fill
              style={{ objectFit: 'contain' }}
              className="hover:opacity-80 transition-opacity"
            />
          </div>
          <div className="relative w-full h-[100px]">
            <Image
              src="/images/certifications/cert2.png"
              alt="Certification 2"
              fill
              style={{ objectFit: 'contain' }}
              className="hover:opacity-80 transition-opacity"
            />
          </div>
          <div className="relative w-full h-[100px]">
            <Image
              src="/images/certifications/cert3.png"
              alt="Certification 3"
              fill
              style={{ objectFit: 'contain' }}
              className="hover:opacity-80 transition-opacity"
            />
          </div>
          <div className="relative w-full h-[100px]">
            <Image
              src="/images/certifications/cert4.png"
              alt="Certification 4"
              fill
              style={{ objectFit: 'contain' }}
              className="hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationLogos;

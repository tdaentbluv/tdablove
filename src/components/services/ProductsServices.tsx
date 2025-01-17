import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Environmental Services',
    description: 'Comprehensive environmental management solutions to ensure compliance and sustainability.',
    items: [
      'Environmental Compliance Audits',
      'Waste Management Programs',
      'Environmental Impact Assessments',
      'Sustainability Planning',
      'Air Quality Monitoring',
      'Water Quality Management',
      'ISO 14001 Implementation'
    ],
    image: '/services/environmental.jpg',
    link: '/services/environmental'
  },
  {
    title: 'Health & Safety Services',
    description: 'Expert guidance and solutions for workplace health and safety management.',
    items: [
      'Safety Program Development',
      'Risk Assessments',
      'OSHA Compliance',
      'Safety Training Programs',
      'Industrial Hygiene',
      'Emergency Response Planning',
      'Safety Culture Development'
    ],
    image: '/services/safety.jpg',
    link: '/services/safety'
  },
  {
    title: 'Consulting Services',
    description: 'Strategic consulting to optimize your EHS programs and performance.',
    items: [
      'EHS Program Assessment',
      'Regulatory Compliance Support',
      'Management System Development',
      'Performance Metrics & Analytics',
      'Due Diligence',
      'Expert Witness Services',
      'Best Practice Implementation'
    ],
    image: '/services/consulting.jpg',
    link: '/services/consulting'
  },
  {
    title: 'Training & Education',
    description: 'Comprehensive training solutions to build competency and awareness.',
    items: [
      'OSHA Required Training',
      'Environmental Awareness',
      'Leadership Development',
      'Custom Training Programs',
      'Online Learning Solutions',
      'Train-the-Trainer Programs',
      'Certification Preparation'
    ],
    image: '/services/training.jpg',
    link: '/services/training'
  }
];

const ProductsServices = () => {
  return (
    <div id="products-services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Comprehensive Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Products & Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive suite of EHS services is designed to help organizations achieve excellence 
            in environmental health and safety management while ensuring regulatory compliance.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={service.title} className="flex flex-col">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm ring-1 ring-gray-200/50">
                <div className="relative">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src="/TDALogoPNG.png"
                      alt={service.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-b from-gray-900/50 to-gray-900/0" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {`Service ${index + 1}`}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {service.description}
                  </p>
                  <ul role="list" className="mt-8 space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-x-2 text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                    >
                      Learn more
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsServices;

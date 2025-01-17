import React from 'react';
import Navigation from '@/components/Navigation';
import { services } from '@/components/services/ProductsServices';

interface ServicePageProps {
  params: {
    service: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.link.split('/').pop(),
  }));
}

const ServicePage = ({ params }: ServicePageProps) => {
  const service = services.find(
    (s) => s.link.split('/').pop() === params.service
  );

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <main>
      <Navigation />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {service.description}
            </p>
            <div className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Our Services Include:
              </h2>
              <ul className="mt-8 space-y-6">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicePage;

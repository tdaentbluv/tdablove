import React from 'react';

const ServicesHero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Comprehensive EHS Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                From regulatory compliance to workplace safety, our comprehensive suite of services 
                ensures your organization maintains the highest standards of environmental health 
                and safety practices.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#products-services"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Explore Our Services
                </a>
                <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 md:-mr-20 lg:-mr-36" />
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-white opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;

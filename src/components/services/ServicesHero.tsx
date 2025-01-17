import React from 'react';
import Image from 'next/image';

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
                  Contact Us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 md:-mr-20 lg:-mr-36" />
          <div className="shadow-lg md:rounded-3xl">
            <div className="bg-blue-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" />
              <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                  <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          Services Overview
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pb-14 pt-6">
                      <Image
                        src="/TDALogoPNG.png"
                        alt="TDA Services"
                        width={1000}
                        height={600}
                        className="w-full rounded-md bg-white/5 ring-1 ring-white/10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;

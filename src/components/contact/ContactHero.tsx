import Image from 'next/image';

const ContactHero = () => {
  return (
    <div className="relative bg-white">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Our EHS experts are ready to help you create a safer workplace. Whether you need 
            consulting, training, or certification services, we're here to support your safety 
            and compliance goals.
          </p>
          <div className="mt-10 flex justify-center space-x-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary/10 rounded-full">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="mt-4 text-lg font-medium text-gray-900">24/7 Support</p>
              <p className="mt-2 text-base text-gray-600">Always available for emergencies</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary/10 rounded-full">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="mt-4 text-lg font-medium text-gray-900">Certified Experts</p>
              <p className="mt-2 text-base text-gray-600">Industry-leading professionals</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary/10 rounded-full">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="mt-4 text-lg font-medium text-gray-900">Nationwide Service</p>
              <p className="mt-2 text-base text-gray-600">Available across the country</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;

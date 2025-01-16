'use client';

const GetCertified = () => {
  return (
    <section id="get-certified" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Certified Today
          </h2>
          <p className="text-xl text-gray-600">
            Take the first step towards advancing your safety career
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Begin?
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="certification" className="block text-sm font-medium text-gray-700">
                    Desired Certification Level
                  </label>
                  <select
                    id="certification"
                    name="certification"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  >
                    <option>OSHA 10-Hour</option>
                    <option>OSHA 30-Hour</option>
                    <option>Safety Professional</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white rounded-md py-3 px-4 hover:bg-primary-dark transition-colors"
                >
                  Start Certification Process
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Get Certified with Us?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Industry-recognized certifications</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Experienced instructors</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Flexible learning options</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Ongoing support and resources</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Need More Information?</h3>
              <p className="mb-6">
                Contact our certification specialists for personalized guidance on choosing the right certification path for your career goals.
              </p>
              <button className="bg-white text-primary rounded-md py-2 px-4 hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetCertified;

'use client';

const RegisterClasses = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl overflow-hidden">
          <div className="relative px-6 py-16 sm:px-12 lg:px-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0L100 100M100 0L0 100" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Class Information */}
                <div className="text-white">
                  <h2 className="text-4xl font-bold mb-6">
                    Upcoming Safety Classes
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-white bg-opacity-10 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-2">OSHA 10-Hour Construction Safety</h3>
                      <p className="text-sm opacity-90 mb-4">Next Class: February 1st, 2025</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Duration: 2-3 Days (10 Hours Total)
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Format: Online or In-Person Available
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Cost: $89 Online / $199 In-Person
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white bg-opacity-10 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-2">OSHA 10-Hour General Industry</h3>
                      <p className="text-sm opacity-90 mb-4">Next Class: February 15th, 2025</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Duration: 2-3 Days (10 Hours Total)
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Format: Online or In-Person Available
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Cost: $89 Online / $199 In-Person
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Column - Registration Form */}
                <div className="bg-white rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Register for Classes
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="class-type" className="block text-sm font-medium text-gray-700 mb-1">
                        Select Class
                      </label>
                      <select
                        id="class-type"
                        name="class-type"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      >
                        <option>OSHA 10-Hour Construction Safety - Feb 1</option>
                        <option>OSHA 10-Hour General Industry - Feb 15</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="format" className="block text-sm font-medium text-gray-700 mb-1">
                        Class Format
                      </label>
                      <select
                        id="format"
                        name="format"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      >
                        <option>Virtual</option>
                        <option>In-Person</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="reg-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="reg-name"
                        name="reg-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="reg-email"
                        name="reg-email"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="reg-phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="reg-phone"
                        name="reg-phone"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white rounded-md py-3 px-4 hover:bg-primary-dark transition-colors mt-6"
                    >
                      Register Now
                    </button>
                  </form>
                  <p className="text-sm text-gray-500 mt-4">
                    * Registration confirmation and payment details will be sent to your email
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterClasses;

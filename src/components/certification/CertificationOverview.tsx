const CertificationOverview = () => {
  return (
    <section id="certification-overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Course Overview
          </h2>
          <p className="text-xl text-gray-600">
            OSHA 10-Hour training covers essential workplace safety topics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Construction Industry Topics
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Introduction to OSHA</h4>
                  <p className="mt-2 text-gray-600">
                    Workers' rights, employer responsibilities, and how to file a complaint
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Focus Four Hazards</h4>
                  <p className="mt-2 text-gray-600">
                    Falls, struck-by, caught-in/between, and electrocution hazards
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Personal Protective Equipment</h4>
                  <p className="mt-2 text-gray-600">
                    Selection, use, and maintenance of PPE
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    4
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Health Hazards</h4>
                  <p className="mt-2 text-gray-600">
                    Common health hazards and prevention measures
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Course Requirements
            </h3>
            <div className="bg-gray-50 rounded-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Complete all required topics (10 hours minimum)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Pass course assessments with 70% or higher</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Active participation in all training sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Course must be completed within 6 months</span>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-primary bg-opacity-10 rounded-lg">
                <h4 className="text-lg font-medium text-primary mb-2">Important Note</h4>
                <p className="text-gray-600">
                  Upon successful completion, you'll receive your DOL/OSHA 10-Hour card, which never expires but updating every 3-5 years is recommended.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationOverview;

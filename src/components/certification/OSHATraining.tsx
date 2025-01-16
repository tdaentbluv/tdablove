const OSHATraining = () => {
  return (
    <section id="osha-training" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What is OSHA 10-Hour Training?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The OSHA 10-Hour Outreach Training Program provides entry-level workers with essential workplace safety and health information. This voluntary program is designed to promote workplace safety and health and to make workers more knowledgeable about workplace hazards and their rights.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Covers essential workplace safety topics and OSHA standards</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Available for both Construction and General Industry</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Department of Labor card upon completion</span>
              </li>
            </ul>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="bg-primary rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Program Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Meets OSHA training requirements</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Required by many employers and job sites</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Valid for life (with recommended updates)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OSHATraining;

const CertificationBenefits = () => {
  return (
    <section id="certification-benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benefits of Becoming Certified
          </h2>
          <p className="text-xl text-gray-600">
            Discover the advantages of obtaining your safety certification
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Career Advancement */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-primary mb-4">
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Advancement</h3>
            <p className="text-gray-600">
              Open new career opportunities and increase your earning potential with recognized certifications.
            </p>
          </div>

          {/* Industry Recognition */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-primary mb-4">
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Recognition</h3>
            <p className="text-gray-600">
              Gain credibility with employers and clients through nationally recognized certifications.
            </p>
          </div>

          {/* Workplace Safety */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-primary mb-4">
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Safety</h3>
            <p className="text-gray-600">
              Develop the skills to create and maintain safer workplaces for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationBenefits;

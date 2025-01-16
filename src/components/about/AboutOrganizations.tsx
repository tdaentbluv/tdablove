import Link from 'next/link';

const AboutOrganizations = () => {
  return (
    <section className="py-20 bg-white">
      {/* TDA Enterprise Section */}
      <div id="tda" className="container mx-auto px-4 mb-20">
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                TDA Enterprise LLC
              </h2>
              <p className="text-gray-600 mb-6">
                Founded by Tremayne D. Anderson, OHST, COSS, TDA Enterprise LLC specializes in 
                occupational safety and health training, with a focus on OSHA compliance and 
                construction safety. We provide comprehensive safety consulting services, 
                including program development, risk assessment, and authorized OSHA training 
                for construction and general industry.
              </p>
              <Link
                href="/"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Visit TDA Enterprise
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src="/images/tda-enterprise.jpg"
                  alt="TDA Enterprise"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* B Love Foundation Section */}
      <div id="blove" className="container mx-auto px-4">
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img
                    src="/images/blove-foundation.jpg"
                    alt="B Love Foundation"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                B Love Foundation
              </h2>
              <p className="text-gray-600 mb-6">
                The B Love Foundation is dedicated to making a positive impact in our
                community through various charitable initiatives and programs. We
                believe in giving back and creating opportunities for those in need.
              </p>
              <Link
                href="/blove-foundation"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Learn More About B Love Foundation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOrganizations;

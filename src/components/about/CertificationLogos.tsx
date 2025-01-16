const CertificationLogos = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Certifications & Partnerships
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {/* Replace these with actual certification logos */}
          <div className="w-40 h-40 bg-white rounded-lg shadow-md flex items-center justify-center p-4">
            <img
              src="/images/cert-logo-1.png"
              alt="OSHA Certification"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="w-40 h-40 bg-white rounded-lg shadow-md flex items-center justify-center p-4">
            <img
              src="/images/cert-logo-2.png"
              alt="Safety Certification"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="w-40 h-40 bg-white rounded-lg shadow-md flex items-center justify-center p-4">
            <img
              src="/images/cert-logo-3.png"
              alt="Training Certification"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="w-40 h-40 bg-white rounded-lg shadow-md flex items-center justify-center p-4">
            <img
              src="/images/cert-logo-4.png"
              alt="Industry Certification"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationLogos;

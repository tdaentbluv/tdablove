const AboutCEO = () => {
  return (
    <section id="ceo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
              <img
                src="/images/TremayneAnderson.jpeg"
                alt="Tremayne D. Anderson - CEO of TDA Enterprise LLC"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tremayne D. Anderson, OHST, COSS
            </h2>
            <p className="text-xl text-primary font-semibold mb-6">
              CEO at TDA Enterprise LLC | Safety Consultant | OSHA Authorized Construction Trainer
            </p>
            
            <div className="prose max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Background</h3>
                <p className="text-gray-600 mb-4">
                  A dedicated safety professional with over 15 years of experience in occupational safety and health. 
                  Certified as an Occupational Health and Safety Technologist (OHST) and Certified Occupational Safety 
                  Specialist (COSS), specializing in construction safety and OSHA compliance.
                </p>
                <p className="text-gray-600 mb-4">
                  Currently serving as an OSHA Authorized Construction Trainer and Safety Consultant at TDA Enterprise LLC, 
                  providing comprehensive safety training and consulting services across various industries.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications & Expertise</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>OSHA Authorized Construction Trainer</li>
                  <li>Occupational Health and Safety Technologist (OHST)</li>
                  <li>Certified Occupational Safety Specialist (COSS)</li>
                  <li>Construction Health and Safety Technician (CHST)</li>
                  <li>Environmental Health and Safety Professional</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                <p className="text-gray-600">
                  To enhance workplace safety through comprehensive training and education, ensuring every worker has 
                  the knowledge and tools needed to return home safely each day. Our goal is to create a culture of 
                  safety awareness and compliance across all industries we serve.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience Highlights</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Safety Director at multiple construction companies</li>
                  <li>Development and implementation of comprehensive safety programs</li>
                  <li>OSHA compliance training and consultation</li>
                  <li>Risk assessment and safety audits</li>
                  <li>Emergency response planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCEO;

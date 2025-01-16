import Image from 'next/image';

interface Certification {
  logoImage: string;
  title: string;
  organizationName: string;
  organizationLink: string;
}

const certifications: Certification[] = [
  {
    logoImage: '/images/certificationlogos/OSHASafetyTrainingInstitute.jpeg',
    title: 'OSHA 500 Certification',
    organizationName: 'OSHA Safety Training Institute',
    organizationLink: 'https://www.osha.gov/otiec',
  },
  {
    logoImage: '/images/certificationlogos/OSHASafetyTrainingInstitute.jpeg',
    title: 'OSHA 501 Certification',
    organizationName: 'OSHA Safety Training Institute',
    organizationLink: 'https://www.osha.gov/otiec',
  },
  {
    logoImage: '/images/certificationlogos/OSHASafetyTrainingInstitute.jpeg',
    title: 'OSHA 503 Certification',
    organizationName: 'OSHA Safety Training Institute',
    organizationLink: 'https://www.osha.gov/otiec',
  },
  {
    logoImage: '/images/certificationlogos/OSHASafetyTrainingInstitute.jpeg',
    title: 'OSHA 510 Certification',
    organizationName: 'OSHA Safety Training Institute',
    organizationLink: 'https://www.osha.gov/otiec',
  },
  {
    logoImage: '/images/certificationlogos/OSHASafetyTrainingInstitute.jpeg',
    title: 'OSHA 511 Certification',
    organizationName: 'OSHA Safety Training Institute',
    organizationLink: 'https://www.osha.gov/otiec',
  },
  {
    logoImage: '/images/certificationlogos/american_red_cross_logo.jpeg',
    title: 'CPR, First Aid, AED Instructor',
    organizationName: 'American Red Cross',
    organizationLink: 'https://www.redcross.org',
  },
  {
    logoImage: '/images/certificationlogos/alliancesafetycouncil_logo.jpeg',
    title: 'Certified Occupational Safety Specialist',
    organizationName: 'Alliance Safety Council',
    organizationLink: 'http://www.alliancesafetycouncil.org',
  },
  {
    logoImage: '/images/certificationlogos/international_brotherhood_of_teamsters_logo.jpeg',
    title: 'HAZWOPER 40-Hour',
    organizationName: 'International Brotherhood of Teamsters',
    organizationLink: 'http://www.teamster.org',
  },
  {
    logoImage: '/images/certificationlogos/USDepartmentofLabor.jpeg',
    title: 'OSHA Special Government Employee Certification',
    organizationName: 'US Department of Labor',
    organizationLink: 'http://www.dol.gov',
  },
];

const CertificationLevels = () => {
  return (
    <section id="certification-levels" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            TDA Enterprise Qualifications
          </h2>
          <p className="text-xl text-gray-600">
            Professional certifications and qualifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
              <div className="relative h-48 w-full flex items-center justify-center">
                <Image
                  src={cert.logoImage}
                  alt={`${cert.organizationName} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col items-center justify-between w-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {cert.title}
                </h3>
                <div className="mt-auto text-center">
                  <a
                    href={cert.organizationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark"
                  >
                    {cert.organizationName}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationLevels;

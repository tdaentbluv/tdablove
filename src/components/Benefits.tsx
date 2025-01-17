'use client';

import { useState } from 'react';

interface BenefitItem {
  title: string;
  items: string[];
  icon: string;
}

const benefitsData: BenefitItem[] = [
  {
    title: "Regulatory Compliance",
    items: [
      "Improved compliance with OSHA, EPA, and other regulatory requirements",
      "Reduced risk of violations and penalties",
      "Updated documentation and permits"
    ],
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
  },
  {
    title: "Risk Management",
    items: [
      "Comprehensive workplace hazard assessments",
      "Implementation of safety protocols and procedures",
      "Reduced workplace accidents and incidents",
      "Lower insurance premiums due to better safety records"
    ],
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Environmental Impact",
    items: [
      "Reduced environmental footprint",
      "Improved waste management practices",
      "Enhanced sustainability initiatives",
      "Better resource utilization"
    ],
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
  },
  {
    title: "Health & Safety Culture",
    items: [
      "Improved employee safety awareness",
      "Enhanced safety training programs",
      "Better emergency response preparedness",
      "Reduced workplace injuries and illnesses"
    ],
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    title: "Operational Efficiency",
    items: [
      "Streamlined safety processes",
      "Optimized resource allocation",
      "Reduced downtime from accidents",
      "Better equipment maintenance schedules"
    ],
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Cost Savings",
    items: [
      "Lower workers' compensation costs",
      "Reduced insurance premiums",
      "Avoided regulatory fines",
      "More efficient resource usage"
    ],
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Documentation & Systems",
    items: [
      "Updated safety manuals and procedures",
      "Improved record-keeping systems",
      "Better tracking of incidents and near-misses",
      "Enhanced reporting capabilities"
    ],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    title: "Employee Engagement",
    items: [
      "Increased worker participation in safety programs",
      "Better communication of safety initiatives",
      "Higher employee satisfaction and retention",
      "Reduced resistance to safety protocols"
    ],
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  }
];

const Benefits = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            EHS Consulting Outcomes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the comprehensive benefits of our EHS consulting services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-6 transition-shadow duration-300 ${
                hoveredIndex === index ? 'shadow-xl' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-primary rounded-md">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={benefit.icon}
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                {benefit.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {benefit.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start text-gray-600"
                  >
                    <svg
                      className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

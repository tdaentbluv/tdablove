import { useState } from 'react';

interface JobListing {
  id: string;
  title: string;
  locations: {
    city: string;
    state: string;
    zip: string;
  }[];
  closingDate: string;
  description: string;
  requirements: string[];
  submissionRequirements: string[];
}

const jobListings: JobListing[] = [
  {
    id: '1',
    title: 'OSHA Safety Instructor',
    locations: [
      {
        city: 'Houston',
        state: 'TX',
        zip: '77001',
      },
      {
        city: 'Dallas',
        state: 'TX',
        zip: '75001',
      },
    ],
    closingDate: '2025-02-28',
    description: 'We are seeking an experienced OSHA Safety Instructor to join our team. The ideal candidate will have extensive knowledge of OSHA regulations and experience in conducting safety training sessions.',
    requirements: [
      'Minimum 5 years experience in OSHA safety training',
      'OSHA 500 Certification',
      'Excellent communication and presentation skills',
      'Ability to travel between locations',
      'Bachelor\'s degree in Occupational Safety or related field',
    ],
    submissionRequirements: [
      'Updated resume',
      'Cover letter',
      'Copy of OSHA certifications',
      'Three professional references',
    ],
  },
  // Add more job listings as needed
];

const CareersList = () => {
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleApply = (job: JobListing) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
        
        <div className="grid gap-8">
          {jobListings.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{job.title}</h3>
              
              <div className="mb-4">
                <h4 className="text-lg font-medium text-gray-700 mb-2">Locations:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {job.locations.map((location, index) => (
                    <div key={index} className="text-gray-600">
                      {location.city}, {location.state} {location.zip}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-gray-700 mb-2">Closing Date:</h4>
                <p className="text-gray-600">{new Date(job.closingDate).toLocaleDateString()}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-gray-700 mb-2">Job Description:</h4>
                <p className="text-gray-600">{job.description}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-gray-700 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-700 mb-2">Submission Requirements:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {job.submissionRequirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleApply(job)}
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {showApplicationForm && selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
              <h3 className="text-2xl font-semibold mb-4">Apply for {selectedJob.title}</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Resume</label>
                  <input
                    type="file"
                    className="mt-1 block w-full"
                    accept=".pdf,.doc,.docx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
                  <input
                    type="file"
                    className="mt-1 block w-full"
                    accept=".pdf,.doc,.docx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Additional Information</label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareersList;

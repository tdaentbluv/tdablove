import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <main>
      <Navigation />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Privacy Policy
            </h1>
            <div className="mt-10 space-y-8 text-gray-600">
              <p>
                This Privacy Policy describes how TDA Enterprise Solutions ("we," "us," or "our") 
                collects, uses, and shares your personal information when you visit our website.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including your name, 
                email address, and any other information you choose to provide when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact us through our website</li>
                <li>Sign up for our newsletter</li>
                <li>Request a consultation</li>
                <li>Apply for a position</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries</li>
                <li>Provide the services you request</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share 
                your information with service providers who assist us in operating our website 
                and conducting our business.
              </p>

              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@tdaenterprise.com
                <br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;

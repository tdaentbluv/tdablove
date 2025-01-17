import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <main>
      <Navigation />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Terms of Service
            </h1>
            <div className="mt-10 space-y-8 text-gray-600">
              <p>
                These Terms of Service ("Terms") govern your access to and use of TDA Enterprise 
                Solutions' website and services. By accessing or using our services, you agree 
                to be bound by these Terms.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900">Use of Services</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with 
                these Terms. You are responsible for ensuring that your use of our services 
                complies with all applicable laws and regulations.
              </p>

              <h2 className="text-2xl font-bold text-gray-900">Intellectual Property</h2>
              <p>
                All content, features, and functionality of our website, including but not 
                limited to text, graphics, logos, and images, are owned by TDA Enterprise 
                Solutions and are protected by copyright and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900">Disclaimer of Warranties</h2>
              <p>
                Our services are provided "as is" and "as available" without any warranties 
                of any kind, either express or implied. We do not warrant that our services 
                will be uninterrupted, error-free, or free from harmful components.
              </p>

              <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, TDA Enterprise Solutions shall not be 
                liable for any indirect, incidental, special, consequential, or punitive 
                damages arising out of or relating to your use of our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you 
                of any material changes by posting the updated Terms on our website. Your 
                continued use of our services after such changes constitutes your acceptance 
                of the new Terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
                <br />
                Email: legal@tdaenterprise.com
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

export default TermsOfService;

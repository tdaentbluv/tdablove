import ProductHero from '../../components/products/ProductHero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot,
  faChartLine,
  faShieldAlt,
  faBrain,
  faGears,
  faArrowTrendUp
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ProductHero />

      {/* AI in EHS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI: The Future of EHS Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In 2025 and beyond, AI integration is not just an advantage—it's a necessity 
              for maintaining competitive edge in Environmental Health & Safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-primary mb-4">
                <FontAwesomeIcon icon={faRobot} className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Intelligent Automation</h3>
              <p className="text-gray-600">
                Automate routine tasks and compliance checks while maintaining accuracy 
                and consistency across your organization.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-primary mb-4">
                <FontAwesomeIcon icon={faChartLine} className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">
                Leverage machine learning to predict potential hazards and prevent 
                incidents before they occur.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-primary mb-4">
                <FontAwesomeIcon icon={faShieldAlt} className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Compliance</h3>
              <p className="text-gray-600">
                Stay ahead of regulatory requirements with AI-powered compliance monitoring 
                and automated reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* N8N Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionize EHS with N8N Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of workflow automation with N8N integration, 
              creating seamless EHS processes that scale with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faBrain} className="text-primary text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Intelligent Workflows</h3>
                  <p className="text-gray-600">
                    Create smart, automated workflows that adapt to your specific EHS needs. 
                    From incident reporting to compliance checks, N8N handles it all with precision.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faGears} className="text-primary text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Seamless Integration</h3>
                  <p className="text-gray-600">
                    Connect your existing EHS tools and databases with N8N's powerful 
                    integration capabilities. Create a unified system that works in harmony.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faArrowTrendUp} className="text-primary text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Solutions</h3>
                  <p className="text-gray-600">
                    As your business grows, your EHS processes scale automatically. 
                    N8N's flexible architecture ensures your workflows evolve with your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Example Workflows</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Automated incident reporting and investigation triggers</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Real-time safety metrics dashboard updates</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Compliance document automation and tracking</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Environmental monitoring and alert system</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Training and certification expiration monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your EHS Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the future of Environmental Health & Safety with TDA EHS AI. 
            Schedule a demo to see how we can revolutionize your operations.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md transition-colors inline-block font-medium"
          >
            Schedule Demo
          </Link>
        </div>
      </section>
    </main>
  );
}

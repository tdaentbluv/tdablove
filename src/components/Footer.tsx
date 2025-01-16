import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
                  <Image
                    src="/TDALogoPNG.png"
                    alt="TDA Logo"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-white">TDA Enterprise</span>
                  <span className="text-xs font-medium tracking-wider text-gray-400 uppercase">Safety Through Excellence</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Your trusted partner in occupational safety training and consultation. 
                We deliver comprehensive solutions that protect your workforce and ensure 
                regulatory compliance nationwide.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-primary hover:text-white transition-all"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-primary hover:text-white transition-all"
                >
                  <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-primary hover:text-white transition-all"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-primary hover:text-white transition-all"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/certification" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Certification
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/safety-training" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Safety Training
                  </Link>
                </li>
                <li>
                  <Link href="/services/osha-compliance" className="text-sm text-gray-400 hover:text-white transition-colors">
                    OSHA Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/services/consulting" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Safety Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/services/certification" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Professional Certification
                  </Link>
                </li>
                <li>
                  <Link href="/services/auditing" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Safety Auditing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-sm text-gray-400">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-gray-500 mt-0.5" />
                  <span>
                    1234 Safety Street<br />
                    Suite 100<br />
                    Atlanta, GA 30301
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-gray-500" />
                  <a href="tel:+1234567890" className="text-sm text-gray-400 hover:text-white transition-colors">
                    (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-gray-500" />
                  <a href="mailto:info@tdaenterprise.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                    info@tdaenterprise.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-xs text-gray-400">
                {new Date().getFullYear()} TDA Enterprise LLC. All rights reserved.
              </p>
              <div className="flex space-x-8">
                <Link href="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

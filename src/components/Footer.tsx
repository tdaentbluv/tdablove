import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">TDA Enterprise</span>
            </div>
            <p className="mt-4 text-gray-300">
              123 Business Street<br />
              San Francisco, CA 94105
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-base text-gray-300 hover:text-white">About</Link>
              </li>
              <li>
                <Link href="/products" className="text-base text-gray-300 hover:text-white">Products</Link>
              </li>
              <li>
                <Link href="/services" className="text-base text-gray-300 hover:text-white">Services</Link>
              </li>
              <li>
                <Link href="/blog" className="text-base text-gray-300 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy" className="text-base text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-base text-gray-300 hover:text-white">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Social</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            2024 TDA Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

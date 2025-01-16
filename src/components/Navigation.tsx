import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/TDALogoPNG.png"
                  alt="TDA Logo"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-gray-900">TDA Enterprise</span>
                <span className="text-xs font-medium tracking-wider text-gray-500 uppercase">Safety Through Excellence</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <div className="flex space-x-6 mr-8">
              <Link href="/about" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/products" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                Products
              </Link>
              <Link href="/services" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                Services
              </Link>
              <Link href="/certification" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                Certification
              </Link>
              <Link href="/careers" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                Careers
              </Link>
              <Link href="/blog" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                Blog
              </Link>
            </div>
            <Link 
              href="/contact" 
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/signin"
              className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-primary rounded-md text-base font-medium text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

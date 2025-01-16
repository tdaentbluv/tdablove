import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex-shrink-0 flex items-center py-4">
            <Image
              src="/TDALogoPNG.png"
              alt="TDA Logo"
              width={60}
              height={60}
              className="rounded-lg"
              priority
            />
            <span className="ml-3 text-xl font-bold">TDA Enterprises</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-primary">About</Link>
            <Link href="/products" className="text-gray-700 hover:text-primary">Products</Link>
            <Link href="/services" className="text-gray-700 hover:text-primary">Services</Link>
            <Link href="/certification" className="text-gray-700 hover:text-primary">Certification</Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-primary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

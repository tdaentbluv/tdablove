import Image from 'next/image';

const CareerHero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        src="/images/manufacturing-work.jpg"
        alt="Manufacturing work environment"
        fill
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
        priority
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Join Our Team
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Build your career with TDA Enterprise Solutions. We're looking for passionate 
            individuals who share our commitment to workplace safety and excellence.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#open-positions"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View Open Positions
            </a>
            <a href="/about" className="text-sm font-semibold leading-6 text-white">
              Learn about us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;

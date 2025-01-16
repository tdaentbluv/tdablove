import Image from 'next/image';

const CareerHero = () => {
  return (
    <div className="relative h-[500px] w-full">
      <Image
        src="/images/manufacturing-work.jpg"
        alt="Manufacturing work environment"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              TDA Enterprise Careers
            </h1>
            <p className="mt-4 text-xl text-white">
              Providing career opportunities in the OSHA safety industry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;

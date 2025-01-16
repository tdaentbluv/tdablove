import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Elevate Your EHS Standards Today
          </h2>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Don't let safety and compliance issues put your business at risk. Partner with TDA Enterprise 
            for comprehensive EHS solutions through our expert consulting, standardized training, and 
            industry-recognized certification services. Our tailored approach ensures your organization 
            meets and exceeds safety standards.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/consulting"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent 
                text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 
                transition duration-300 shadow-sm"
            >
              Request Consulting
            </Link>
            <Link 
              href="/training"
              className="inline-flex items-center justify-center px-8 py-3 border border-white 
                text-base font-medium rounded-md text-white hover:bg-white/10 
                transition duration-300"
            >
              Get Trained
            </Link>
            <Link 
              href="/certification"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent 
                text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 
                transition duration-300 shadow-sm"
            >
              Get Certified
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

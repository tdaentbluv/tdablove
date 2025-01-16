const CallToAction = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transform Your Business Today
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="mt-10">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

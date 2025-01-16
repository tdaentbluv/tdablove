const Benefit1 = () => {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <div className="aspect-w-3 aspect-h-2">
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-lg opacity-75"></div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:ml-8">
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6">
              <span className="block">Transform Your</span>
              <span className="block text-primary">EHS Experiences</span>
            </h1>
            <p className="mt-3 text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit1;

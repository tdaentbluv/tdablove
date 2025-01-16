const Benefit2 = () => {
  const benefits = [
    {
      title: 'Innovation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      title: 'Quality',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    },
    {
      title: 'Excellence',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Benefits
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-secondary rounded-lg"></div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefit2;

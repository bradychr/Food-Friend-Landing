const Features = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Snap & Discover',
      description: 'Take a photo of your fridge or pantry, and our AI instantly identifies your ingredients and suggests delicious recipes.',
    },
    {
      id: 2,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Smart Pantry',
      description: 'Keep track of staples you always have on hand. Never re-enter your spices, oils, or baking essentials again.',
    },
    {
      id: 3,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Zero Waste Cooking',
      description: 'Use what you have before it goes bad. Our smart recommendations help you reduce food waste and save money.',
    },
    {
      id: 4,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Social Inspiration',
      description: 'Share your culinary creations and discover what others are cooking. Get inspired by a community of home cooks.',
    },
    {
      id: 5,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Personalized Results',
      description: 'Filter by dietary preferences, cooking time, and meal type. Get recipes that match your lifestyle perfectly.',
    },
    {
      id: 6,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      ),
      title: 'Recipe Saving',
      description: 'Build your personal cookbook. Save favorites, organize collections, and access your recipes anytime.',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-accent-50 to-brass-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brass-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-200 rounded-full blur-3xl opacity-20"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="font-hand text-2xl text-primary-600 block mb-2">What makes us special</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
            Everything You Need to <span className="text-primary-600">Cook with Joy</span>
          </h2>
          <p className="text-lg text-secondary-700 max-w-2xl mx-auto font-sans">
            From smart ingredient recognition to sharing your culinary creations,
            Fridge Friend makes home cooking delightful and inspiring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group p-8 rounded-3xl bg-white hover:bg-gradient-to-br hover:from-primary-50 hover:to-accent-50 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-primary-200 hover:border-brass-400 transform hover:-translate-y-2 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-primary-400 to-brass-400 flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-warm-900 mb-3 group-hover:text-primary-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-warm-700 font-sans leading-relaxed">{feature.description}</p>

              {/* Decorative corner accent */}
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary-500 via-brass-500 to-primary-500 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

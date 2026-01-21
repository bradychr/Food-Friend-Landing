const Screenshots = () => {
  const screenshots = [
    {
      id: 1,
      title: 'Ingredient Scanning',
      description: 'AI-powered recognition identifies your ingredients instantly',
      placeholder: (
        <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Recipe Results',
      description: 'Browse personalized recipe recommendations',
      placeholder: (
        <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Recipe Details',
      description: 'Step-by-step instructions and ingredient lists',
      placeholder: (
        <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Social Feed',
      description: 'Share and discover culinary inspiration',
      placeholder: (
        <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'User Profile',
      description: 'Manage your saved recipes and preferences',
      placeholder: (
        <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            A Glimpse of What's Coming
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Beautiful, intuitive design meets powerful functionality
          </p>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden overflow-x-auto pb-8 -mx-4 px-4">
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {screenshots.map((screenshot) => (
              <div
                key={screenshot.id}
                className="w-64 flex-shrink-0"
              >
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 h-96 flex flex-col items-center justify-center shadow-lg">
                  <div className="text-primary-600 mb-4">
                    {screenshot.placeholder}
                  </div>
                  <p className="text-sm text-neutral-500 text-center">Screenshot Preview</p>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mt-4 text-center">
                  {screenshot.title}
                </h3>
                <p className="text-sm text-neutral-600 mt-2 text-center">
                  {screenshot.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className="group">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 h-96 flex flex-col items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="text-primary-600 mb-4">
                  {screenshot.placeholder}
                </div>
                <p className="text-sm text-neutral-500 text-center">Screenshot Preview</p>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mt-4 text-center">
                {screenshot.title}
              </h3>
              <p className="text-sm text-neutral-600 mt-2 text-center">
                {screenshot.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500 italic">
            App mockups coming soon. Join the waitlist to be the first to see them!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;

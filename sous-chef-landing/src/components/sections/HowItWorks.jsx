import phoneImg from '../../assets/images/phone.jpg';
import personalizedResultsImg from '../../assets/images/personalized results.jpg';
import recipeBookImg from '../../assets/images/recipe book.jpg';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Snap a Photo',
      description: 'Open the app and take a picture of your fridge, pantry, or individual ingredients.',
      image: phoneImg,
    },
    {
      id: 2,
      title: 'Select Preferences',
      description: 'Choose your meal type, dietary restrictions, and how much time you have to cook.',
      image: personalizedResultsImg,
    },
    {
      id: 3,
      title: 'Get Recipes',
      description: 'Receive personalized recipe recommendations instantly, matched to your ingredients and preferences.',
      image: recipeBookImg,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-accent-100 via-secondary-100 to-brass-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-brass-300 rounded-full blur-3xl opacity-20"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="font-hand text-2xl text-brass-600 block mb-2">Simple & Delightful</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-warm-700 max-w-2xl mx-auto">
            From photo to plate in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-2 bg-gradient-to-r from-primary-400 via-brass-400 to-primary-400 rounded-full" style={{ top: '4rem' }}></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step number badge */}
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-primary-500 to-brass-500 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-xl z-10 border-4 border-white">
                {step.id}
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary-200 hover:border-brass-400 hover:scale-105 transform">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-warm-900 mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-warm-700 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-6">
                  <svg className="w-10 h-10 text-brass-500" fill="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

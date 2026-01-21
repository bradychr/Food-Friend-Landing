import phoneImg from '../../assets/images/phone.jpg';
import pantryImg from '../../assets/images/pantry.jpg';
import freshtablesImg from '../../assets/images/freshtables.jpg';
import foocialMediaImg from '../../assets/images/foocial media.jpg';
import personalizedResultsImg from '../../assets/images/personalized results.jpg';
import recipeBookImg from '../../assets/images/recipe book.jpg';

const Features = () => {
  const features = [
    {
      id: 1,
      image: phoneImg,
      title: 'Snap & Discover',
      description: 'Take a photo of your fridge or pantry, and our AI instantly identifies your ingredients and suggests delicious recipes.',
    },
    {
      id: 2,
      image: pantryImg,
      title: 'Smart Pantry',
      description: 'Keep track of staples you always have on hand. Never re-enter your spices, oils, or baking essentials again.',
    },
    {
      id: 3,
      image: freshtablesImg,
      title: 'Zero Waste Cooking',
      description: 'Use what you have before it goes bad. Our smart recommendations help you reduce food waste and save money.',
    },
    {
      id: 4,
      image: foocialMediaImg,
      title: 'Social Inspiration',
      description: 'Share your culinary creations and discover what others are cooking. Get inspired by a community of home cooks.',
    },
    {
      id: 5,
      image: personalizedResultsImg,
      title: 'Personalized Results',
      description: 'Filter by dietary preferences, cooking time, and meal type. Get recipes that match your lifestyle perfectly.',
    },
    {
      id: 6,
      image: recipeBookImg,
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
              <div className="w-16 h-16 mb-4 rounded-2xl overflow-hidden transform group-hover:scale-110 transition-transform duration-300 shadow-md">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
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

import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import confetti from 'canvas-confetti';
import Button from '../common/Button';
import Input from '../common/Input';
import { useEmailSubmit } from '../../hooks/useEmailSubmit';
import { FORM_SOURCES, SUCCESS_MESSAGES, LOADING_MESSAGES } from '../../utils/constants';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [loadingMessage, setLoadingMessage] = useState(LOADING_MESSAGES[0]);
  const { submitEmail, loading, error, success } = useEmailSubmit();

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLoadingMessage(LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)]);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await submitEmail(email, FORM_SOURCES.HERO);

    if (result) {
      // Trigger confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#5b8ab3', '#d4af6e', '#4ade80', '#fb923c', '#c7b7a3']
      });

      toast.success(SUCCESS_MESSAGES.SIGNUP_SUCCESS, {
        duration: 5000,
        position: 'top-center',
      });
      setEmail(''); // Clear form on success
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-accent-50 via-secondary-50 to-primary-50 relative overflow-hidden">
      {/* Falling food waterfall - Column 1 */}
      <div className="absolute left-[5%] text-5xl animate-fall-slow opacity-0" style={{ animationDelay: '0s' }}>🥕</div>
      <div className="absolute left-[5%] text-4xl animate-fall-medium opacity-0" style={{ animationDelay: '3s' }}>🍅</div>
      <div className="absolute left-[5%] text-6xl animate-fall-fast opacity-0" style={{ animationDelay: '7s' }}>🥔</div>

      {/* Column 2 */}
      <div className="absolute left-[15%] text-5xl animate-fall-fast opacity-0" style={{ animationDelay: '1s' }}>🥑</div>
      <div className="absolute left-[15%] text-4xl animate-fall-slow opacity-0" style={{ animationDelay: '5s' }}>🌽</div>
      <div className="absolute left-[15%] text-5xl animate-fall-medium opacity-0" style={{ animationDelay: '9s' }}>🍆</div>

      {/* Column 3 */}
      <div className="absolute left-[25%] text-6xl animate-fall-medium opacity-0" style={{ animationDelay: '2s' }}>🥒</div>
      <div className="absolute left-[25%] text-5xl animate-fall-fast opacity-0" style={{ animationDelay: '6s' }}>🧅</div>
      <div className="absolute left-[25%] text-4xl animate-fall-slow opacity-0" style={{ animationDelay: '11s' }}>🥬</div>

      {/* Column 4 */}
      <div className="absolute left-[35%] text-5xl animate-fall-slow opacity-0" style={{ animationDelay: '0.5s' }}>🌶️</div>
      <div className="absolute left-[35%] text-6xl animate-fall-medium opacity-0" style={{ animationDelay: '4.5s' }}>🍄</div>
      <div className="absolute left-[35%] text-4xl animate-fall-fast opacity-0" style={{ animationDelay: '8.5s' }}>🥦</div>

      {/* Column 5 */}
      <div className="absolute left-[45%] text-4xl animate-fall-fast opacity-0" style={{ animationDelay: '1.5s' }}>🧄</div>
      <div className="absolute left-[45%] text-5xl animate-fall-slow opacity-0" style={{ animationDelay: '5.5s' }}>🫑</div>
      <div className="absolute left-[45%] text-6xl animate-fall-medium opacity-0" style={{ animationDelay: '10s' }}>🥕</div>

      {/* Column 6 */}
      <div className="absolute left-[55%] text-5xl animate-fall-medium opacity-0" style={{ animationDelay: '2.5s' }}>🍅</div>
      <div className="absolute left-[55%] text-4xl animate-fall-fast opacity-0" style={{ animationDelay: '6.5s' }}>🥜</div>
      <div className="absolute left-[55%] text-6xl animate-fall-slow opacity-0" style={{ animationDelay: '12s' }}>🧅</div>

      {/* Column 7 */}
      <div className="absolute left-[65%] text-6xl animate-fall-fast opacity-0" style={{ animationDelay: '3.5s' }}>🥑</div>
      <div className="absolute left-[65%] text-5xl animate-fall-medium opacity-0" style={{ animationDelay: '7.5s' }}>🌽</div>
      <div className="absolute left-[65%] text-4xl animate-fall-slow opacity-0" style={{ animationDelay: '13s' }}>🍆</div>

      {/* Column 8 */}
      <div className="absolute left-[75%] text-4xl animate-fall-slow opacity-0" style={{ animationDelay: '4s' }}>🥒</div>
      <div className="absolute left-[75%] text-6xl animate-fall-fast opacity-0" style={{ animationDelay: '8s' }}>🫑</div>
      <div className="absolute left-[75%] text-5xl animate-fall-medium opacity-0" style={{ animationDelay: '14s' }}>🥬</div>

      {/* Column 9 */}
      <div className="absolute left-[85%] text-5xl animate-fall-medium opacity-0" style={{ animationDelay: '4.5s' }}>🌶️</div>
      <div className="absolute left-[85%] text-4xl animate-fall-slow opacity-0" style={{ animationDelay: '9.5s' }}>🍄</div>

      {/* Column 10 */}
      <div className="absolute left-[95%] text-6xl animate-fall-fast opacity-0" style={{ animationDelay: '5s' }}>🧄</div>
      <div className="absolute left-[95%] text-5xl animate-fall-medium opacity-0" style={{ animationDelay: '10.5s' }}>🥦</div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block mb-4 animate-fade-in-up">
              <span className="font-hand text-2xl sm:text-3xl text-primary-600 transform -rotate-2 inline-block">
                Your kitchen, reimagined
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-900 mb-6 animate-fade-in-up leading-tight">
              Never Ask<br />
              <span className="text-primary-600">"What's for Dinner?"</span><br />
              <span className="relative inline-block">
                Again
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6C60 2 140 2 198 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary-400"/>
                </svg>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-warm-700 mb-8 animate-fade-in-up font-sans leading-relaxed" style={{ animationDelay: '0.1s' }}>
              Snap a photo of your fridge, and let us handle the rest.
              Discover recipes that match what you have—made with love,
              served with ease.
            </p>

            {/* Email signup form */}
            <form
              onSubmit={handleSubmit}
              className="animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading || success}
                  error={!!error}
                  ariaLabel="Email address"
                  className="flex-1"
                />
                <Button
                  type="submit"
                  disabled={loading || success}
                  className="whitespace-nowrap"
                  ariaLabel="Join waitlist"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      {loadingMessage}
                    </span>
                  ) : success ? (
                    "🎉 You're on the list!"
                  ) : (
                    'Join Waitlist'
                  )}
                </Button>
              </div>

              {/* Error message */}
              {error && (
                <p className="mt-3 text-sm text-red-600 text-center lg:text-left" role="alert">
                  {error}
                </p>
              )}

              {/* Success message */}
              {success && (
                <p className="mt-3 text-sm text-primary-600 font-medium text-center lg:text-left" role="status">
                  Check your email for confirmation!
                </p>
              )}

              <p className="mt-3 text-xs text-neutral-600 text-center lg:text-left">
                No spam, just updates. Unsubscribe anytime.
              </p>
            </form>
          </div>

          {/* Hero image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-64 sm:w-80 lg:w-[28rem] h-[32rem] animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {/* Decorative stickers */}
              <div className="absolute -top-6 -right-6 bg-primary-500 text-white font-hand text-xl px-4 py-2 rounded-full shadow-lg transform rotate-12 z-10">
                ✨ AI Powered
              </div>
              <div className="absolute -bottom-4 -left-4 bg-brass-500 text-white font-hand text-lg px-4 py-2 rounded-full shadow-lg transform -rotate-12 z-10">
                🍳 Zero Waste
              </div>

              {/* Main image card */}
              <div className="absolute inset-0 rounded-[3rem] shadow-2xl border-4 border-white overflow-hidden group">
                {/* Beautiful kitchen/pantry image */}
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
                  alt="Delicious home-cooked meal with fresh ingredients"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 via-transparent to-transparent"></div>

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
                    <p className="text-xl font-bold font-display drop-shadow-lg">Snap. Cook. Savor.</p>
                    <p className="text-sm mt-1 font-sans drop-shadow">Transform your ingredients into delicious meals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

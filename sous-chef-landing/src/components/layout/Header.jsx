import { useState, useEffect } from 'react';
import Button from '../common/Button';
import { APP_NAME } from '../../utils/constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToHero}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Sous Chef home"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <span
              className={`text-xl font-display font-bold transition-colors ${
                isScrolled ? 'text-neutral-900' : 'text-neutral-900'
              }`}
            >
              {APP_NAME}
            </span>
          </button>

          {/* CTA Button */}
          <Button
            onClick={scrollToHero}
            variant="primary"
            ariaLabel="Join waitlist"
            className="hidden sm:block"
          >
            Join Waitlist
          </Button>

          {/* Mobile CTA */}
          <Button
            onClick={scrollToHero}
            variant="primary"
            ariaLabel="Join"
            className="sm:hidden px-4"
          >
            Join
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

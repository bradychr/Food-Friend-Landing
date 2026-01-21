import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import confetti from 'canvas-confetti';
import Button from '../common/Button';
import Input from '../common/Input';
import { useEmailSubmit } from '../../hooks/useEmailSubmit';
import { FORM_SOURCES, SUCCESS_MESSAGES, APP_NAME, LOADING_MESSAGES } from '../../utils/constants';

const Footer = () => {
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

    const result = await submitEmail(email, FORM_SOURCES.FOOTER);

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
      setEmail('');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter signup section */}
      <div className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Cooking?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join the waitlist and be among the first to experience {APP_NAME}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
                {loading ? loadingMessage : success ? "🎉 You're on the list!" : 'Join Waitlist'}
              </Button>
            </form>

            {error && (
              <p className="mt-3 text-sm text-red-200" role="alert">
                {error}
              </p>
            )}

            {success && (
              <p className="mt-3 text-sm text-white font-medium" role="status">
                Check your email for confirmation!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="section-padding border-t border-neutral-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand column */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">{APP_NAME}</h3>
              <p className="text-neutral-400 mb-6">
                Smart recipe discovery powered by AI. Never wonder what to cook again.
              </p>
              {/* Social media icons placeholder */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@foodfriend.app"
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    hello@foodfriend.app
                  </a>
                </li>
                <li className="text-neutral-400">
                  More ways to reach us coming soon
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-neutral-800 text-center text-neutral-400 text-sm">
            <p>&copy; {currentYear} {APP_NAME}. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ for home cooks everywhere</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

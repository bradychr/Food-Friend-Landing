/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#dce6f0',
          200: '#b8cce0',
          300: '#91b3d1',
          400: '#6a99c2',
          500: '#5b8ab3',
          600: '#4a6f93',
          700: '#3a5672',
          800: '#293d51',
          900: '#1a2737',
        },
        secondary: {
          50: '#faf8f6',
          100: '#f5f1ed',
          200: '#ebe3db',
          300: '#dfd4c8',
          400: '#d3c5b6',
          500: '#c7b7a3',
          600: '#9f9282',
          700: '#776e62',
          800: '#4f4941',
          900: '#2a2520',
        },
        accent: {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f5eddb',
          300: '#f0e4c9',
          400: '#ebdbb7',
          500: '#d4b992',
          600: '#b89a6d',
          700: '#8f7854',
          800: '#66553c',
          900: '#3d3223',
        },
        warm: {
          50: '#f9f9f8',
          100: '#f2f1ef',
          200: '#e5e3df',
          300: '#d8d5cf',
          400: '#cbc7bf',
          500: '#b8b3aa',
          600: '#918d85',
          700: '#6a6760',
          800: '#44413c',
          900: '#252321',
        },
        brass: {
          50: '#fdfaf5',
          100: '#faf4e6',
          200: '#f5e9cd',
          300: '#efddb4',
          400: '#e9d29b',
          500: '#d4af6e',
          600: '#b8904c',
          700: '#8f6d38',
          800: '#664e29',
          900: '#3d2f19',
        }
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Libre Baskerville', 'Georgia', 'serif'],
        hand: ['Caveat', 'cursive'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(251, 146, 60, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'fall-slow': 'fall 15s linear infinite',
        'fall-medium': 'fall 12s linear infinite',
        'fall-fast': 'fall 10s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fall: {
          '0%': { transform: 'translateY(-200px) rotate(0deg)', opacity: '0' },
          '5%': { opacity: '0' },
          '15%': { opacity: '0.3' },
          '85%': { opacity: '0.2' },
          '95%': { opacity: '0' },
          '100%': { transform: 'translateY(calc(100vh + 200px)) rotate(360deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

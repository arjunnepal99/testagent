/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  safelist: [
    // Dynamic classes used in JS
    'lg:col-span-2',
    'reveal', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4',
    'featured',
    'bg-purple-50', 'text-purple-700', 'border-purple-200',
    'dark:bg-purple-900/20', 'dark:text-purple-400', 'dark:border-purple-800',
    'bg-blue-50', 'text-blue-700', 'border-blue-200',
    'dark:bg-blue-900/20', 'dark:text-blue-400', 'dark:border-blue-800',
    'bg-orange-50', 'text-orange-700', 'border-orange-200',
    'dark:bg-orange-900/20', 'dark:text-orange-400', 'dark:border-orange-800',
    'bg-pink-50', 'text-pink-700', 'border-pink-200',
    'dark:bg-pink-900/20', 'dark:text-pink-400', 'dark:border-pink-800',
    'bg-indigo-50', 'text-indigo-700', 'border-indigo-200',
    'dark:bg-indigo-900/20', 'dark:text-indigo-400', 'dark:border-indigo-800',
    'bg-yellow-50', 'text-yellow-700', 'border-yellow-200',
    'dark:bg-yellow-900/20', 'dark:text-yellow-400', 'dark:border-yellow-800',
    'bg-red-50', 'text-red-700', 'border-red-200',
    'dark:bg-red-900/20', 'dark:text-red-400', 'dark:border-red-800',
    'bg-gray-50', 'text-gray-700', 'border-gray-200',
    'dark:bg-gray-900/30', 'dark:text-gray-400', 'dark:border-gray-700',
    'bg-emerald-50', 'text-emerald-700', 'border-emerald-200',
    'dark:bg-emerald-900/20', 'dark:text-emerald-400', 'dark:border-emerald-800',
    'bg-teal-100', 'dark:from-teal-900/10',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#F7B733',
        'gold-light': '#FFD97D',
        'gold-dark': '#D4920A',
        cream: '#FFF8F0',
        'dark-bg': '#0a0a0a',
        'dark-card': '#111111',
        'dark-border': '#1e1e1e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(247,183,51,0)' },
          '50%': { boxShadow: '0 0 0 8px rgba(247,183,51,0.15)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        'pulse-gold': 'pulse-gold 3s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

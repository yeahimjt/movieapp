/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.35)',
            '0 45px 65px rgba(0, 0, 0, 0.25)'
        ]
      }
    },
    animation: {
      slideup: 'slideup 1s ease-in-out',
      slidedown: 'slidedown 1s ease-in-out',
      slideleft: 'slideleft 1s ease-in-out',
      slideright: 'slideright 1s ease-in-out',
      wave: 'wave 1.2s linear ease-in-out',
      slowfade: 'slowfade 2.2s ease-in-out',
    },
    keyframes: {
      slowfade: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      slideup: {
        from: { opacity: 0, transform: 'translateY(25%)' },
        to: { opacity: 1, transform: 'none' },
      },
      slidedown: {
        from: { opacity: 0, transform: 'translateY(-25%)' },
        to: { opacity: 1, transform: 'none' },
      },
      slideleft: {
        from: { opacity: 0, transform: 'translateX(-20px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
      },
      slideright: {
        from: { opacity: 0, transform: 'translateX(20px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
      },
      wave: {
        '0%': { transform: 'scale(0)' },
        '50%': { transform: 'scale(0)' },
        '100%': { transform: 'scale(1)' },
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'mdlg': '920px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'lgg': '1054px',
      
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      'xll': '1322px',
       
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1642px',
    },
  },
  plugins: [],
}
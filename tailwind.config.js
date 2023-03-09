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
      wave: 'wave 1.2s linear infinite',
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
        '50%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(0)' },
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
  content: [
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './entities/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      cursor: {
        'zoom-in': 'url(/images/other/zoom-in-icon.png) 25 25,auto ',
      },
      backgroundImage: {
        'wood-background': "url('/images/other/background.jpg')",
      },
      transitionProperty: {
        width: 'width',
      },
      gridTemplateColumns: {
        15: 'repeat(15, minmax(0, 1fr))',
      },
      colors: {
        primary: colors.amber,
        secondary: colors.stone,
        danger: colors.red,
        success: colors.green,
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens } from 'fluid-tailwind';
const withMT = require('@material-tailwind/react/utils/withMT');
const flowbite = require("flowbite-react/tailwind");


module.exports = withMT({
  content: {
    files: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
      flowbite.content(),
    ],
    extract, // Specify `extract` here
  },
  theme: {
    screens,
    extend: {
      colors: {
        primary: {
          50: '#ffe8c7',
          100: '#f8cbab',
          200: '#deac8b',
          300: '#c28e68',
          400: '#ad754d',
          500: '#975e33',
          600: '#8b542d',
          700: '#7b4724',
          800: '#6d391d',
          900: '#5d2b14',
        },
      },
      screens: {
        'sm-md': '700px', // Giữa sm và md
        'md-lg': '900px', // Giữa md và lg
      },
    },
  },
  plugins: [fluid, flowbite.plugin(),],
});

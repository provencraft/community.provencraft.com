/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'gilmer-light': ['gilmer-light', 'gilmer-light'],
        'gilmer-regular': ['gilmer-regular', 'gilmer-regular'],
        'gilmer-heavy': ['gilmer-heavy', 'gilmer-heavy'],
        'gilmer-medium': ['gilmer-medium', 'gilmer-medium'],
      },
    },
  },
  plugins: [],
};

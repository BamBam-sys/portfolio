/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      bgColor: '#fafafa',
      primaryColor: '#333333',
      secondaryColor: '#65656d',
      tertiaryColor: '#acacb4',
      quaternaryColor: '#e4e4e7',
      linkColor: '#386641',
    },
    extend: {
      boxShadow: {
        x: '0 0 3px #bbb',
      },
    },
  },
  plugins: [],
};

// d4a373

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dela: ['Dela Gothic One', 'sans-serif'],
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
      boxShadow: {
        main: '20px 20px 60px #16a34a35, -20px -20px 60px #ffffff',
        loader_1: '25px 25px 75px rgba(0,0,0,0.55)',
        loader_2: 'inset -5px -5px 25px rgba(0,0,0,0.25),inset 5px 5px 35px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
};


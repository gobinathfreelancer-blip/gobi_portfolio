/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './projects.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { kanit: ['Kanit', 'sans-serif'] },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './projects.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { kanit: ['Kanit', 'sans-serif'] },
      // "wide": landscape screens with enough room for the hero's side-by-side layout.
      // Anything narrower (phones, upright tablets, small windows) uses the stacked layout.
      screens: { wide: { raw: '(orientation: landscape) and (min-width: 1200px)' } },
    },
  },
  plugins: [],
};

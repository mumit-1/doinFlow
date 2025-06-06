/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
        // Custom screen from 400px to 770px
        'custom-sm': { 'raw': '(min-width: 588px) and (max-width: 770px)' },
        'custom-sm-a': { 'raw': '(min-width: 415px) and (max-width: 588px)' },
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
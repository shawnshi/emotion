/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-dark': '#1e1018',
        'app-card': '#2c1a24',
        'app-pink': '#e93892',
        'app-pink-light': '#f47eb8',
        'app-text': '#ffffff',
        'app-text-muted': '#a89ba4',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#E6F0EA",
          100: "#C0DFC2",
          200: "#97C99A",
          300: "#6FBA74",
          400: "#51A359",
          500: "#386641", // main
          600: "#2F5035",
          700: "#253D2B",
          800: "#1B2920",
          900: "#101613"
        }
      }
    }
  },
  plugins: []
};

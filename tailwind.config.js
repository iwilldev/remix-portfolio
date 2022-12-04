/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        will: {
          50: "#FCE9ED",
          100: "#F5BCC9",
          200: "#EF8FA4",
          300: "#E96380",
          400: "#E2365C",
          500: "#C91D42",
          600: "#9C1633",
          700: "#701025",
          800: "#430A16",
          900: "#160307",
        }
      }
    },
  },
  plugins: [],
};

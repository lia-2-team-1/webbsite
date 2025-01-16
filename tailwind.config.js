/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        },
        colors: {
         sandybrown: "#C7A46C",
         springwood: "#FAF7F2", 
         coffee: "#AF7C47",
         sepiaskin: "#92633C",
         black: "#010101",
         rangoongreen: "#1A1A1A",
         lightgrey: "#D9D9D9",
        }
    },
  },
  plugins: [],
}


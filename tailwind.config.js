/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
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
         merino: "#faf7f2",
         wheat: "#f5e2b8",
         brandy: "#e1c79e",
         codgray: "#1a1a1a",
         black: "#010101",
         mineshaft: "#333333",
         lightgrey: "#D9D9D9",
         gold: '#C7A46C',
         darkgray: "#333333"
        },
       dropShadow: {
         'img': ['1px 1px 0px rgba(0,0,0,0.5)', '-1px -1px 0 rgba(0,0,0,0.5)'], 
        },
    },
  },
  plugins: [],
}


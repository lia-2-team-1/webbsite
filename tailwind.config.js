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
         sandybrown: "rgb(var(--sandy-brown))",
         springwood: "rgb(var(--spring-wood))",
         coffee: "rgb(var(--coffee))",
         sepiaskin: "rgb(var(--sepia-skin))",
         black: "rgb(var(--black))",
         rangoongreen: "rgb(var(--rangoon-green))",
         lightgrey: "rgb(var(--light-grey))",
        }
    },
  },
  plugins: [],
}


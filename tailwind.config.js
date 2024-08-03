/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#885496",
      },
      boxShadow: {
        nav: "9.33px 5.83px 20px -13px #d495da",
      },
    },
  },
  plugins: [],
};

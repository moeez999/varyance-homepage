/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    screens: {
      xs: { max: "431px" },
      tab: { max: "769px" },
      desk: { max: "1025px" },
    },
    extend: {
      // You can add custom styles or extend the default Tailwind CSS theme here
    },
  },
  plugins: [
    // You can add any Tailwind CSS plugins here
  ],
};

module.exports = {
  content: [
    "./pages/index.js",
    "./components/Header.js",
    "./components/Banner.js",
    "./components/SmallCard.js",
    "./components/MediumCard.js",
    "./components/LargeCard.js",
    "./components/Footer.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

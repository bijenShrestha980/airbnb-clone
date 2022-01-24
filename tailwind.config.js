module.exports = {
  content: [
    "./pages/index.js",
    "./pages/search.js",

    "./components/Header.js",
    "./components/Banner.js",
    "./components/SmallCard.js",
    "./components/MediumCard.js",
    "./components/LargeCard.js",
    "./components/Footer.js",
    "./components/InfoCard.js",
    "./components/Map.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

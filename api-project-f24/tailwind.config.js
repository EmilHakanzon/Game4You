/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        surface: "#1E293B",
        text: "#F1F5F9",
        brand: "#7C3AED",
        brandHover: "#6D28D9",
        accent: "#3B82F6",
        accentHover: "#60A5FA",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // For body text
        heading: ["Orbitron", "sans-serif"], // For headings
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7B61FF", // Vibrant purple
        secondary: "#4A3D8C", // Deeper shade of purple
        dark: "#0A0A0A", // Black background
        light: "#EAEAEA", // Light grey for contrast
        accent: "#A88BFF", // Softer purple for highlights
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%": { textShadow: "0px 0px 8px rgba(123, 97, 255, 0.6)" },
          "50%": { textShadow: "0px 0px 20px rgba(123, 97, 255, 1)" },
          "100%": { textShadow: "0px 0px 8px rgba(123, 97, 255, 0.6)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-in-out",
        pulseGlow: "pulseGlow 2s infinite alternate",
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Scan all pages and components inside the 'app' directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include reusable components
    "./pages/**/*.{js,ts,jsx,tsx}", // Include standard Next.js pages
    "./styles/**/*.css", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff7eb3",
        secondary: "#ff758c",
        dark: "#0a0a0a",
        light: "#f5f5f5",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-in-out",
      },
    },
  },
  plugins: [],
};

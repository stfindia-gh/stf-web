/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#007B9A",
          dark: "#005f77",
          muted: "#0a5f73",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
      },
      backgroundImage: {
        "mesh-pattern":
          "radial-gradient(circle at 2px 2px, rgba(0,123,154,0.12) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

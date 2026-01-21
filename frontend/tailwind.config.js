/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#60A5FA", // Blue 400
          DEFAULT: "#2563EB", // Blue 600
          dark: "#1E40AF", // Blue 700
        },
        secondary: {
          light: "#94A3B8", // Slate 400
          DEFAULT: "#1E293B", // Slate 800
          dark: "#0F172A", // Slate 900
        },
        accent: {
          DEFAULT: "#F59E0B", // Amber 500
          light: "#FCD34D", // Amber 300
        },
        surface: "#F8FAFC", // Slate 50
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        glow: "0 0 20px rgba(37, 99, 235, 0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, hsla(217, 91%, 60%, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(186, 100%, 69%, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 0.2) 0px, transparent 50%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

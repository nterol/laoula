import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      heading: ["Circular Bold", "sans-serif"],
      medium: ["Circular Medium", "sans-serif"],
      circular: ["Circular", "sans-serif"],
    },
    extend: {
      colors: {
        legal: "#3d3c3a",
        owhite: "#f1f1f1",
        ogrey: "#e5e5e5",
        cherry: "#e9064e",
        iello: "#ffff00",
      },
      fontFamily: {
        heading: ["Circular Bold", "sans-serif"],
        medium: ["Circular Medium", "sans-serif"],
        circular: ["Circular", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

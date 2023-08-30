import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      black: "#0f0f0f",
      white: "#f0f0f0",
      blue: "#1fb6ff",
      gray: "#8492a6",
      navy: "#19376d",
      sky: "#a5d7e8",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "dark-navy": "#0b2447",
      "light-navy": "#576CBC",
      "gray-dark": "#273444",
      "gray-light": "#d3dce6",
      "light-white": "#ffffff",
    },
    fontFamily: {
      sans: ["Pretendard", "Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

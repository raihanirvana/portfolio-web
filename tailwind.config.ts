import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        panel: "0 24px 80px rgba(85, 50, 27, 0.12)",
      },
      colors: {
        accent: "#b6542c",
        ink: "#1e1f1b",
        line: "rgba(30, 31, 27, 0.1)",
        muted: "#5e5b54",
        shell: "#f4efe7",
        surface: "rgba(255, 252, 246, 0.72)",
        "surface-strong": "#fffaf2",
      },
      fontFamily: {
        display: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", "serif"],
        sans: ["Avenir Next", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#080808",
          raised: "#0f0f0f",
          elevated: "#161616",
        },
        border: {
          DEFAULT: "#1e1e1e",
          subtle: "#141414",
        },
        text: {
          primary: "#e2e2e2",
          secondary: "#7a7a7a",
          muted: "#3d3d3d",
        },
        accent: {
          DEFAULT: "#c8c0b4",
          glow: "rgba(200, 192, 180, 0.06)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

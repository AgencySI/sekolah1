import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f7f8f1",
        lime: "#c9f44d",
        ink: "#111511",
        dark: "#0b0d0b",
        panel: "#101410",
        muted: "rgba(0,0,0,0.55)",
        muted2: "rgba(0,0,0,0.65)",
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

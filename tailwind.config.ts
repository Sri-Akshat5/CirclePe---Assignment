import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "background": "#1B1B1B",
      "paragraph": "#EEEEEE",
      "heading": "#AAAAAA",
      "active": "#FCF1BB",
      "primary": "#5AA5FD",
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

/**
 * TailwindCSS configuration
 * Dark mode based on system preference is enabled by default
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/forms")],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#5B8C7F" },
        accent: { DEFAULT: "#E8A17B" },
        cream: "#FAF5ED",
        ink: "#2D2A27",
      },
      fontFamily: {
        display: ["Lora", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

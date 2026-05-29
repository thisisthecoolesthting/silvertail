import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#F2F0EA",
          100: "#E8E6E1",
          200: "#DAD8D3",
        },
        terracotta: {
          400: "#80654A",
          500: "#6F5840",
          600: "#5B4834",
        },
        primary: { DEFAULT: "#2C3E50" },
        accent: { DEFAULT: "#6F5840" },
        sage: { 400: "#8FA888", 500: "#6F8B6A", 600: "#566F52" },
        rose: { deep: "#2D2A27" },
        ink: {
          900: "#0B1120",
          700: "#334155",
          500: "#64748B",
        },
      },
      maxWidth: {
        prose: "68ch",
      },
            typography: {
        DEFAULT: { css: { maxWidth: "68ch" } },
        ink: { css: { color: "#4A4340" } },
      },
      fontFamily: {
        display: ['Cormorant Garamond', "Georgia", "serif"],
        sans: ['Source Sans 3', "system-ui", "sans-serif"],
        body: ['Source Sans 3', "sans-serif"],
        mono: ['JetBrains Mono', "monospace"],
      },
    },
  },
  plugins: [typography],
};

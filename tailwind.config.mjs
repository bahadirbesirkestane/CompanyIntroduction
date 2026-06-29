/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f7f6",
          100: "#dce9e6",
          200: "#bad3cd",
          300: "#8ab5ad",
          400: "#5c968d",
          500: "#3f7d75",
          600: "#32645d",
          700: "#2c524d",
          800: "#27433f",
          900: "#233836"
        }
      }
    }
  },
  plugins: []
};

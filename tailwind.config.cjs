/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#57009c',
        'primary-dark': '#3a006b',
        'primary-light': '#8000cc',
        'primary-muted': '#a77db5',
        secondary: '#ff8c00',
        'secondary-dark': '#c66a00',
        'secondary-light': '#ffab4c',
        'secondary-muted': '#ffd9b5',
        accent: '#00a3b0',
        'accent-dark': '#00787f',
        'accent-light': '#4dc9d6',
        'accent-muted': '#b5e6eb',
        neutral: '#333333',
        'neutral-light': '#f6f6f6',
        'neutral-muted': '#cccccc',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

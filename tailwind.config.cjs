/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#3D0264",
      secondary: "#FFFAFA",
      tertiary: "#4E4C52",
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Add this line
    // ...other plugins
  ],
};

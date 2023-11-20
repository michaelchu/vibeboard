/* eslint-env node */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./util/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  // Safelist all possible tailwind defined colors, unfortunately does not
  // cover all arbitrary colors
  safelist: [{ pattern: /text-+/ }, { pattern: /bg-+/ }],
  theme: {
    extend: {
      minWidth: {
        10: "40px",
        12: "60px",
        14: "80px",
        16: "100px",
      },
      fontFamily: {
        sans: ['"Bai Jamjuree"', "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
    // Default project breakpoints
    // https://tailwindcss.com/docs/screens
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
  ],
};

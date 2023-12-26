/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          darker: "rgb(97, 50, 178)",
        },

        secondary: {
          DEFAULT: "rgb(var(--color-secondary))",
          darker: "rgb(189, 66, 141)",
        },

        dark: {
          DEFAULT: "rgb(var(--color-dark))",
          darker: "rgb(25, 25, 25)",
        },

        black: "rgb(var(--color-black))",
        light: "rgb(var(--color-light))",
        white: "rgb(var(--color-white))",
      },
    },
  },
  plugins: [],
};

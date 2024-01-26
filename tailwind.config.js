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
          darker: "rgb(209, 110, 0)",
        },

        secondary: {
          DEFAULT: "rgb(var(--color-secondary))",
          darker: "rgb(8, 80, 130)",
        },

        dark: {
          DEFAULT: "rgb(var(--color-dark))",
          darker: "rgb(25, 25, 25)",
        },

        black: "rgb(var(--color-black))",
        light: "rgb(var(--color-light))",
        white: "rgb(var(--color-white))",
      },

      borderRadius: {
        DEFAULT: ".5rem",
      },

      transitionDuration: {
        DEFAULT: ".2s",
      },

      transitionTimingFunction: {
        DEFAULT: "ease-out",
      },
    },
  },
  plugins: [],
};

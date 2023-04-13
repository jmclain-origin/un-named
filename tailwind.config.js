/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/client/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5b71ff",

          secondary: "#afffbe",

          accent: "#26e035",

          neutral: "#28222A",

          "base-100": "#33323E",

          info: "#6CCCE0",

          success: "#3CD38A",

          warning: "#F4AD43",

          error: "#F51950",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
};

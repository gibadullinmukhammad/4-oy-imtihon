/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      screens: {
        mobilelarge:"568px",
        tablet: "990px",
        desktop: "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
        screens: {
          DEFAULT: "100%",
          mobilelarge:"472px",
          tablet: "894px",
          desktop: "1182px",
          
          
        },
      },
      colors: {
        primary: "#2D2D2D",
        "primary-light": "#fff",
        secondary: "#009379",
      },
      boxShadow: {
        "custom-shadow": "34.85px 29.63px 48.34px 0px #3366ff0d",
      },
    },
  },
  plugins: [],
};

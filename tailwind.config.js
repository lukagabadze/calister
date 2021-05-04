module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: "350px",
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
    extend: {},
  },
  plugins: [],
};

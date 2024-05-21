const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        uzhblue: "#0028A5",
      },
      fontFamily: {
        sans: [
          '"Source Sans 3"',
          '"Source Sans Pro"',
          ...defaultTheme.fontFamily.sans,
        ],
        title: [
          '"Source Sans 3"',
          '"Source Sans Pro"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      fontWeight: {
        'normal': '400',
        'bold': '600',
        'bolder': '900'
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
  corePlugins: {
    preflight: false,
  },
};

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Source Sans 3"',
          '"Source Sans Pro"',
          ...defaultTheme.fontFamily.sans,
        ], // source sans 3 == Source Sans Pro // add both for local coverage
        title: [
          '"Source Sans 3"',
          '"Source Sans Pro"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
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

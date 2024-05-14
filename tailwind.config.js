const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    
      colors: {
        'blue': {
          100: '#BDC9E8',
          200: '#7596FF',
          300: '#3062FF',
          400: '#0028A5',
          500: '#001E7C',
          600: '#001452',
          700: '#003C99',
          800: '#002D73',
          900: '#001E4D',
        },
      },
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

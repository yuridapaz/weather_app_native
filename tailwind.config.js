/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A4D50',
        secondary: '#DDF0FF',
        tertiary: '#FF7754',
        gray: '#83829A',
        gray2: '#C1C0C8',
        offwhite: '#F3F4F8',
        white: '#FFFFFF',
        black: '#000000',
        red: '#e81e4d',
        green: ' #00C135',
        lightWhite: '#FAFAFC',
      },
      spacing: {
        xSmall: 10,
        small: 12,
        medium: 16,
        large: 20,
        xLarge: 24,
        xxLarge: 44,
      },
    },
  },
  plugins: [],
};

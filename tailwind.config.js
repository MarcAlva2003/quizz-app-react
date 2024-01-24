/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#A729F5',
        white: '#FFFFFF',
        black: '#000000',
        navy: {
          dark: '#313E51',
          navy: '#3B4D66',
          grey: '#626C7F'
        },
        grey: '#F4F6FA',
        bluish: '#ABC1E1',
        green: '#26D782',
        red: '#EE5454',
      },
      boxShadow: {
        optionLight: '0px 16px 40px 0px rgba(143, 160, 193, 0.14)',
        optionDark: '0px 16px 40px 0px rgba(49, 62, 81, 0.14)',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}


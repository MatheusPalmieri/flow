/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '1280px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'primary': {
          100: "#d5f4e6",
          200: "#baf0d9",
          300: "#9feccb",
          400: "#94e9c6",
          500: "#89fcb3",
          600: "#7ee6a0",
          700: "#73d08d",
          800: "#68ba7a",
          900: "#5da467",
        },
        'secondary': {
          100: '#E2E2D5',
          200: '#D5D5C8',
          300: '#888883',
          400: '#7A7A6F',
          500: '#4D4D40',
          600: '#3F3F33',
          700: "#333333",
          800: "#2D2D2D",
          900: "#222222",
        }
      },
    },
    borderRadius: {
      'none': '0px',
      'sm': '5px',
      DEFAULT: '10px',
      'md': '15px',
      'lg': '.20px',
      'full': '9999px',
    },
  },
  plugins: [],
}


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
          100: "#d6fce6",
          200: "#b4f9cc",
          300: "#92f6b3",
          400: "#71f39a",
          500: "#89fcb3",
          600: "#77e5a1",
          700: "#6cd38f",
          800: "#62c17d",
          900: "#57af6c",
          
          
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


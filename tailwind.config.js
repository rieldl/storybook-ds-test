/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Primary colors
        primary: {
          50: '#ffe8ed',
          100: '#ffc5d1',
          200: '#ff9fb0',
          300: '#ff7a8f',
          400: '#ff5f7b',
          500: '#FF4566', // Primary color
          600: '#e63d5c',
          700: '#cc334f',
          800: '#b32943',
          900: '#8a1a2f',
        },
        // Danger/Error colors
        danger: {
          50: '#fff1f0',
          100: '#ffccc7',
          200: '#ffa39e',
          300: '#ff7875',
          400: '#ff4d4f',
          500: '#f5222d', // Primary danger
          600: '#cf1322',
          700: '#a8071a',
          800: '#820014',
          900: '#5c0011',
        },
      },
      animation: {
        'spin': 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
}

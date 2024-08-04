/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        's': '425px', 
        'm': '768px', 
        'l': '1024px',
        'xl': '1440px',
      },
      colors:{
        theme:{

        }
      }
    },
  },
  plugins: [],
}


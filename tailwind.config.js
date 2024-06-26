/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        dark:'#0D0628',
        light:'#9A348E',
        back:'#DA627D'
      }
    },
    
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF3FA',
          100: '#DCE6F3',
          200: '#B5CBE5',
          300: '#84A7D3',
          400: '#4D7DBC',
          500: '#245CA4',
          600: '#0F4489',
          700: '#063876',
          800: '#002F6C',
          900: '#012450',
          950: '#01173A',
        },
        gold: {
          300: '#FFDD70',
          400: '#FFD24A',
          500: '#FFC72C',
          600: '#E6AC14',
          700: '#C68F06',
        },
        paper: '#F7F5F0',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

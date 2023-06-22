/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'kleinblue': {
          DEFAULT: '#002FA7',
          100: '#DAE4FF',
          200: '#A7C0FF',
          300: '#749BFF',
          400: '#4176FF',
          500: '#0E52FF',
          600: '#003DDA',
          700: '#002174',
          800: '#001241',
          900: '#00040E',
        }
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '948px',
      'xl': '948px',
      '2xl': '948px',
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

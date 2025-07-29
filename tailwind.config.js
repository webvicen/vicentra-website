/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        vicentra: {
          blue: '#006DB8',
          pink: '#E40081',
          yellow: '#FFF100',
          black: '#1F262A'
        }
      },
      screens: {
        mobile: { max: '550px' },
        tablet: { min: '551px', max: '1329px' },
        desktop: { min: '1330px' },
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    }
  },
  plugins: [require('tailwind-scrollbar')],
}


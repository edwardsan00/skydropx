const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './containers/**/**/.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      'sky-black': 'var(--back)',
      'sky-violet': 'var(--violet)',
      'sky-green': 'var(--green)',
      'sky-gray': 'var(--gray)',
      'sky-red': 'var(--red)',
      'sky-blue': 'var(--blue)',
      'sky-bg1': 'var(--bg1)',
      'sky-bg2': 'var(--bg2)',
      'sky-bg3': 'var(--bg3)',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}

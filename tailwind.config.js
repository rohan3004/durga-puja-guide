/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        durga: {
          red: '#991B1B',
          gold: '#F59E0B',
          cream: '#FEF3C7',
          clay: '#9A3412',
          dark: '#450A0A',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(245, 158, 11, 0.5)',
        'red-glow': '0 0 20px rgba(153, 27, 27, 0.4)',
      },
    },
  },
  plugins: [],
};

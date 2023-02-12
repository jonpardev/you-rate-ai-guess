/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'Recursive': ['Recursive'],
      'MaterialSymbols': ['MaterialSymbolsOutlined'],
    },
    extend: {
      screens: {
        'ph': '425px',
      },
      maxHeight: {
        'ph': '425px',
      }
    },
  },
  plugins: [],
}

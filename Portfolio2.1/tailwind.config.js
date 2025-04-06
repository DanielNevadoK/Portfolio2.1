/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        'deep-blue': 'rgba(22, 64, 83, 1)',
        'deep-blue-transparent': 'rgba(22, 64, 83, 0)',
      },
      backgroundImage: {
        'custom-fade': 'linear-gradient(180deg, rgba(22,64,83,0) 0%, rgba(22,64,83,1) 97%)',
      }
    },
  },
  plugins: [],
}

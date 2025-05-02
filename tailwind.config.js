/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    // ... rest of your config
  },
  plugins: [  require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),  require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')],
}


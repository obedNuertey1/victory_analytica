/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      boxShadow: {
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
      },
      transitionProperty: {
        'width': 'width'
      },
      maxWidth: {
        '7xl': '1280px'
      },
      backdropBlur: {
        sm: '4px',
      }
    }
    // ... rest of your config
  },
  plugins: [  require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),  require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')],
}


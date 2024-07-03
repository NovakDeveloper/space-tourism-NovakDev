/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'very-dark-navy': '#0B0D17',
        'light-blue': '#D0D6F9',
        'white': '#FFFFFF'
      },
     fontSize: {
        'heading-xl': ['9rem', {
          lineHeight: '179.1%',
          fontWeight: '400',
        }], 
        'heading-l': ['6.25rem', {
          lineHeight: '114.6%',
          fontWeight: '400',
        }], 
        'heading-m': ['3.5rem', {
          lineHeight: '64.2%',
          fontWeight: '400',
        }], 
        'heaidng-s': ['2rem', {
          lineHeight: '36.7%',
          fontWeight: '400',
        }], 
        'heading-xs': ['1.75rem', {
          lineHeight: '33.6%',
          fontWeight: '400',
          letterSpacing: '0.04em'
        }], 
        'subheading-l': ['1.75rem', {
          lineHeight: '32.1%',
          fontWeight: '400',
        }], 
        'subheading-s': ['0.875rem', {
          lineHeight: '16.8%',
          fontWeight: '400',
          etterSpacing: '0.02em'
        }], 
        'nav-text': ['1rem', {
          lineHeight: '19.2%',
          fontWeight: '400',
          etterSpacing: '0.02em'
        }], 
        'body': ['1.125rem', {
          lineHeight: '180%',
          fontWeight: '400',
        }], 
      }
    },
  },
  plugins: [],
}
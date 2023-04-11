/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    fontFamily:{
    },
    extend: {
      spacing: {
        '100': '32rem',
        '110': '32rem',
        '120': '50rem',
        
      },
      lineHeight: {
        'volline': '176px',
        // '12': '3rem',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'xxl': '1900px',
      // => @media (min-width: 1900px) { ... }
    },
      fontSize: {
        xs:'0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
        '8xl': '96px',
        '9xl': '128px',
        '10xl': '9rem',
        '11xl': '10.5rem',
        '12xl': '12rem',
      }
  },
  plugins: [],
}

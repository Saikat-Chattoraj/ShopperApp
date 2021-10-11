module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xsm':'484px',
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
      '2xlx': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xlx': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lgx': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mdx': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'smx': {'max': '639px'},
      'xsmx':{'max':'483px'},
    },
    extend: {
    },
    border: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
     '3': '3px',
      '4': '4px',
     '6': '6px',
     '8': '8px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

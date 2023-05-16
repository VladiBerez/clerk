module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xl': '1680px',
      'lg': '1024px',
      'md': '768px',
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
      },
      fontSize: {
        'h1': '56px',
        'h2': '32px',
        'h3': '24px',
        'h4': '20px',
        'h5': '14px',
        'h6': '13px',

      },
      lineHeight: {
        'h1': '72px',
        'h2': '42px',
        'h3': '32px',
        'h4': '28px',
        'h5': '20px',
        'h6': '16px',
      },
      letterSpacing: {
        'h1': '-0.01em',
        'h2': '-0.01em',
        'h3': '-0.01em',
        'h4': '-0.01em',
        'h5': '-0.01em',
        'h6': '-0.01em',
      },
      colors: {
        'h1': '#000000',
        'h2': '#000000',
        'h3': '#000000',
        'h4': '#000000',
        'h5': '#000000',
        'h6': '#000000',
        'grey': '#999999'
      }
    },
    container: {
      center: true,
      maxWidth: '1024px',
      screens: {
        'xl': '1024px',
      },
    },
  },
  variants: {},
  plugins: [],
}

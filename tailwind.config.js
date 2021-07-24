module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          'gray': '#F8F8FA',
          'milky': '#FFFBF2',
          'orange': '#FFA600',
          'blue': '#140856',
          'light-blue': '#3800FF',
        }
      },
      fontFamily: {
        'body': "'Lato' 'sans-serif'",
      },
      fontSize: {
        '40': '40px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

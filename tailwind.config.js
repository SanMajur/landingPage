/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        "darkbg": "#1f2937"
      }
    },
    container: {
      center: true,
      padding: "2rem",
    }
  },
  plugins: [],
}

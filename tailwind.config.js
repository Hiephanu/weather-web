/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily:{
      sans: ['Montserrat', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      backgroundImage:theme=>({
        'gradient': 'linear-gradient(152.19deg, rgba(136, 235, 239, 0.9) -0.04%, rgba(83, 91, 230, 0.9) 100%)',
      }),
      colors:{
        primary:"#1E1E1E",
        daycolor:"#272E37",
      }
    },
  },
  plugins: [],
}


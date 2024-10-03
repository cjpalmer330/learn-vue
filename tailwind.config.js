/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{html,js,vue,ts}",
    './components/**/*.{html,js,vue,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Courier Prime"'],
      },
    },
  },
  plugins: [],
  
}


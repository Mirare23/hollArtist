/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      "sans": ["'Noto Sans TC'", "sans-serif"],
      "serif": ["Lora", "serif"],
    },
    extend: {},
  },
  plugins: [],
}


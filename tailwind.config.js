/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#590000",
          light: "#7a1a1a",
          dark: "#3d0000",
        },
        gold: {
          DEFAULT: "#d4af37",
          light: "#e6c860",
        },
      },
    },
  },
  plugins: [],
}
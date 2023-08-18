/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Bai: ["Bai Jamjuree"],
      },
      colors: {
        secondary: "#00D1D1",
      },
    },
  },
  plugins: [],
};

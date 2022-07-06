module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter, sans-serif"],
      },
      screens: {
        "sm": "300px",
        "md": "768px",
        "lg": "1024px",
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        forest: "#11352f",
        mint: "#dff7e9",
        coral: "#ff6f61",
        ink: "#17211f"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(17, 53, 47, 0.14)"
      }
    }
  },
  plugins: []
};

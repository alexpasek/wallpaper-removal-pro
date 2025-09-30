
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"}
      },
      boxShadow: { card: "0 1px 2px rgba(0,0,0,.04), 0 8px 20px rgba(2,6,23,.06)" }
    }
  },
  plugins: [require("@tailwindcss/typography")],
};

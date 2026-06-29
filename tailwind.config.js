/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7EF",
        paper: "#FFFDF7",
        green: {
          deep: "#174C3A",
          mid: "#2F6B55",
          pale: "#E7F0EA",
        },
        navy: "#1F3349",
        gold: "#B7904B",
        charcoal: "#252A2E",
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "Noto Sans KR",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 18px 55px rgba(31, 51, 73, 0.09)",
      },
    },
  },
  plugins: [],
};

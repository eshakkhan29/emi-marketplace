/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pc: {
          1: "#dcfce7",
          2: "#bbf7d0",
          3: "#86efac",
          4: "#4ade80",
          5: "#22c55e",
          6: "#16a34a",
          7: "#15803d",
          8: "#166534",
          9: "#14532d",
        },
        sc: {
          0: "#f0f0f0",
        },
        dc: {
          1: "#f0f0f0",
          2: "#e0e0e0",
          3: "#d0d0d0",
          4: "#c0c0c0",
          5: "#b0b0b0",
          6: "#a0a0a0",
          7: "#909090",
          8: "#808080",
          9: "#707070",
        },
      },
    },
  },
  plugins: [],
};

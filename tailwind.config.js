/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      colors: {
        primary: "#1E3A8A", //Bleu profond
        secondary: "#3B82F6", //Bleu Vif
        lightBlue: "#DBEAFE", //Bleu tres clair
        darkBlue: "#1E40AF", //Bleu fonce
        softWhite: "#F9FAFB", //Blanc case
        trueWhite: "#FFFFFF", //Blanc pur
      },
    },
  },
  plugins: [],
};

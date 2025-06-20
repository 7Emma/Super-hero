/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', //Bleu profond
        secondary: '#3B82F6', //Bleu Vif
        lightBlue: '#DBEAFE', //Bleu tres clair
        darkBlue: '#1E40AF', //Bleu fonce
        softWhite: '#F9FAFB', //Blanc case
        trueWhite: '#FFFFFF', //Blanc pur
      }
    },
  },
  plugins: [],
}


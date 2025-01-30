/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { },
      colors: {
        background: "#F8F9FA",
        foreground: "var(--foreground)",
        purple: {
          PRIMARY: "#7B76ED",
          SECONDARY: "#D8D6FA",
        },
        
        gray: {
          PRIMARY: "#F8F9FA",
          20:"#202020",
          100: "#F8F9FA",
          200: "#DDE2E5",
          300: "#ACB5BD",
          400: "#495057",
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};

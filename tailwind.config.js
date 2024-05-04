/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lime: "#00FB00",
      black: "#000000",
      dark: "#1A1A1A",
      white: "#FFFFFF",
      snow: "#F6F6F6",
      metal: "#D6D6D6",
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      "semi-bold": "600",
      bold: "700",
      "extra-bold": "800",
    },
    fontSize: {
      xxs: "1rem",
      xs: "1.25rem",
      sm: "1.5rem",
      md: "1.75rem",
      lg: "2rem",
      xl: "2.25rem",
      "2xl": "3.25rem",
      "4xl": "4.5rem",
    },
    fontFamily: {
      montserrat: "Montserrat, sans-serif",
      righteous: "Righteous, display",
    },
    extend: {
      zIndex: {
        negative: "-1",
      },
      gridTemplateColumns: {
        "1-0.1-1": "1fr 0.1fr 1fr",
      },
      borderRadius: {
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};

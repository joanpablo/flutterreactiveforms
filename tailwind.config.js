/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#918CF2",
        secondary: "#FFFFFF",
        onSecondary: "#0E1015",
        surface: "#0E1015",
        onSurface: "#E3E4E8",
        onSurfaceVariant: "#A1A4AA",
        surfaceBright: "#14171F",
      },
      fontSize: {
        "display-large": ["60px", "60px"],
        "display-medium": ["45px", "52px"],
        "display-small": ["36px", "44px"],
        "headline-large": ["32px", "40px"],
        "headline-medium": [""],
        "headline-small": ["24px", "32px"],
        "title-large": ["22px", "28px"],
        "title-medium": [""],
        "title-small": [""],
        "label-large": [""],
        "label-medium": [""],
        "label-small": [""],
        "body-large": [""],
        "body-medium": [""],
        "body-small": [""],
      },
    },
  },
  plugins: [],
};

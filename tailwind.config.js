const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"], // Đường dẫn đến file HTML/JS của bạn
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#167775", // Màu gốc của primary (0%)
          10: "#B1E6E4", // Shade 10%
          20: "#006666", // Shade 20%
          30: "#005959", // Shade 30%
          40: "#004d4d", // Shade 40%
          50: "#004040", // Shade 50%
          60: "#003333", // Shade 60%
          tint10: "#009393", // Tint 10%
          tint20: "#00a6a6", // Tint 20%
          tint30: "#00b9b9", // Tint 30%
          tint40: "#00cccc", // Tint 40%
          tint50: "#00dfdf", // Tint 50%
          tint60: "#00f2f2", // Tint 60%
        },
        secondary: {
          DEFAULT: "#005F5D", // Màu gốc của secondary (0%)
          10: "#005466", // Shade 10%
          20: "#004a5a", // Shade 20%
          30: "#00404d", // Shade 30%
          40: "#003640", // Shade 40%
          50: "#002c33", // Shade 50%
          60: "#002226", // Shade 60%
          tint10: "#006a80", // Tint 10%
          tint20: "#00768d", // Tint 20%
          tint30: "#00829a", // Tint 30%
          tint40: "#008da7", // Tint 40%
          tint50: "#0099b4", // Tint 50%
          tint60: "#00a5c1", // Tint 60%
        },
      },
    },
  },
  plugins: [],
};

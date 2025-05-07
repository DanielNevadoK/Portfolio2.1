/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      keyframes: {
        // spin-and-scale stays as-is
        "spin-and-scale": {
          "0%":   { transform: "rotate(0deg) scale(1)" },
          "50%":  { transform: "rotate(360deg) scale(0.0)" },
          "100%": { transform: "rotate(0deg) scale(0.8)" },
        },
        // marquee scroll to the left by 50%
        marquee: {
          "0%":   { transform: "translateX(0)"    },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "spin-and-scale": "spin-and-scale 150s ease-in-out forwards",
        marquee:             "marquee 180s linear infinite",
        "marquee-reverse":   "marquee 180s linear infinite reverse",
      },
      colors: {
        "deep-blue":"rgba(22, 64, 83, 1)",
        "deep-blue-transparent":"rgba(22, 64, 83, 0)",
      },
      backgroundImage: {
        "custom-fade":
          "linear-gradient(180deg, rgba(22,64,83,0) 0%, rgba(22,64,83,1) 97%)",
      },
      fontFamily: {
        fugaz:   ['"Fugaz One"', "sans-serif"],
        pattaya: ['"Pattaya"', "sans-serif"],
        bebas:   ['"Bebas Neue"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

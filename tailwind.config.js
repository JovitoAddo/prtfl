module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      comfortaa: ["Comfortaa", "cursive"],
      catamaran: ["Catamaran", "sans-serif"],
      cormorant: ["Cormorant", "serif"],
      annie: ["Annie Use Your Telescope", "cursive"],
      MMD: ["Major Mono Display", "monospace"],
      monoton: ["Monoton", "cursive"]
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      cust1: "#FEF1E6",
      cust2: "#F9D5A7",
      cust3: "#FFB085",
      cust4: "#90AACB",
      cust5: "#6b91c2",
      // cust1: "#041C32",
      // cust2: "#04293A",
      // cust3:"#064663",
      // cust4:"#ECB365"
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
  darkMode: 'class',
};

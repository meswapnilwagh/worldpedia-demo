module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        meSwap: {
          primary: "#5CDB95",
          secondary: "#05386B",
          accent: "#EDF5E1",
          neutral: "#8EE4AF",
          "base-100": "#FFFFFF",
        },
      },
      "emerald",
      "light",
      "corporate"
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "meSwap",
  },
}

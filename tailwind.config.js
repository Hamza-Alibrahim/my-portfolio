/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headingColor: "#2d2e32",
      },
      screens: {
        ism: "460px",
        xsm: "500px",
        smd: "567px",
        xmd: "900px",
      },
      animation: {
        "spin-slow": "spin 9s linear infinite",
      },
      boxShadow: {
        pm: "0 0 10px rgb(0,0,0,.1)",
      },
    },
  },
  plugins: [],
};

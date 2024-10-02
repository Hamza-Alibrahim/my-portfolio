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
        project:
          "0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)",
      },
    },
  },
  plugins: [],
};

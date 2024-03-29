/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        Blue: "#0174DD",
        Gray: "#808080",
        LightBlue: "#EFF7FE",
        Orange: "#FEA31C",
        Green: "#2FB574",
        "v-two":
          "linear-gradient(to right, #EFF7FE 0%, #EFF7FE 50%, #0174DD 50%, #0174DD 100%)",
      },
      width: {
        "12/25": "48%",
        "13/25": "52%",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

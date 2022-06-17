/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/resources/**/*.{hbs,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

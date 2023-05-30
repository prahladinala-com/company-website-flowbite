/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      toolm: "#0f172a",
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};

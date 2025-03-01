// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }




// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    {
      // A regex pattern that covers the dynamic classes:
      // pattern: /(bg|from|via|to)-(red|green|blue|yellow|purple|gray)-(200|400|500)/
      // pattern: /(bg|from|via|to)-(red|green|pink|orange|teal|blue|purple|gray)-(200|400|500)/
      pattern: /(bg|from|via|to)-(pink|orange|teal|blue|purple|green|red|gray)-(200|400|500)/


    }
  ],
  plugins: [],
}

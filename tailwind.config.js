/*eslint-env node*/
/** @type {import('tailwindcss').Config} */

const hcn = require("html-color-names");
const { htmlcolors } = hcn;
const { firebrick } = htmlcolors;

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                firebrick,
            }
        },
    },
    plugins: [],
}
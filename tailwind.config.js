/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FF204E",
                secondary: "#A0153E",
                tersier: "#5D0E41",
                navy: "#00224D"
            }
        },
    },
    plugins: [],
}
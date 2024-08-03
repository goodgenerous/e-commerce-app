/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                marquee: 'marquee 25s linear infinite',
                marquee2: 'marquee2 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },
            colors: {
                primary: "#2CD19A",
                primary2: "#10C68F",
                secondary: "#FFC640",
                secondary2: "#8C6600",
                backgroundColor: "#060F0C",
                primaryBorder: "#347D62",
                secondaryBorder: "#4F3500",
            },
            fontFamily: {
                raleway: ["Raleway", "sans-serif"]
            }
        },
    },
    plugins: [
        require('daisyui'),
    ],
}
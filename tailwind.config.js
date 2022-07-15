/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontFamily: {
            sans: ['Space Grotesk', 'sans-serif']
        },
        colors: {
            'white': '#f5f5f5',
            'gray-light': '#333333',
            'gray-mdlight': '#303030',
            'gray-md': '#2C2C2C',
            'gray-mddark': '#262626',
            'black': '#141414',
            'red': '#E8627A',
            'blue': '#70DFEE',
            'green': '#81ECA5',
            'purple': '#796AFA',
            'yellow': '#FBD05F',
        },
        fontSize: {
            'xs': '1.313rem',
            'sm': '1.75rem',
            'base': '2.25rem',
            'lg': '2.35rem',
            'xl': '3rem',
            '2xl': '5.5rem',
            '3xl': '6rem',
        },
        extend: {},
    },
    plugins: [],
}
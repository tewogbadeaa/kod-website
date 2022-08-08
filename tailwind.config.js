/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.{html,js}"],
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
            'tiny': '0.5rem',
            'xl': '1.375rem',
            '2xl': '2.875rem',
            'mh': '2rem',
        },
        extend: {},
    },
    plugins: [],
}
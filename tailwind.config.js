/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        fontFamily: {
            'raleway': ['"Raleway"', 'sans-serif'],
            'ubuntu': ['"Ubuntu Condensed"', 'sans-serif']
        },
        extend: {
            colors: {
                'gray': '#F4F7FC',
                'purple': '#9A25E8',
                'secondary': '#F3F3F3',
            },
        },
    },
    plugins: [],
}


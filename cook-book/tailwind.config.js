/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dominant: '#D8D2C2',  // Light Greyish Tone
                primary: '#4A4947',   // Medium Dark
                accent: '#B17457',    // Accent Color
                light: '#FAF7F0'      // Background Light Color
             },

            fontFamily: {
                heading: ['Playfair Display', 'serif'], // For headers
                body: ['Open Sans', 'sans-serif'],      // For body text
            },
        },
    },
    plugins: [],
}
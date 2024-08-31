/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'card-shadow': '0 10px 30px hsla(0, 0%, 0%, 0.05)',
            },
            container: {
                center: true,
            },
        },
    },
    plugins: [],
};

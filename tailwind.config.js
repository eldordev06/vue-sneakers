/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateRows: {
                drawer: 'auto 1fr auto',
            },
            boxShadow: {
                'card-shadow': '0 10px 30px hsla(0, 0%, 0%, 0.05)',
            },
            colors: {
                'drawer-bg': 'hsla(0, 0%, 0%, 0.5)',
            },
            container: {
                center: true,
            },
        },
    },
    plugins: [],
};

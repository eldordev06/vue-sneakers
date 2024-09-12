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
            backgroundImage: {
                'text-gradient-bg': `linear-gradient(
                    to bottom,
                    rgb(242 187 105 / 80%),
                    rgb(242 187 105 / 0%) 70.71%
                    ),
                    linear-gradient(
                        to top left,
                        rgb(239 151 93 / 80%),
                        rgb(239 151 93 / 0%) 70.71%
                    ),
                    linear-gradient(
                        to top right,
                        rgb(236 118 83 / 80%),
                        rgb(236 118 83 / 0%) 70.71%
                    )`,
            },
        },
    },
    plugins: [],
};

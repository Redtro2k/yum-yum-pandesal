const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'brown': {
                    '50': '#FFE9CE',
                    '100': '#C17F27',
                    '200': '#B67826',
                    '300': '#B27626',
                    '400': '#AF7426',
                    '500': '#A56E26',
                    '600': '#9B6825',
                    '700': '#906124',
                    '800': '#885C23',
                    '900': '#7F5621'
                }
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};

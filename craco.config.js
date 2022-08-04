module.exports = {
    style: {
        postcss: {
            plugin: [
                require('tailwindcss'),
                require('autoprefixer')
            ]
        }
    },
    eslint: {
        enable: false
    },
}
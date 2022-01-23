const tailwind = require('tailwindcss');

module.exports = {
    siteName: 'Lemon Squeezy Theme',
    plugins: [
        {
            use: '@lemonsqueezy/gridsome-lemonsqueezy',
            options: {
                apiKey: process.env.LSQ_API_KEY,
                storeId: process.env.LSQ_API_STORE_ID,
                apiUrl: process.env.LSQ_API_URL,
                insecure: process.env.LSQ_API_INSECRUE,
            }
        }
    ],
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    tailwind
                ],
            },
        },
    }
}

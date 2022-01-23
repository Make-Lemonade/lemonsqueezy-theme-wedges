module.exports = function (api) {
    api.createManagedPages(({ createPage }) => {
        if (process.env.NODE_ENV !== 'production') {
            createPage({
                path: '/__wedges',
                component: './src/dev/Wedges.vue'
            });
        }
    });
}

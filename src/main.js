import LsElements from '@lemonsqueezy/theme-elements';

require('~/main.css');

export default function (Vue) {
    Vue.prototype.$themeConfig = {
        pages: []
    };

    try {
        Vue.prototype.$themeConfig = Object.freeze(require('../theme-config.json'));
    } catch (e) {
        console.warn('No theme config found.');
    }

    Vue.use(LsElements);

    // Autoload wedge components
    const requireWedgeComponent = require.context(
        '../wedges',
        true, // include subdirectories
        /\.vue$/
    );
    requireWedgeComponent.keys().forEach(fileName => {
        const componentConfig = requireWedgeComponent(fileName);
        const componentName =
            fileName
                .replace(/^.*[\\/]/, '') // Remove path
                .replace(/\.\w+$/, ''); // Remove extension

        Vue.component(componentName, componentConfig.default || componentConfig);
    });

    Vue.mixin({
        computed: {
            store() {
                return this.$page.metadata.store;
            },
            currentPage() {
                return this.$context;
            },
        }
    });
}

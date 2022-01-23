<template>
    <div>
        <LsThemeRenderer :wedges="wedges" />
    </div>
</template>

<script>
import LsThemeRenderer from '@lemonsqueezy/theme-renderer';

export default {
    components: { LsThemeRenderer },

    computed: {
        pageConfig() {
            return this.$themeConfig.pages.find(page => parseInt(page.id) === parseInt(this.currentPage.id));
        },
        wedges() {
            return Object.assign({}, this.pageConfig).wedges;
        },
    },

    metaInfo() {
        return {
            title: this.currentPage.seo_title ? this.currentPage.seo_title : this.currentPage.title,
            meta: [
                { name: 'description', content: this.currentPage.seo_description }
            ],
        }
    }
}
</script>

<page-query>
query {
    metadata {
        store {
            id
            name
            slug
            domain
            url
            avatar_url
            plan
            country
            country_nicename
            currency
            total_sales
            total_revenue
            thirty_day_sales
            thirty_day_revenue
            created_at
            updated_at
        }
    }
}
</page-query>

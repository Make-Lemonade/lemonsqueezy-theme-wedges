<template>
    <div class="flex flex-col min-h-screen bg-gray-100">
        <div class="bg-white px-10 py-5 shadow">
            <select v-model="selectedWedge" class="block pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option v-for="(wedge, index) in theme.wedges" :value="componentName(wedge.component)" :key="index">
                    {{ wedge.component }}
                </option>
            </select>
        </div>
        <div class="py-10 sm:px-10">
            <LsThemeRenderer :wedges="wedges" />
        </div>
    </div>
</template>

<script>
import LsThemeRenderer from '@lemonsqueezy/theme-renderer';
import themeJson from '../../theme.json';

export default {
    data() {
        return {
            selectedWedge: null
        }
    },

    components: { LsThemeRenderer },

    computed: {
        theme() {
            return themeJson;
        },
        wedges() {
            return [
                {
                    'component': this.selectedWedge
                }
            ];
        }
    },

    created() {
        this.selectedWedge = this.componentName(this.theme.wedges[0].component);
    },

    methods: {
        componentName(componentPath) {
            return componentPath
                .replace(/^.*[\\/]/, '') // Remove path
                .replace(/\.\w+$/, ''); // Remove extension
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

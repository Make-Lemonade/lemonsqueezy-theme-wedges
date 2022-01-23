<template>
    <div class="bg-white p-10">
        <p>Store: {{ store.name }}</p>
        <p>Current Page: {{ currentPage.title }}</p>
        <p>Pages:</p>
        <ul>
            <li v-for="page in pages" :key="page.id">
                <g-link :to="page.slug">
                    {{ page.title }}
                </g-link>
            </li>
        </ul>
        <p>Products:</p>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        pages() {
            return this.$static.pages.edges.map(item => item.node);
        },
        products() {
            return this.$static.products.edges.map(item => item.node);
        },
    }
}
</script>

<static-query>
query {
    pages: allPages {
        edges {
            node {
                id
                title
                slug
            }
        }
    }
    products: allProducts {
        edges {
            node {
                id
                name
                slug
            }
        }
    }
}
</static-query>

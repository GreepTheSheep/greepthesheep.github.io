<script>
import { RouterView } from 'vue-router'
import FooterPane from './components/FooterPane.vue';
export default {
    components: { RouterView, FooterPane },
    data() {
        return {
            site: SITE_DATA, // eslint-disable-line no-undef
        }
    }
}
</script>

<template>
    <main class="container">
        {{ site }}
        <RouterView />
    </main>
    <footer class="container">
        <FooterPane />
    </footer>
</template>

<style scoped>
</style>

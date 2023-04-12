<script>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
export default {
    components: { RouterView, HeaderComponent, FooterComponent },
    data() {
        return {
            site: SITE_CONF, // eslint-disable-line no-undef
        }
    }
}
</script>

<template>
    <header class="container is-max-desktop mb-5">
        <HeaderComponent />
    </header>
    <main class="container is-max-desktop">
        {{ site }}
        <RouterView />
    </main>
    <footer class="container is-max-desktop mt-5">
        <FooterComponent />
    </footer>
</template>

<style scoped>
</style>

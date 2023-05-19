<script>
import { RouterView } from 'vue-router'
import BackgroundComponent from './components/Background.vue';
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
export default {
    components: { RouterView, BackgroundComponent, HeaderComponent, FooterComponent },
    updated() {
        if (this.$route.path != "/")
            window.document.title = this.$route.name + " - " + this.site.name;
        else
            window.document.title = this.site.name;
    },
    data() {
        return {
            site: SITE_CONF, // eslint-disable-line no-undef
            isDarkMode: Boolean(this.$ls.get('dark-mode') | window.matchMedia('(prefers-color-scheme: dark)').matches),
            isOnMobile: document.body.clientWidth < 768,
        }
    },
    mounted() {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = this.site.avatar;
        console.log("is dev mode?", import.meta.env.DEV);
        this.setDarkMode();
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', event => {
                this.isDarkMode = event.matches;
                this.$ls.set("dark-mode", event.matches);
                this.setDarkMode();
            });
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            this.$ls.set("dark-mode", this.isDarkMode);
            this.setDarkMode();
        },
        setDarkMode(mode = this.isDarkMode) {
            if (import.meta.env.DEV) console.log("darkModeSwitch", mode);
            if (mode)
                document.body.classList.add("darkmode");
            else
                document.body.classList.remove("darkmode");
        }
    }
}
</script>

<template>
    <BackgroundComponent />
    <div class="wrapper-masthead">
        <header class="container">
            <HeaderComponent />
        </header>
    </div>
    <main class="container">
        <RouterView />
    </main>
    <footer class="footer">
        <div class="container mt-5">
            <FooterComponent />
        </div>
    </footer>
</template>

<style scoped>
.wrapper-masthead {
    margin-bottom: 50px;
}
</style>

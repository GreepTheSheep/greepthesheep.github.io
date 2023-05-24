<script>
import BackgroundComponent from './components/Background.vue';
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
export default {
    components: { BackgroundComponent, HeaderComponent, FooterComponent },
    updated() {
        if (this.$route.path != "/" && this.$route.name != undefined)
            window.document.title = this.$route.name + " - " + this.site.name;
        else
            window.document.title = this.site.name;
    },
    data() {
        return {
            site: SITE_CONF, // eslint-disable-line no-undef
            isDarkMode: this.$ls.get('dark-mode'),
            isOnMobile: document.body.clientWidth < 768,
            showStars: this.$ls.get('stars')
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

        if (this.$ls.get('dark-mode') == null) {
            this.$ls.set('dark-mode', window.matchMedia('(prefers-color-scheme: dark)').matches);
            this.isDarkMode = this.$ls.get('dark-mode');
        }
        this.setDarkMode();
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', event => {
                this.isDarkMode = event.matches;
                this.$ls.set("dark-mode", event.matches);
                this.setDarkMode();
            });

        if (this.$ls.get('stars') == null) {
            this.showStars = true;
            this.$ls.set('stars', this.showStars);
        }
        console.log("stars?", this.$ls.get('stars'));
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            this.$ls.set("dark-mode", this.isDarkMode);
            this.setDarkMode();
        },
        toggleStars() {
            this.showStars = !this.showStars;
            if (import.meta.env.DEV) console.log("starsSwitch", this.showStars);
            this.$ls.set("stars", this.showStars);
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
    <BackgroundComponent :showStars="showStars" :isDarkMode="isDarkMode" />
    <div class="wrapper-masthead">
        <header class="container">
            <HeaderComponent />
        </header>
    </div>
    <main class="container">
        <router-view v-slot="{ Component, route }">
            <transition :name="route.meta.transition || 'fade'">
                <component :is="Component" :key="route.path" :isDarkMode="isDarkMode" />
            </transition>
        </router-view>
    </main>
    <footer class="footer">
        <div class="container mt-5">
            <FooterComponent :isDarkMode="isDarkMode" :showStars="showStars" @darkModeBtnClicked="toggleDarkMode" @starsBtnClicked="toggleStars"/>
        </div>
    </footer>
</template>

<style scoped>
.wrapper-masthead {
    margin-bottom: 50px;
}

.footer {
    padding: 0 !important;
}
</style>

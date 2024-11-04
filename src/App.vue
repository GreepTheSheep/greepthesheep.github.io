<script>
import BackgroundComponent from './components/Background.vue';
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
import { RouterView } from 'vue-router';
export default {
    components: { BackgroundComponent, HeaderComponent, FooterComponent, RouterView },
    updated() {
        if (this.$route.path != "/" || this.$route.name != undefined)
            window.document.title = this.$route.name + " - " + this.site.name;
        else
            window.document.title = this.site.name;
    },
    data() {
        return {
            site: SITE_CONF, // eslint-disable-line no-undef
            isDarkMode: this.$ls.get('dark-mode'),
            isOnMobile: document.body.clientWidth < 768,
            showStars: this.$ls.get('stars'),
            screensaverEnabled: false
        }
    },
    async mounted() {
        await this.$router.isReady();
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

        this.screensaverEnabled = ("screensaver" in this.$route.query && this.$route.query.screensaver == null) || Boolean(this.$route.query.screensaver) || false;
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
    <BackgroundComponent :showStars="showStars" :isDarkMode="isDarkMode" :screensaverMode="screensaverEnabled" />
    <div id="main-content" v-if="!screensaverEnabled">
        <div class="wrapper-masthead">
            <header class="container">
                <HeaderComponent />
            </header>
        </div>
        <main class="container">
            <RouterView :isDarkMode="isDarkMode" @toggleDarkMode="toggleDarkMode" />
        </main>
        <footer class="footer">
            <div class="container mt-5">
                <FooterComponent :isDarkMode="isDarkMode" :showStars="showStars" @darkModeBtnClicked="toggleDarkMode" @starsBtnClicked="toggleStars"/>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.wrapper-masthead {
    margin-bottom: 50px;
}

.footer {
    padding: 0 !important;
}
</style>

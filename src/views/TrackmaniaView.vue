<script>
import ShowcaseList from '../components/ShowcaseList.vue';

export default {
    props: {
        isDarkMode: {
            type: Boolean
        }
    },
    data() {
        return {
            data: SITE_DATA, // eslint-disable-line no-undef
            mapBackground: null,
            mapBackgroundFallback: {
                "mxID": 36270,
                "url": "/img/opuntia.webp",
                "name": "Opuntia",
                "author": "Sláys & htimh"
            },
            backgroundAlpha: 0.65,
            bgColorModeInterval: null,
            bgIntervalDelay: 20,
            bgIntervalTimer: 0,
            bgIntervalDivWidth: 0,
            bgInterval: null,
            bgIntervalDivDirectionFw: true
        };
    },
    mounted() {
        if (window.fetch)
            this.fetchBackgroundImage();
        else
            this.setBackgroundImage();
        this.bgColorModeInterval = setInterval(() => {
            this.backgroundAlpha = this.isDarkMode ? 0.65 : 0;
            document.querySelector("div#app>canvas").style.backgroundColor = "rgba(0, 0, 0, " + this.backgroundAlpha + ")";
        }, 0);
        this.bgInterval = setInterval(this.backgroundImageInterval, 1000);
    },
    methods: {
        async fetchBackgroundImage() {
            this.bgIntervalTimer = 0;
            this.bgIntervalDivDirectionFw = !this.bgIntervalDivDirectionFw;
            let res = await fetch("/api/trackmaniabackgrounds.json");
            if (!res.ok) {
                console.error("Error while fecthing backgrounds from API:", res.status, res.statusText);
                this.mapBackground = null;
                return this.setBackgroundImage();
            }
            let json = await res.json(), game = Object.keys(json), selectedGame = this.randomItem(game), selectedMap = this.randomItem(json[selectedGame]);
            while (this.mapBackground != null && selectedMap.mxID == this.mapBackground.mxID)
                selectedMap = this.randomItem(json[selectedGame]); // not taking the same map
            this.mapBackground = selectedMap;
            this.setBackgroundImage(this.mapBackground);
        },
        backgroundImageInterval() {
            if (this.bgIntervalTimer < this.bgIntervalDelay) {
                this.bgIntervalTimer += 1;
                let progressPercent = (this.bgIntervalTimer / this.bgIntervalDelay) * 100;
                if (!this.bgIntervalDivDirectionFw)
                    this.bgIntervalDivWidth = Math.ceil((100 - progressPercent) / 10);
                else
                    this.bgIntervalDivWidth = Math.floor(progressPercent / 10);
                if (document.querySelector("div.progress-circle") != null)
                    document.querySelector("div.progress-circle").style.borderWidth = this.bgIntervalDivWidth + "px";
            }
            else
                this.fetchBackgroundImage();
        },
        setBackgroundImage(map = this.mapBackgroundFallback) {
            document.querySelector("div#app>canvas").style.background = "url(" + map.url + ")";
            document.querySelector("div#app>canvas").style.backgroundColor = "rgba(0, 0, 0, " + this.backgroundAlpha + ")";
            document.querySelector("div#app>canvas").style.backgroundSize = "cover";
            document.querySelector("div#app>canvas").style.backgroundBlendMode = "darken";
        },
        removeBackgroundImage() {
            document.querySelector("div#app>canvas").style.background = "";
            document.querySelector("div#app>canvas").style.backgroundColor = this.isDarkMode ? "#000" : "#fff";
            document.querySelector("div#app>canvas").style.backgroundSize = "";
            document.querySelector("div#app>canvas").style.backgroundBlendMode = "";
        },
        randomItem(array) {
            return array[Math.floor(Math.random() * array.length)];
        }
    },
    unmounted() {
        clearInterval(this.bgColorModeInterval);
        clearInterval(this.bgInterval);
        this.removeBackgroundImage();
    },
    components: { ShowcaseList }
}
</script>

<template>
    <div>
        <ShowcaseList :showcases="data.trackmaniaShowcase" />
    </div>
    <div class="bgImage-desc is-size-6 has-text-centered" v-if="mapBackground != null">
        <i class="fa fa-map" aria-hidden="true" />&thinsp;
        {{ mapBackground.name }} by {{ mapBackground.author }}
        <div class="progress-circle" @click="fetchBackgroundImage" />
    </div>
    <div class="bgImage-desc is-size-6 has-text-centered" v-else>
        <i class="fa fa-map" aria-hidden="true" />&thinsp;
        {{ mapBackgroundFallback.name }} by {{ mapBackgroundFallback.author }}
    </div>
</template>

<style scoped>
.bgImage-desc {
    margin-bottom: -1em;
}

.progress-circle{
    float: right;
    box-sizing: border-box;
    font-size: 1.25em;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: 2px solid;
    border-width: 0px;
}
</style>
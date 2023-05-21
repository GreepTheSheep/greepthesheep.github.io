<script>
export default {
    props: {
        isDarkMode: {
            type: Boolean
        }
    },
    data() {
        return {
            mapBackground: null,
            mapBackgroundFallback: {
                "mxID": 36270,
                "url": "https://i.imgur.com/f7J7XxF.webp",
                "name": "Opuntia",
                "author": "Sláys & htimh"
            },
            backgroundAlpha: 0.65,
            bgInterval: null,
        }
    },
    mounted() {
        if (window.fetch) this.fetchBackgroundImage();
        else this.setBackgroundImage();
        this.bgInterval = setInterval(()=>{
            this.backgroundAlpha = this.isDarkMode ? 0.65 : 0;
            document.querySelector("div#app>canvas").style.backgroundColor = "rgba(0, 0, 0, "+this.backgroundAlpha+")";
        }, 0);
    },
    methods: {
        async fetchBackgroundImage() {
            let res = await fetch("/api/trackmaniabackgrounds.json");
            if (!res.ok) {
                console.error("Error while fecthing backgrounds from API:", res.status, res.statusText);
                return this.setBackgroundImage();
            }
            let json = await res.json(),
                game = Object.keys(json),
                selectedGame = this.randomItem(game);
            this.mapBackground = this.randomItem(json[selectedGame]);
            this.setBackgroundImage(this.mapBackground);
        },
        setBackgroundImage(map = this.mapBackgroundFallback) {
            document.querySelector("div#app>canvas").style.background = "url("+map.url+")";
            document.querySelector("div#app>canvas").style.backgroundColor = "rgba(0, 0, 0, "+this.backgroundAlpha+")";
            document.querySelector("div#app>canvas").style.backgroundSize = "cover";
            document.querySelector("div#app>canvas").style.backgroundBlendMode = "darken";
        },
        removeBackgroundImage() {
            document.querySelector("div#app>canvas").style.background = "";
            document.querySelector("div#app>canvas").style.backgroundColor = this.isDarkMode ? "#000" : "#fff";
            document.querySelector("div#app>canvas").style.backgroundSize = "";
            document.querySelector("div#app>canvas").style.backgroundBlendMode = "";
        },
        randomItem(array){
            return array[Math.floor(Math.random() * array.length)];
        }
    },
    unmounted() {
        clearInterval(this.bgInterval);
        this.removeBackgroundImage();
    }
}
</script>

<template>
    <div>

    </div>
</template>
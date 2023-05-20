<script>
export default {
    data() {
        return {
            mapBackground: null,
            mapBackgroundFallback: {
                "mxID": 36270,
                "url": "https://i.imgur.com/f7J7XxF.webp",
                "name": "Opuntia",
                "author": "Sláys & htimh"
            }
        }
    },
    mounted() {
        if (window.fetch) this.fetchBackgroundImage();
        else this.setBackgroundImage();
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
            document.querySelector("div#app>canvas").style.background = "rgba(0, 0, 0, .65) url("+map.url+")";
            document.querySelector("div#app>canvas").style.backgroundSize = "cover";
            document.querySelector("div#app>canvas").style.backgroundBlendMode = "darken";
        },
        removeBackgroundImage() {
            document.querySelector("div#app>canvas").style.background = "";
            document.querySelector("div#app>canvas").style.backgroundSize = "";
            document.querySelector("div#app>canvas").style.backgroundBlendMode = "";
        },
        randomItem(array){
            return array[Math.floor(Math.random() * array.length)];
        }
    },
    unmounted() {
        this.removeBackgroundImage();
    }
}
</script>

<template>
    <div>

    </div>
</template>
<script>
export default {
    props: {
        isDarkMode: {
            type: Boolean
        }
    },
    data() {
        return {
            wasInDarkMode: this.isDarkMode,
            colorModeInterval: null,
            backgroundImage: ""
        };
    },
    mounted() {
        this.colorModeInterval = setInterval(() => {
            if (!this.isDarkMode) this.$emit('toggleDarkMode');
        }, 0);
        this.setBackgroundImage();
    },
    methods: {
        setBackgroundImage() {
            document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0)";
            document.querySelector("div#app>canvas").style.backgroundColor = "rgba(0, 0, 0, 0)";

            // Save property background image to a variable then remove it
            this.backgroundImage = document.querySelector("div#app>canvas").style.backgroundImage;
            document.querySelector("div#app>canvas").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))";

        },
        removeBackgroundImage() {
            document.querySelector("div#app>canvas").style.background = "";
            document.querySelector("div#app>canvas").style.backgroundColor = this.isDarkMode ? "#000" : "#fff";

            // Restore property background image
            document.querySelector("div#app>canvas").style.backgroundImage = this.backgroundImage;
        },
    },
    unmounted() {
        clearInterval(this.colorModeInterval);
        if (!this.wasInDarkMode) this.$emit('toggleDarkMode');
        this.removeBackgroundImage();
    }
}
</script>
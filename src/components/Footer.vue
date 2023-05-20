<script>
export default {
    props: {
        isDarkMode: {
            type: Boolean
        },
        showStars: {
            type: Boolean
        },
    },
    data() {
        return {
            isDev: import.meta.env.DEV,
            commit: GIT_COMMIT_HASH, // eslint-disable-line no-undef
            builtAt: new Date(BUILT_AT) // eslint-disable-line no-undef
        }
    }
}
</script>

<template>
    <div class="has-text-centered is-size-7">
        <p>commit: {{ commit }}</p>
        <p v-if="!isDev">Built at: {{ builtAt }}</p>
        <p v-else>DEV MODE</p>
    </div>
    <div class="has-text-centered">
        <a :class="isDarkMode ? 'has-text-white' : 'has-text-black'" @click="$emit('darkModeBtnClicked');">
            <i class="fa fa-moon" aria-hidden="true" v-if="!isDarkMode" />
            <i class="fa fa-sun" aria-hidden="true" v-if="isDarkMode" />
        </a>
        &thinsp;
        <a :class="isDarkMode ? 'has-text-white' : 'has-text-black'" @click="$emit('starsBtnClicked');">
            <i class="fa fa-star-o" aria-hidden="true" v-if="!showStars" />
            <i class="fa fa-star" aria-hidden="true" v-if="showStars" />
        </a>
    </div>
</template>

<style scoped>
</style>

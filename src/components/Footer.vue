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
            site: SITE_CONF, // eslint-disable-line no-undef
            isDev: import.meta.env.DEV,
            commit: GIT_COMMIT_HASH, // eslint-disable-line no-undef
            builtAt: new Date(BUILT_AT) // eslint-disable-line no-undef
        }
    }
}
</script>

<template>
    <div class="is-size-5 has-text-centered">
        <a :href="'https://github.com/'+site.socials.github" target="_blank" class="sociallink">
            <i class="fa fa-github" />
        </a>
        &nbsp;
        <a :href="'https://x.com/'+site.socials.twitter" target="_blank" class="sociallink">
            <span>𝕏</span>
        </a>
        &nbsp;
        <a rel="me" :href="site.socials.mastodon.url+site.socials.mastodon.username" target="_blank" class="sociallink">
            <i class="fa fa-mastodon" />
        </a>
        &nbsp;
        <a :href="'https://patreon.com/'+site.socials.patreon" target="_blank">
            <i class="fa fa-patreon" aria-hidden="true"></i>
        </a>
        &nbsp;
        <router-link to="/about">
            <i class="fa fa-question" aria-hidden="true"></i>
        </router-link>
    </div>
    <div class="is-size-6 has-text-centered">
        <a :class="isDarkMode ? 'has-text-white' : 'has-text-black'" @click="$emit('darkModeBtnClicked');">
            <i class="fa fa-moon" aria-hidden="true" v-if="!isDarkMode" />
            <i class="fa fa-sun" aria-hidden="true" v-if="isDarkMode" />
        </a>
        &nbsp;
        <a :class="isDarkMode ? 'has-text-white' : 'has-text-black'" @click="$emit('starsBtnClicked');">
            <i class="fa fa-star-o" aria-hidden="true" v-if="!showStars" />
            <i class="fa fa-star" aria-hidden="true" v-if="showStars" />
        </a>
    </div>
    <div class="pt-3 is-size-7 has-text-centered">
        <p>commit: {{ commit }}</p>
        <p v-if="!isDev">Built at: {{ builtAt }}</p>
        <p v-else>DEV MODE</p>
    </div>
</template>

<style scoped>
</style>

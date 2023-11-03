<script>
export default {
    data() {
        return {
            site: SITE_CONF, // eslint-disable-line no-undef
            copyTextMail: ""
        }
    },
    mounted() {
        this.copyTextMail = this.site.socials.mail
    },
    methods: {
        copyToClipboard(content) {
            navigator.clipboard.writeText(content);
            this.copyTextMail = "Copied!";
            setTimeout(()=>{this.copyTextMail = content}, 2400);
        }
    }
}
</script>

<template>
    <div class="has-text-centered">
        <div class="buttons">
            <button class="button mb-4 is-medium is-outlined is-fullwidth is-link is-inverted is-rounded" @click="copyToClipboard(site.socials.mail)">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                &ensp;
                <span>{{ copyTextMail }}</span>
            </button>
            <router-link to="/discord">
                <button class="button mb-4 is-medium is-outlined is-link is-inverted is-rounded">
                        <i class="fa fa-discord-alt" aria-hidden="true"></i>
                        &ensp;
                        <span>Discord server</span>
                </button>
            </router-link>
            <a :href="'https://youtube.com/@'+site.socials.youtube" target="_blank">
                <button class="button mb-4 is-medium is-outlined is-link is-inverted is-rounded">
                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                        &ensp;
                        <span>Youtube</span>
                </button>
            </a>
            <a :href="'https://twitch.tv/'+site.socials.twitch" target="_blank">
                <button class="button mb-4 is-medium is-outlined is-link is-inverted is-rounded">
                        <i class="fa fa-twitch" aria-hidden="true"></i>
                        &ensp;
                        <span>Twitch</span>
                </button>
            </a>
            <a :href="'https://linkedin.com/in/'+site.socials.linkedin" target="_blank">
                <button class="button mb-4 is-medium is-outlined is-link is-inverted is-rounded">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                        &ensp;
                        <span>Linkedin</span>
                </button>
            </a>
            <a :href="'https://github.com/'+site.socials.github" target="_blank">
                <button class="button mb-4 is-medium is-outlined is-link is-inverted is-rounded">
                        <i class="fa fa-github" aria-hidden="true"></i>
                        &ensp;
                        <span>Github</span>
                </button>
            </a>
            <a :href="'https://x.com/'+site.socials.twitter" target="_blank">
                <button class="button mb-4 is-medium is-outlined is-link is-inverted is-rounded">
                        <span>𝕏 (Twitter)</span>
                </button>
            </a>
            <a :href="'https://instagram.com/'+site.socials.threads" target="_blank">
                <button class="button mb-4 is-medium is-outlined is-link is-inverted is-rounded">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        &ensp;
                        <span>Instagram</span>
                </button>
            </a>
            <a rel="me" :href="site.socials.mastodon.url+site.socials.mastodon.username" target="_blank" class="sociallink">
                <button class="button mb-4 is-medium is-outlined is-link is-inverted is-rounded">
                        <i class="fa fa-mastodon" aria-hidden="true"></i>
                        &ensp;
                        <span>Mastodon</span>
                </button>
            </a>
            <a rel="me" :href="'https://threads.net/@'+site.socials.threads" target="_blank">
                <button class="button mb-4 is-medium is-outlined is-link is-inverted is-rounded">
                        <i class="fa fa-at" aria-hidden="true"></i>
                        &ensp;
                        <span>Threads</span>
                </button>
            </a>
            <a :href="'https://patreon.com/'+site.socials.patreon" target="_blank">
                <button class="button mb-4 is-medium is-outlined is-link is-inverted is-rounded">
                        <i class="fa fa-patreon" aria-hidden="true"></i>
                        &ensp;
                        <span>Patreon</span>
                </button>
            </a>
        </div>
    </div>
</template>

<style scoped>
.button, a {
    transition: 0.3s !important;
}
a, a:hover, strong {
    color: inherit !important;
}
.buttons>a {
    display: flex;
    width: 100%;
    flex-direction: column;
}
</style>
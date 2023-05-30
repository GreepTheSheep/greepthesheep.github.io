<script>
import ShowcaseList from '../components/ShowcaseList.vue';
import SponsorList from '../components/SponsorList.vue';

export default {
    data() {
        return {
            site: SITE_CONF, // eslint-disable-line no-undef
            data: SITE_DATA // eslint-disable-line no-undef
        };
    },
    components: { ShowcaseList, SponsorList }
}
</script>

<template>
    <h2 class="has-text-centered is-size-3 headerA poppins">
        Hello!<br />
        My name is Matthieu<br />
        or <span class="name">{{ site.name }}</span>.
    </h2>

    <div class="py-6 has-text-centered divsociallinks">
        <a :href="'https://github.com/'+site.socials.github" target="_blank" class="sociallink">
            <i class="fa fa-github" />
            <span> Github</span>
        </a>
        <a :href="'https://twitter.com/'+site.socials.twitter" target="_blank" class="sociallink">
            <i class="fa fa-twitter" />
            <span> Twitter</span>
        </a>
        <a rel="me" :href="site.socials.mastodon.url+site.socials.mastodon.username" target="_blank" class="sociallink">
            <i class="fa fa-mastodon" />
            <span> Mastodon</span>
        </a>
    </div>

    <h3 class="is-size-4">
        My works:
    </h3>
    <ShowcaseList :showcases="data.homeShowcase" />

    <SponsorList />

</template>

<style scoped>
@keyframes headerAnim {
    from {
        letter-spacing: 10px;
    }
    to {
        letter-spacing: 0.5px;
    }
}
@keyframes nameAnim {
    0% {
        color: darkgreen;
    }
    50% {
        color: seagreen;
    }
    100% {
        color: darkgreen;
    }
}
@keyframes nameAnimDarkmode {
    0% {
        color: chartreuse;
    }
    50% {
        color: green;
    }
    100% {
        color: chartreuse;
    }
}
.headerA {
    animation: headerAnim 2s forwards;
}
.poppins {
    font-family: 'Poppins Thin';
    line-height: 1.2em;
    font-weight: bold;
}
.name {
    color: darkgreen;
    animation: nameAnim 5s infinite;
    animation-delay: 2s;
}
body.darkmode .name {
    color: chartreuse;
    animation: nameAnimDarkmode 5s infinite;
    animation-delay: 2s;
}
.divsociallinks a {
    margin-right: 30px;
}
.sociallink {
    color: darkgreen !important;
    font-size: larger;
}
body.darkmode .sociallink {
    color: lightgreen !important;
}
</style>
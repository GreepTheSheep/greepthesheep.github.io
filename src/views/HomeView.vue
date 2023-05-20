<script>
export default {
}
</script>

<template>
    <h2 class="has-text-centered is-size-3 pb-6 headerA poppins">
        Hello!<br />
        My name is Matthieu<br />
        or <span class="name">Greep</span>.
    </h2>

    <div class="py-6 has-text-centered divsociallinks">
        <a href="https://github.com/{{ site.footer-links.github }}" target="_blank" class="sociallink">
            <i class="fa fa-github" />
            <span> Github</span>
        </a>
        <a href="https://twitter.com/{{ site.footer-links.twitter }}" target="_blank" class="sociallink">
            <i class="fa fa-twitter" />
            <span> Twitter</span>
        </a>
        <a rel="me" href="https://trackmania.social/@greep" target="_blank" class="sociallink">
            <i class="fa fa-mastodon" />
            <span> Mastodon</span>
        </a>
    </div>

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
    color: chartreuse;
    animation: nameAnim 6s infinite;
    animation-delay: 2s;
}
.divsociallinks a {
    margin-right: 30px;
}
.sociallink {
    color: lightgreen !important;
    font-size: larger;
}
@media screen and (prefers-color-scheme: light) {
    .sociallink {
        color: darkgreen !important;
    }
}
</style>
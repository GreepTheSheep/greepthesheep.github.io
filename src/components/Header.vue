<script>
export default {
    data() {
        return {
            site: SITE_CONF, // eslint-disable-line no-undef
        }
    }
}
</script>

<template>
    <div class="masthead clearfix">
        <a href="/" class="site-avatar">
            <img :src="site.avatar" :alt="site.name">
        </a>
        <div class="site-info">
            <h1 class="site-name"><a href="/" class="inherit">{{ site.name }}</a></h1>
            <p class="site-description">{{ site.description }}</p>
        </div>
        <nav>
            <a href="/" class="active">Home</a>
            <a href="https://linktr.ee/Greep" target="_blank">Links</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
        </nav>
    </div>
</template>

<style scoped>
.site-avatar {
    float: left;
    width: 70px;
    height: 70px;
    margin-right: 15px;
}
.site-info {
    float: left;
}
.site-name {
    margin: 0;
    cursor: pointer;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 300;
    font-size: 28px;
    letter-spacing: 1px;
    color: inherit !important;
}
.site-description {
    margin: -5px 0 0 0;
    font-size: 16px;
}
</style>

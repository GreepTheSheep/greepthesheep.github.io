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
        <router-link to="/" class="site-avatar">
            <img :src="site.avatar" :alt="site.name">
        </router-link>
        <div class="site-info">
            <h1 class="site-name"><router-link to="/" class="inherit">{{ site.name }}</router-link></h1>
            <p class="site-description">{{ site.description }}</p>
        </div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/contact">Contact</router-link>
            <a :href="'https://patreon.com/'+site.socials.patreon" target="_blank">
                <i class="fa fa-patreon" aria-hidden="true"></i>
                Patreon
            </a>
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

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
    <div>
        <div class="columns">
            <div class="column">
                <div class="columns">
                    <div class="column">
                        <a href="/" class="site-avatar">
                            <img :src="site.avatar" :alt="site.name">
                        </a>
                    </div>
                    <div class="column">
                        <h1>{{ site.name }}</h1>
                    </div>
                </div>
            </div>
            <div class="column">
                Second column
            </div>
        </div>
        <hr />
    </div>
</template>

<style scoped>
.site-avatar {
    float: left;
    width: 70px;
    height: 70px;
    margin-right: 15px;
}
</style>

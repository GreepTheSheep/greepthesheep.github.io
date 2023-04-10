<script>
import { RouterView } from 'vue-router'
export default {
    components: { RouterView },
    data() {
        return {
            site: SITE_DATA // eslint-disable-line no-undef
        }
    }
}
</script>

<template>
    {{ site }}
    <RouterView />
</template>

<style scoped>
</style>

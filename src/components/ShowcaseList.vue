<script>
export default {
    props: {
        showcases: {
            type: Array
        },
    }
}
</script>

<template>
    <div class="columns is-centered" v-for="showcase in showcases" v-bind:key="showcase.name">
        <div class="column is-one-third" v-if="showcase.image">
            <a :href="showcase.link" target="_blank" v-if="showcase.link.startsWith('http')">
                <img :alt="showcase.name" :src="'/img/'+showcase.image" width="200">
            </a>
            <router-link :to="showcase.link" v-else>
                <img :alt="showcase.name" :src="'/img/'+showcase.image" width="200">
            </router-link>
        </div>
        <div class="column">
            <h3 class="is-size-4 pb-3">
                <a :href="showcase.link" target="_blank" v-if="showcase.link.startsWith('http')">{{ showcase.name }}</a>
                <router-link :to="showcase.link" v-else>{{ showcase.name }}</router-link>
            </h3>
            <p v-if="showcase.description">{{ showcase.description }}</p>
        </div>
    </div>
</template>
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
    <div class="columns" v-for="showcase in showcases" v-bind:key="showcase.name">
        <div class="column is-one-third" v-if="showcase.image">
            <a :href="showcase.link" :target="showcase.link.startsWith('http') ? '_blank' : ''">
                <img :alt="showcase.name" :src="'/img/'+showcase.image" width="200">
            </a>
        </div>
        <div class="column">
            <h3 class="is-size-4 pb-3">
                <a :href="showcase.link" :target="showcase.link.startsWith('http') ? '_blank' : ''">{{ showcase.name }}</a>
            </h3>
            <p v-if="showcase.description">{{ showcase.description }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sponsorsData: SITE_DATA.sponsors, // eslint-disable-line no-undef
            sponsorsChunks: []
        }
    },
    mounted() {
        this.chunkSponsors();
    },
    methods: {
        chunkSponsors() {
            if (this.sponsorsData && this.sponsorsData.length > 0) {
                const chunkSize = 12/2;
                for (let i = 0; i < this.sponsorsData.length; i += chunkSize) {
                    const chunk = this.sponsorsData.slice(i, i + chunkSize);
                    this.sponsorsChunks.push(chunk);
                }
            }
        }
    }
}
</script>

<template>
    <div class="sponsors is-desktop pb-6" v-if="sponsorsData && sponsorsData.length > 0">
        <div class="columns pb-4">
            <div class="column has-text-left">
                <h2 class="is-size-4">They support me:</h2>
            </div>
            <div class="column has-text-right">
                <h2 class="is-size-4">
                    <a :href="'https://patreon.com/'+site.socials.patreon" target="_blank">
                        <button class="button is-danger has-text-white">
                            <i class="fa fa-patreon" aria-hidden="true"></i>
                            &nbsp;
                            Become a Patreon
                        </button>
                    </a>
                </h2>
            </div>
        </div>
        <div class="columns is-centered" v-for="chunk in sponsorsChunks" v-bind:key="chunk[0].name">
            <div class="column is-2 has-text-centered" v-for="sponsor in chunk" v-bind:key="sponsor.name">
                <figure class="image is-96x96">
                    <img class="is-rounded" :src="sponsor.avatar" :alt="sponsor.name" width="100px" v-if="sponsor.avatar">
                    <img class="is-rounded" src="/img/unknown-person.jpg" :alt="sponsor.name" width="100px" v-else>
                    <span v-if="sponsor.name">{{ sponsor.name }}</span>
                </figure>
            </div>
        </div>
    </div>
</template>
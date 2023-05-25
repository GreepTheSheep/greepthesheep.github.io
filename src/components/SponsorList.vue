<script>
export default {
    data() {
        return {
            sponsorsData: SITE_DATA.sponsors, // eslint-disable-line no-undef,
            sponsors: [],
            sponsorsChunks: [],
            GITHUB_USER_API: "https://api.github.com/users/"
        }
    },
    mounted() {
        this.fetchAllSponsors();
    },
    methods: {
        async fetchAllSponsors() {
            for (let i = 0; i < this.sponsorsData.length; i++) {
                this.sponsors.push(await this.fetchGitHubUser(this.sponsorsData[i]));
            }
            const chunkSize = 4;
            for (let i = 0; i < this.sponsors.length; i += chunkSize) {
                const chunk = this.sponsors.slice(i, i + chunkSize);
                this.sponsorsChunks.push(chunk);
            }
        },
        async fetchGitHubUser(user) {
            let res = await fetch(this.GITHUB_USER_API + user);

            if (!res.ok) {
                console.error(this.GITHUB_USER_API + user, res.status, res.statusText);
                return;
            }

            return await res.json();
        }
    },
}
</script>

<template>
    <div class="sponsors" v-if="sponsors.length > 0">
        <h2 class="is-size-4 pb-4">They support me:</h2>
        <div class="columns is-desktop" v-for="chunk in sponsorsChunks" v-bind:key="chunk[0].id">
            <div class="column is-2" v-for="sponsor in chunk" v-bind:key="sponsor.id">
                <a :href="sponsor.html_url"><img class="image is-96x96 is-rounded" :src="sponsor.avatar_url" :alt="sponsor.login +' - ' + sponsor.name" width="100px"></a>
            </div>
        </div>
    </div>
</template>
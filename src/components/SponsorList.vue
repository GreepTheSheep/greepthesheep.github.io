<script>
export default {
    data() {
        return {
            sponsorsData: SITE_DATA.sponsors, // eslint-disable-line no-undef,
            sponsors: [],
            sponsorsCached: this.$ls.get('sponsorsCache'),
            sponsorsChunks: [],
            GITHUB_USER_API: "https://api.github.com/users/",
            githubRateLimit: {limit: 60, remain: 60, expiresDate: null}
        }
    },
    mounted() {
        if (this.sponsorsCached == null) this.fetchAllSponsors().then(this.chunkSponsors);
        else this.chunkSponsors();
    },
    methods: {
        wait(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        async fetchAllSponsors() {
            for (let i = 0; i < this.sponsorsData.length; i++) {
                this.sponsors.push(await this.fetchGitHubUser(this.sponsorsData[i]));
            }
            this.$ls.set('sponsorsCache', this.sponsors, this.githubRateLimit.expiresDate.getTime() - new Date().getTime());
            this.sponsorsCached =  this.$ls.get('sponsorsCache');
        },
        async fetchGitHubUser(user) {
            if (this.githubRateLimit.remain < 5) {
                console.log("Waiting for GitHub API rate limits...");
                await this.wait(20 * 1000)
                return await this.fetchGitHubUser(user);
            }
            let res = await fetch(this.GITHUB_USER_API + user);

            if (!res.ok) {
                console.error(this.GITHUB_USER_API + user, res.status, res.statusText);
                return;
            }

            this.githubRateLimit = {
                limit: Number(res.headers.get('x-ratelimit-limit')),
                remain: Number(res.headers.get('x-ratelimit-remaining')),
                expiresDate: new Date(Number(res.headers.get('x-ratelimit-reset')) * 1000)
            };

            return await res.json();
        },
        chunkSponsors() {
            const chunkSize = 12/2;
            for (let i = 0; i < this.sponsorsCached.length; i += chunkSize) {
                const chunk = this.sponsorsCached.slice(i, i + chunkSize);
                this.sponsorsChunks.push(chunk);
            }
        }
    },
}
</script>

<template>
    <div class="sponsors" v-if="sponsorsCached != null && sponsorsCached.length > 0">
        <h2 class="is-size-4 pb-4">They sponsor me:</h2>
        <div class="columns is-desktop" v-for="chunk in sponsorsChunks" v-bind:key="chunk[0].id">
            <div class="column is-2" v-for="sponsor in chunk" v-bind:key="sponsor.id">
                <figure class="image is-96x96">
                    <a :href="sponsor.html_url" target="_blank">
                        <img class="is-rounded" :src="sponsor.avatar_url" :alt="sponsor.login +' - ' + sponsor.name" width="100px">
                    </a>
                </figure>
            </div>
        </div>
    </div>
</template>
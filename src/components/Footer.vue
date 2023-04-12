<script>
export default {
    data() {
        return {
            isDev: import.meta.env.DEV,
            commit: GIT_COMMIT_HASH, // eslint-disable-line no-undef
            builtAt: new Date(BUILT_AT) // eslint-disable-line no-undef
        }
    }
}
</script>

<template>
    <div>
        <p>commit: {{ commit }}</p>
        <p v-if="!isDev">Built at: {{ builtAt }}</p>
        <p v-else>DEV MODE</p>
    </div>
</template>

<style scoped>
</style>

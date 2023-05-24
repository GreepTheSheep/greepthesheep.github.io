<template>
    <div class="colorAnim is-size-1 has-text-centered">
        Redirecting...
    </div>
</template>

<style scoped>
@keyframes colorTextRedirect {
    0% {
        color: red;
    }
    25% {
        color: purple;
    }
    50% {
        color: royalblue
    }
    75% {
        color: purple;
    }
    100% {
        color: red;
    }
}

.colorAnim {
    color: red;
    animation: colorTextRedirect 10s infinite;
}
</style>
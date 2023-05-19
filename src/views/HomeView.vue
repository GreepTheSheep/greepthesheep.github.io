<script>
export default {
}
</script>

<template>
    <h2 class="has-text-centered is-size-3 headerA poppins">
        Hello!<br />
        My name is Matthieu<br />
        or <span class="name">Greep</span>.
    </h2>
</template>

<style scoped>
@keyframes headerAnim {
    from {
        letter-spacing: 10px;
    }
    to {
        letter-spacing: 0.5px;
    }
}
@keyframes nameAnim {
    0% {
        color: chartreuse;
    }
    50% {
        color: green;
    }
    100% {
        color: chartreuse;
    }
}
.headerA {
    animation: headerAnim 2s forwards;
}
.poppins {
    font-family: 'Poppins Thin';
    line-height: 1.2em;
    font-weight: bold;
}
.name {
    color: chartreuse;
    animation: nameAnim 6s infinite;
    animation-delay: 2s;
}
</style>
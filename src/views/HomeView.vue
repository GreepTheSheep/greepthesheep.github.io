<script>
</script>

<template>
    <h2 class="headerA poppins" style="text-align: center;">
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
    font-size: 1.5em;
    line-height: 1.2em;
}
.name {
    color: chartreuse;
    animation: nameAnim 6s infinite;
    animation-delay: 2s;
}
</style>
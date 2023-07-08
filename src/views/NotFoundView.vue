<template>
    <div class="has-text-centered">
        <h2 class="mb-5 is-size-3 headerA poppins">
            404: <span class="name">Not Found</span>😕
        </h2>
        <router-link to="/" class="button is-medium is-link is-outlined is-rounded">
            <i class="fa fa-home" aria-hidden="true"></i>
            &ensp;
            <span>Go back home</span>
        </router-link>
    </div>
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
        color: darkgreen;
    }
    50% {
        color: seagreen;
    }
    100% {
        color: darkgreen;
    }
}
@keyframes nameAnimDarkmode {
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
    color: darkgreen;
    animation: nameAnim 5s infinite;
    animation-delay: 2s;
}
body.darkmode .name {
    color: chartreuse;
    animation: nameAnimDarkmode 5s infinite;
    animation-delay: 2s;
}
.button {
    transition: 0.3s !important;
}
.button:hover {
    color: white !important;
}
</style>
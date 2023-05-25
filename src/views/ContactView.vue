<script>
export default {
    data() {
        return {
            mail: "greep@greep.fr"
        }
    }
}
</script>

<template>
    <div class="block is-size-3 has-text-centered">
        <a :href="'mailto:'+mail">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            &nbsp;
            <span>{{ mail }}</span>
        </a>
    </div>
    <div class="block is-size-3 has-text-centered">
        <router-link to="/discord">
            <i class="fa fa-discord-alt" aria-hidden="true"></i>
            &nbsp;
            <span>Discord server</span>
        </router-link>
    </div>
</template>
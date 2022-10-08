<template>
    <div class="container">
        <nav class="panel bg-dark d-flex">
            <div class="col-4"></div>
            <div class="col-2">
                <img src="@/assets/starwars-logo.png" alt="logo star wars">
            </div>
            <div>
                <button class="btn text-white">LOGIN</button>
                <button class="btn text-white">REGISTER</button>
            </div>
        </nav>
        <div class="bg-dark">
            <button class="btn text-white">HOME</button>
            <button class="btn text-white" @click="showStarships()">STARSHIPS</button>
        </div>
        <InfoStarship></InfoStarship>
        <ListStarships></ListStarships>
    </div>
</template>
<script>
import ListStarships from "./ListStarships.vue";
import InfoStarship from "./InfoStarship.vue";
export default {
    name: "BanNav",
    components: { ListStarships, InfoStarship },
    methods: {
        showStarships: function () {
            return this.$store.dispatch("GET_STARSHIPS")
        },
    }
}

</script>
<style>

</style>
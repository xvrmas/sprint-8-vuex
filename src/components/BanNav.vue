<template>
    <div>
        <!-- <div> -->
        <div>
            <b-navbar class="py-3 barra fixed-top" toggleable="sm" type="dark">
                <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
                <img class="imatge" src="@/assets/starwars-logo.png" alt="logo star wars">
                <b-collapse id="nav-text-collapse" is-nav>
                    <b-navbar-nav>
                        <div class="social">
                            <button class="nav-item btn text-white">LOGIN</button>
                            <button class=" nav-item btn text-white">REGISTER</button>
                        </div>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
            <header class="botons">
                <div class="botons-2 text-primary">
                    <b-button squared class="bg-dark">HOME</b-button>
                    <b-button squared class="bg-dark" @click="showStarships()">STARSHIPS</b-button>
                </div>
            </header>
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
* {
    background-color: black;
}

.social {
    margin-left: 30%;
}

.imatge {
    margin-left: 40%;
}

.botons {
    margin-top: 150px;
    border-bottom: solid white 1px;
    border-top: solid white 1px;
}

.btn1 {
    margin-right: 10%;
}

/* .botons-2>:hover {
    margin-bottom: solid red 2px;
} */

.botons-2 {
    margin-left: 40%;
    margin-right: 45%;
    /* border-left: solid white 1px;
    border-right: solid white 1px; */
}
</style>
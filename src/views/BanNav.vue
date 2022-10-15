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
                            <button class="nav-item btn text-white">LOGIN</button>//
                            <button class=" nav-item btn text-white">REGISTER</button>
                        </div>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
            <header class="botons fixed-top">
                <div class="botons-2 text-primary">
                    <b-button squared class="btn bg-transparent  ">HOME</b-button>
                    <b-button squared class="btn bg-transparent " @click="showStarships()">STARSHIPS</b-button>
                </div>
            </header>
        </div>
    </div>
</template>
<script>
import ListStarships from "./ListStarships.vue";
import InfoStarship from "./InfoStarship.vue";
import { mapState } from 'vuex'

export default {
    name: "BanNav",
    components: { ListStarships, InfoStarship },
    computed: {
        ...mapState(['condition']),
    },
    methods: {
        showStarships: function () {
            this.$router.push("/ListStarships");
            this.$store.state.condition = true
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
    margin-left: 20em;
}

.imatge {
    margin-left: 40%;
}

.botons {
    margin-top: 125px;
    border-bottom: solid rgb(221, 221, 221) 1px;
    border-top: solid rgb(221, 221, 221) 1px;
}

.btn1 {
    margin-right: 10%;
}

.botons-2 {
    margin-left: 40%;
    margin-right: 45%;
    background-color: black;
}
</style>
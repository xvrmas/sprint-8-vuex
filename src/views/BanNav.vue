<template>
    <div>
        <b-navbar class="fixed-top" toggleable="lg" type="dark">
            <div class="col-sm-4"></div>
            <b-navbar-brand href="#">
                <img class="imatge" src="@/assets/starwars-logo.png" alt="logo star wars">
            </b-navbar-brand>
            <div class="col-2"></div>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <div class="linea">
                        <b-button squared class="btn bg-transparent " @click="Home()">HOME</b-button>
                        <b-button squared class="btn bg-transparent " @click="showStarships()">STARSHIPS</b-button>
                    </div>
                    <button class="nav-item btn text-white" @click="loginPage()">LOGIN</button>//
                    <button class=" nav-item btn text-white">REGISTER</button>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

    </div>
</template>


<script>
import Home from './Home.vue'
import ListStarships from "./ListStarships.vue";
import { mapState } from 'vuex'

export default {
    name: "BanNav",
    components: { Home, ListStarships },
    computed: {
        ...mapState(['condition', 'numImg']),
    },
    methods: {
        showStarships: function () {
            this.$router.push("/ListStarships");
            this.$store.state.condition = true
            return this.$store.dispatch("GET_STARSHIPS")
        },

        Home() {
            this.$router.push("/");

        },
        loginPage() {
            this.$router.push("/AuthView");

        }
    }
}

</script>
<style>
* {
    background-color: black;
}

.linea {
    border: solid white 1px;
}

.social {
    margin-left: 20em;
}

.imatge {
    margin-left: 40%;
}

.botons {
    margin-top: 22vh;
    border-bottom: solid rgb(221, 221, 221) 1px;
    border-top: solid rgb(221, 221, 221) 1px;
}

.btn1 {
    margin-right: 10%;
}

.botons-2 {
    background-color: black;
}
</style>
<template>
    <div>
        <!-- <div> -->
        <div>
            <b-navbar class="py-3 fixed-top" toggleable="sm" type="dark">
                <div class="container d-flex">
                    <!-- <b-navbar-toggle target="nav-text-collapse"> -->
                        <img class="imatge" src="@/assets/starwars-logo.png" alt="logo star wars">
                        <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                            <div>
                                    <button class="nav-item btn text-white" @click="loginPage()">LOGIN</button>//
                                    <button class=" nav-item btn text-white">REGISTER</button>
                            </div>
                        </div>
                    <!-- </b-navbar-toggle> -->
                    <!-- </b-collapse> -->
                    <div class="fixed-top"
                        style="border-top:solid rgb(221,221,221) 1px; border-bottom: solid rgb(221,221,221)  1px; margin-top:130px">
                        <b-button squared class="btn bg-transparent " @click="Home()">HOME</b-button>
                        <b-button squared class="btn bg-transparent " @click="showStarships()">STARSHIPS
                        </b-button>
                    </div>
                </div>
            </b-navbar>
        </div>
    </div>
</template>
<script>
import Home from './Home.vue'
import ListStarships from "./ListStarships.vue";
import InfoStarship from "./InfoStarship.vue";
import { mapState } from 'vuex'

export default {
    name: "BanNav",
    components: { Home, ListStarships, InfoStarship },
    computed: {
        ...mapState(['condition','numImg']),
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
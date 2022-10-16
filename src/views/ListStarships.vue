<template>
    <div class="llista">
        <div class="ships  bg-dark" v-for="(item,i) in getStarShips.results" :key="i">
            <a class="nav-link bg-dark text-secondary " href="#" @click="setInfoShip(item),imatge(item)">
                <h5 class="bg-dark">{{item.name}}</h5>
                <h6 class="bg-dark">{{item.model}}</h6>
            </a>
        </div>
        <div v-if="getCondition" class="botons-nav">
            <button class="btn ml-5 text-white " @click="decreasePage">
                <b-icon icon="arrow-left"></b-icon>
            </button>
            <a href="#">
                <b-icon class="text-white" icon="arrow-bar-up"></b-icon>
            </a>
            <button class="btn text-white" @click="increasePage">
                <b-icon icon="arrow-right"></b-icon>
            </button>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
    name: 'ListStarships',
    data() {
        return {
            PreImatge: ''
        }
    },

    computed: {
        ...mapGetters(['getStarShips', 'getCondition', 'getNumImg']),
        ...mapMutations(['setShips']),
        ...mapState(['numImg'])
    },

    methods: {
        setInfoShip(item) {
            this.$router.push("/InfoStarship");
            this.$store.state.infoTechShip = item;
            console.log(item)
        },
        increasePage() {
            this.$store.state.page++;
            if (this.$store.state.page > 4) {
                this.$store.state.page = 4
            }
            this.$store.dispatch("GET_STARSHIPS")

        },
        decreasePage() {
            this.$store.state.page--;
            if (this.$store.state.page < 1) {
                this.$store.state.page = 1
            }
            this.$store.dispatch("GET_STARSHIPS")
        },
        imatge(item) {
            this.$store.state.numImg = item.url.split(/\D/g).join(''),
                console.log(this.$store.state.numImg)
        }
    },

}
</script>
<style scoped>
.llista {
    margin-top: 190px;
}

.ships {
    padding: 20px;
    margin-left: 30vh;
    margin-right: 30vh;
    margin-top: 5vh;
}

.botons-nav {
    margin: 2em 45% 5em;
}

.page-minus {
    margin-top: 2%;
    margin-left: 40%;
    margin-bottom: 10%;
}

.page-plus {
    margin-top: 2%;
    margin-left: 5%;
    margin-bottom: 10%;

}
</style>
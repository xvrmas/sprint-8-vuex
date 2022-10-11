<template>
    <div class="llista">
        <div class="ships bg-dark" v-for="(item,i) in getStarShips.results" :key="i">
            <a class="nav-link bg-dark text-secondary " href="#" @click="setInfoShip(item)">
                <h5 class="bg-dark">{{item.name}}</h5>
                <h6 class="bg-dark">{{item.model}}</h6>
            </a>
        </div>
        <button class="btn btn-dark" @click="increasePage">View more</button>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'ListStarships',
    computed: {
        ...mapGetters(['getStarShips']),
        ...mapMutations(['setShips'])
    },

    methods: {
        setInfoShip(item) {
            this.$store.state.infoTechShip = item;
            console.log(item)
        },
        increasePage() {
            this.$store.state.page++,
                console.log(this.$store.state.page)
        }
    }
}
</script>
<style>
.llista{
    margin-top: 50px;
}
.ships{
    padding: 20px;
    margin-left: 30vh;
    margin-right: 30vh;
    margin-top: 5vh;
}

</style>
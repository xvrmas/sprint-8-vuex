<template>
    <div>
        <div class="llista" v-for="(item,i) in getStarShips.results" :key="i">
            <a class="nav-link" href="#" @click="setInfoShip(item)">
                <h5>{{item.name}}</h5>
                <h6>{{item.model}}</h6>
            </a>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'ListStarships',
    computed: {
        ...mapGetters(['getStarShips']),
        ...mapMutations(['setShips',''])
    },
    methods: {
        setInfoShip (item) {
            this.$store.state.infoTechShip = item;
            console.log(item)

        },

    }
}
</script>
<style>
.llista {
    border: solid 1px;
    margin: 20px;
}

h5,h4,h3 {
    margin: 10px;
    margin-left: 40px;
}

h6 {
    margin: 10px;
    margin-left: 40px;
}
</style>
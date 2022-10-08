<template>
    <div>
        <div class="llista" v-for="(item,i) in starShips.results" :key="i">
            <a class="nav-link" @click="setInfoShip(item)">
                <h5>{{item.name}}</h5>
                <h6>{{item.model}}</h6>
            </a>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'ListStarships',
    computed: {
        ...mapState(['starShips']),
    },
    methods: {
        setInfoShip: function (item) {
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

h5 {
    margin: 10px;
    margin-left: 40px;
}

h6 {
    margin: 10px;
    margin-left: 40px;
}
</style>
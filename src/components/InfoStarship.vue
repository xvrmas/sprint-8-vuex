<template>
    <div>
        <h3>{{getInfoShips.name}}</h3>
        <h6>{{getInfoShips.model}}</h6>
        <h6>{{getInfoShips.manufacturer}}</h6>
        <h6>{{getInfoShips.cost_in_credits}}</h6>
        <h6>{{getInfoShips.crew}}</h6>
        <h6>{{getInfoShips.passengers}}</h6>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'InfoStarship',
    computed: {
        ...mapGetters(['getInfoShips'])
    }
}
</script>
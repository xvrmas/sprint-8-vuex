<template>
    <div class="text-white m-5">
        <!-- <img src="@/assets/starships/url" alt=""> -->
        <h3>{{getInfoShips.name}}</h3>
        <h6>{{getInfoShips.model}}</h6>
        <h6>{{getInfoShips.manufacturer}}</h6>
        <h6>{{getInfoShips.max_atmosphering_speed}}</h6>
        <h6>{{getInfoShips.cost_in_credits}}</h6>
        <h6>{{getInfoShips.crew}}</h6>
        <h6>{{getInfoShips.passengers}}</h6>
        <h6>{{getInfoShips.url}}</h6>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'InfoStarship',
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['getInfoShips'])
    }
}
</script>
<style>

</style>
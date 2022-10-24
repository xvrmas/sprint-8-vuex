<template>
    <div class="container  text-white" align-content="center">
        <h2>{{ getInfoShips.name }}</h2>
        <hr>
        <h6><strong>Model:</strong> {{ getInfoShips.model }}</h6>
        <h6>Manufacturer: {{ getInfoShips.manufacturer }}</h6>
        <h6>Max speed: {{ getInfoShips.max_atmosphering_speed }} Km/h</h6>
        <h6>Cost: {{ getInfoShips.cost_in_credits }} credits</h6>
        <h6>Crew: {{ getInfoShips.crew }}</h6>
        <h6>Passengers: {{ getInfoShips.passengers }}</h6>
        <h6>Length: {{ getInfoShips.length }}</h6>
        <h6>Cargo capacity: {{ getInfoShips.cargo_capacity }}</h6>
        <h6>Consumables: {{ getInfoShips.consumables }}</h6>
        <h6>Hyperdrive rating: {{ getInfoShips.hyperdrive_rating }}</h6>
        <h6>Starship class: {{ getInfoShips.starship_class }}</h6>
        <h6>MGLT: {{ getInfoShips.MGLT }}</h6>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
    name: 'infoShip',
    computed: {
        ...mapGetters(['getInfoShips', ' getImageShips']),
        ...mapMutations(['setImageShips']),
        ...mapState(['imageShips', 'numImg']),

    },
}
</script>
<style scoped>
.container {
    margin-top: 20vh;
}
</style>
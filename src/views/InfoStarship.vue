<template>
    <div class="container d-flex">
        <div class="panell-ships  col-sm-6 text-white" >
            <h2>{{getInfoShips.name}}</h2>
            <hr>
            <h6><strong>Model:</strong> {{getInfoShips.model}}</h6>
            <h6>Manufacturer: {{getInfoShips.manufacturer}}</h6>
            <h6>Max speed: {{getInfoShips.max_atmosphering_speed}} Km/h</h6>
            <h6>Cost: {{getInfoShips.cost_in_credits}} credits</h6>
            <h6>Crew: {{getInfoShips.crew}}</h6>
            <h6>Passengers: {{getInfoShips.passengers}}</h6>
            <h6>Length: {{getInfoShips.length}}</h6>
            <h6>Cargo capacity: {{getInfoShips.cargo_capacity}}</h6>
            <h6>Consumables: {{getInfoShips.consumables}}</h6>
            <h6>Hyperdrive rating: {{getInfoShips.hyperdrive_rating}}</h6>
            <h6>Starship class: {{getInfoShips.starship_class}}</h6>
            <h6>MGLT: {{getInfoShips.MGLT}}</h6>
        </div>
        <div id="ImatgeFons" :style="{
          backgroundImage: `url(${require(`@/assets/starships/${getNumImg}.jpg`)})`,
          width: '100%',
          height: '66vh',
          backgroundPosition:'  center',
          backgroundRepeat: 'no-repeat',
          marginTop:'20vh'
        }"></div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ImageShip from '@/components/ImageShip.vue'
export default {
    name: 'InfoStarship',
    components: { ImageShip },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['getInfoShips', 'getNumImg'])
    },

}
</script>
<style scoped>
.container {
    margin-top: 10vh;
}

.panell-ships {
    margin-top: 20vh;
    padding: 2vh;
    border: solid rgb(56, 56, 56) 1px;
    border-right: solid red 2px;
}

.panell-imatge {
    margin-top: 20vh;
}

h6,
h2,
.panell-ships,
strong {
    background-color: #1b1b1c;
}
</style>
<template>
    <div class="container d-flex">
        <div class="panell-ships  col-sm-12 text-white">
            <h2>{{getInfoShips.name}}</h2>
            <img class="img" :src="imageShips">
            <hr style="color:red">
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
            <button class="text-white" @click=" veureURL()">URL</button>
        </div>
        <!-- <div id="ImatgeFons" :style="{
          backgroundImage: `${imageShips}`,
          width: '100%',
          height: '66vh',
          backgroundPosition:'  center',
          backgroundRepeat: 'no-repeat',
          marginTop:'20vh'
        }"></div> -->
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
    name: 'InfoStarship',
    data() {
        return {
            image:this.$store.state.imageShips
        }
    },
    computed: {
        ...mapGetters(['getInfoShips', 'getNumImg', 'getCondition', ' getImageShips']),
        ...mapMutations(['setImageShips']),
        ...mapState(['imageShips','numImg']),

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
    border: solid rgb(86, 86, 86) 1px;
    border-right: solid rgb(164, 161, 161) 3px;
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

img {
    width: '10%';
    height: 'auto';
    background-position: 'center';
    background-repeat: 'no-repeat';
    margin-top: '20vh';
}
</style>
<template>
    <div class="container">
        <imageShip class="item"></imageShip>
        <infoShip class="item"></infoShip>
    </div>
</template>
<script>
import infoShip from '@/components/infoShip.vue'
import imageShip from '@/components/imageShip.vue'
export default {
    components: { infoShip, imageShip },
    name: 'panell'
}
</script>

<style scoped>

.container {
    margin-top: 25vh;
    display: grid;
    padding: 10px;
    grid-template-columns: auto auto;
    background-color: black;
    border: solid yellow 1px;
    border-radius: 30px;

}

.item {
    padding: 10px;
    text-align: left;
}
@media (max-width: 1011px) {
    .container {
    margin-top: 25vh;
    display: grid;
    grid-template-columns: auto;
}
  .item {
    padding: 0px;

  }
}
</style>
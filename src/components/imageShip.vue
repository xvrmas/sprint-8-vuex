<template>
    <div class="col-6">
        <b-img :src="imageShips"></b-img>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
    name: 'imageShip',
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
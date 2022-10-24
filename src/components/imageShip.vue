<template>
    <div >
        <b-img  fluid :src="imageShips"></b-img>
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
.img{
    width: fit-content;
    height: auto;
}

</style>
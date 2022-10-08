<template>
    <div>
        {{infoTechShip}}
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'InfoStarship',
    computed: {
        ...mapState(['infoTechShip'])
    }
}
</script>
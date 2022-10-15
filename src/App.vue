<template>
  <div id="app">
    <BanNav></BanNav>
    <router-view></router-view>
  </div>
</template>
<script>
import BanNav from './views/BanNav.vue';
export default {
  name: "app",
  components: { BanNav }
}
</script>
<style>

</style>

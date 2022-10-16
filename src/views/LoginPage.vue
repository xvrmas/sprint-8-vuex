<template>
    <div class="container d-flex">
        <!-- <div>
            <h4 class="titul col-sm-12 text-white">Entra tus datos para acceder</h4>
        </div>
        <div> -->
            <form class="text-white" name="form" id="form" v-on:submit.prevent="procesar()">
                <p>
                    Nombre: <input type="text" name="nombre" placeholder="Name" class="form-control"
                        v-model="Log.nombre">
                </p>
                <p>
                    Contraseña: <input type="pasword" name="contraseña" placeholder="Pasword" class="form-control"
                        v-model="Log.contrasenya">
                </p>
                <input type="submit" value="enviar" title="enviar" class="btn btn-dark">
            </form>
        </div>
    </div>
</template>
<script>
import InfoStarship from './InfoStarship.vue'
export default {
    components: { InfoStarship },
    name: 'LoginPage',
    data() {
        return {
            Log: {
                nombre: '',
                contrasenya: ''
            }
        }
    }
}
</script>
<style scoped>
.container {
    margin-top: 250px;
    margin-left: 500px;
}


</style>
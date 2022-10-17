<template>
    <div>
        <!-- <div>
            <h4 class="titul col-sm-12 text-white">Entra tus datos para acceder</h4>
        </div> -->
        <!-- <div class="text-white">
            Nombre:
            <b-form-input type="text" v-model="nombre" placeholder="Name">
            </b-form-input>
            Contraseña:
            <b-form-input type="password" v-model="contrasenya" placeholder="Pasword">
            </b-form-input>
            <button @click="procesar()" class="btn btn-dark text-white">Enviar</button>
        </div> -->
    </div>
</template>
<script>
import InfoStarship from './InfoStarship.vue'
export default {
    components: { InfoStarship },
    name: 'LoginPage',
    // data() {
    //     return {
    //         nombre: '',
    //         contrasenya: '',
    //         Usuaris: []
    //     }
    // },

    // methods: {
    //     procesar() {
    //         var RegUser = {
    //             nombre: this.nombre,
    //             contrasenya: this.contrasenya
    //         }
    //         this.Usuaris.push(RegUser),
    //             this.nombre = '',
    //             this.contrasenya = ''
    //         console.log(this.Usuaris)
    //     }
    // }
}
    // methods: {
    //     procesar() {
    //         this.submited = true;
    //         this.$v.$touch();
    //         if (this.$sv.$invalid) {
    //             return false;

    //         }
    //         let config = {
    //             headers: {
    //                 "content-type": "application/json",
    //             },
    //         };
    //         axios
    //             .post(Global.url + 'login', this.contacto, config)
    //             .then((response) => {
    //                 if (response.status == 200) {
    //                     console.log(response)
    //                 }

    //             }
    //             )
    //             .catch(() => {
    //                 this.flasMessage.show({ status: 'error' })
    //                 document.form.reset();

    //             })
    //     },
    // validations: {
    //     contacto: {
    //         pasword: {
    //             minLength: minLength(2)
    //         },
    //         correo: {
    //             minLength: minLength(2)
    //         }
    //     }
    // }
    //     }

// }
</script>
<style scoped>
.container {
    margin-top: 250px;
    margin-left: 40%;
}
</style>
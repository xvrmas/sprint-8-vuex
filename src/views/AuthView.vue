<template>

    <div class="contenidor">
        <b-form class="text-white" @submit.prevent="login">
            <b-input v-model="usuario" class="m-3" type="text" placeholder="Usuario"></b-input>
            <b-input v-model="contrasena" class="m-3" type="password" placeholder="Contraseña"></b-input>
            <b-button class="m-3" type="submit" value="Acceder">Acceder</b-button>
        </b-form>
        <pre class="text-white">{{ $data }}</pre>
    </div>

</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {

    data() {
        return {
            usuario: '',
            contrasena: ''
        }
    },
    methods: {
        login() {

            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.usuario, this.contrasena)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                    alert('logejad!!')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
    }
}
</script>

<style scoped>
.contenidor {
    margin-top: 40vh;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

form>* {
    display: block;
}
</style>
<template>
    <div class="contenidor border p-3 col-sm-6">
        <b-container fluid>
            <b-row class="my-1 mx-5">
                <b-col sm="2">
                    <label class="text-white" for="input-default">E-mail</label>
                </b-col>
                <b-col sm="6">
                    <b-form-input  type="email" size="sm" placeholder="Enter your name"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-1 mx-5">
                <b-col sm="2">
                    <label  class="text-white" for="input-default">Password</label>
                </b-col>
                <b-col sm="6">
                    <b-form-input class="tetx-white" size="sm" type="password" placeholder="Enter your password"></b-form-input>
                </b-col>
            </b-row>        
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'AuthView',
    data() {
        return {
            isLogin: true,
            isLoading: false,
            userData: {
                name: '',
                email: '',
                password: '',
            }
        }
    }
}

</script>
<style scoped>
.contenidor{
    margin-top: 40vh;
    margin-left: 20%;
}
</style>
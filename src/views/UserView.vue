<template>
    <navbar></navbar>
    <div class="m-5 sm:x-auto lg:m-5  ">
        <div class="w-full text-center">
            <h1 class="text-3xl">Usuario</h1>
        </div>
        <div class="sm:w-full lg:w-1/3 mx-auto">
            <input type="text" v-model="usuario.Nombre" class="mt-3 block w-full p-2 border border-black">
            <input type="text" v-model="usuario.Correo" class="mt-3 block w-full p-2 border border-black">
            <input type="password" v-model="usuario.Password" class="mt-3 block w-full p-2 border border-black">
        </div>
    </div>
</template>

<script>
import navbar from "../components/navbar.vue"
export default {
    name: 'ViewUser', 
    components:{
       navbar 
    },
    data() {
        return {
            usuario: {
                "id": 1,
                "Nombre": "Leonel De las Torres Cruz",
                "Correo": "12345678@aguascalientes.tecnm.mx",
                "Password": "12345678"
            }
        }
    }
}
</script>

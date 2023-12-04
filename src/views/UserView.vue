<template>
    <navbar></navbar>
    <div class="m-5 sm:x-auto lg:m-5  ">
        <div class="w-full text-center">
            <h1 class="text-3xl">Informacion del Usuario</h1>
        </div>
        <div class="sm:w-full lg:w-1/3 mx-auto mt-5">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" v-model="usuario.Nombre" class="mt-3 block w-full p-2 border border-black">
            <label for="Correo">Correo</label>
            <input type="text" id="Correo" v-model="usuario.Correo" class="mt-3 block w-full p-2 border border-black">
            <label for="pass"> Password</label>
            <input type="password" id="pass" v-model="usuario.Password" class="mt-3 block w-full p-2 border border-black">
        </div>
    </div>
</template>

<script>
import navbar from "../components/navbar.vue"
export default {
    name: 'ViewUser',
    components: {
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

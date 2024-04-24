<template>
    <navbar></navbar>
    <div class="m-5 sm:x-auto lg:m-5  ">
        <div class="w-full text-center">
            <h1 class="text-3xl">Informacion del Usuario</h1>
        </div>
        <div class="sm:w-full lg:w-1/3 mx-auto mt-5">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" v-model="usuario.name" class="mt-3 block w-full p-2 border border-black">
            <label for="Correo">Correo</label>
            <input type="text" id="Correo" v-model="usuario.email" class="mt-3 block w-full p-2 border border-black">
        </div>
    </div>
</template>

<script>
import navbar from "../components/navbar.vue"
import axios from 'axios';

export default {
    name: 'ViewUser',
    components: {
        navbar
    },
    data() {
        return {
            usuario: {},
            token: localStorage.getItem('token')
        }
    },
    created() {
        axios.get("http://localhost/public/api/User", {
            headers: {
                "Acces-Control-Allow-Origin": "*",
                "Acces-Control-Allow-Methods": "GET",
                'Authorization': `Bearer ${this.token}`
            }
        })
            .then(response => {
                this.usuario = response.data;
                console.log("datos desde la vista usuarios: ", response.data);
            })
            .catch(error => {
                console.log("error al obtener datos", error);
            });
    },
}
</script>

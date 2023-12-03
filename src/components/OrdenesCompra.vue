<template>
    <navbar></navbar>
    <div id="div">
        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Productos comprados por {{ usuarioP.nombre }}
        </h5>
        <br>

        <table class="min-w-full">
            <thead class="bg-gray-200 border-b text-center">
                <th>id</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
            </thead>
            <tbody>
                <tr v-for="producto in usuarioP.productosuser" :key="producto.id" class="bg-white border-b ">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ producto.id }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ producto.nombre }}</td>
                <td class="px-6 py-4 text-gray-900">{{ producto.descripcion }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ producto.precio }}</td>
                </tr>
            </tbody>
        </table>


    </div>
</template>

<script>
import navbar from "../components/navbar.vue"
import usuario from '../../products.json'
export default {
    components: {
        navbar
    },
    data() {
        return {
            usuarioP: usuario.productosusuario
        };
    }
}
</script>
<style>
#div {
    width: 85%;
    position: relative;
    left: 7.5%;
}
</style>
<template>
    <navbar></navbar>

    <br>
    <div id="div">
        <h1 class="mb-2 text-3xl font-medium leading-tight text-neutral-800">
            Carrito de Compras
        </h1>
        <br>

        <table class="min-w-full">
            <thead class="bg-gray-200 border-b text-center">
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Precio</th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="producto in wishlistData" :key="producto.id" class="bg-white border-b ">
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ producto.nombre }}</td>
                    <td class="relative mx-4 -mt-4 h-20 sm:h-100 md:h-100 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                        <img :src="require(`@/assets/product_images/${producto.imagen}`)" alt="Product Image"
                            title="Imagen del producto" class="w-full h-full object-cover object-center max-w-full">
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ producto.precio }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" colspan="2">
                        <button class="bg-teal-700 text-white px-4 py-2 rounded-l rounded-r">Comprar</button>
                        <br>
                        <br>
                        <button class="bg-green-700 text-white px-4 py-2 rounded-l">-</button>
                        <button class="bg-gray-200 text-gray-700 px-4 py-2">1</button>
                        <button class="bg-green-700 text-white px-4 py-2 rounded-r">+</button>

                    </td>
                </tr>
                <br>
                <button class="bg-teal-700 text-white px-4 py-2 rounded-l rounded-r">Comprar carrito</button>
            </tbody>
        </table>

    </div>
</template>

<script>

import navbar from "../components/navbar.vue"
import wishlist from '../../wishlist.json'
export default {
    name: 'CartComponent',
    props: {
        msg: String
    },
    components: {
        navbar
    },
    data() {
        return {
            wishlistData: wishlist.productos,
        }
    }
}
</script>

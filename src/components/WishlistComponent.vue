<template>
    <navbar></navbar>

    <br>
    <div id="div">
        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800">
            Lista de deseos
        </h5>
        <br>

        <table class="min-w-full">
            <thead class="bg-gray-200 border-b text-center">
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Precio</th>
            </thead>
            <tbody>
                <tr v-for="producto in wishlistData" :key="producto.id" class="bg-white border-b ">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ producto.nombre }}</td>
                    <td class="px-6 py-4 text-gray-900">
                        <img :src="require(`@/assets/product_images/${producto.imagen}`)" alt="Product Image"
                            title="Imagen del producto" class="w-full h-full object-cover object-center">
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ producto.precio }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>

import navbar from "../components/navbar.vue"
import wishlist from '../../wishlist.json'
export default {
    name: 'WishlistComponent',
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
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
                <tr v-for="producto in cartData" :key="producto.id" class="bg-white border-b ">
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ producto.nombre }}</td>
                    <td
                        class="relative mx-4 -mt-4 h-20 sm:h-100 md:h-100 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
                        <img :src="require(`@/assets/product_images/${producto.imagen}`)" alt="Product Image"
                            title="Imagen del producto" class="w-full h-full object-cover object-center max-w-full">
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ producto.precio }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" colspan="2">
                        <button class="bg-teal-700 text-white px-4 py-2 rounded-l rounded-r">Comprar</button>
                        <br>
                        <br>
                        <button @click="decrement(producto)" class="bg-green-700 text-white px-4 py-2 rounded-l">-</button>
                        <button class="bg-gray-200 text-gray-700 px-4 py-2">{{ producto.cantidad }}</button>
                        <button @click="increment(producto)" class="bg-green-700 text-white px-4 py-2 rounded-r">+</button>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"> Total: </td>
                    <td>$ {{ total }}</td>
                    <td>
                        <button class="bg-teal-700 text-white px-4 py-2 rounded-l rounded-r" @click="goToPayPal">Comprar carrito</button>
                    </td>

                </tr>

            </tbody>
        </table>

    </div>
</template>

<script>
import navbar from "../components/navbar.vue"
import cart from '../../cart.json'
export default {
    name: 'CartComponent',
    props: {
        msg: String
    },
    components: {
        navbar
    },
    methods: {
        increment(producto) {
            producto.cantidad++;
        },
        decrement(producto) {
            if (producto.cantidad > 0) {
                producto.cantidad--;
            }
        },
        goToPayPal() {
            this.$router.push({ name: 'paypal', query: { total: this.total } });
            console.log(this.total);
        }
    },
    computed: {
        total() {
            return this.cartData.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
        }
    },

    data() {
        return {
            cartData: cart.productos.map(producto => ({ ...producto, cantidad: 1 })),
        }

    }
}
</script>

<style scoped>
#button2 {
      display: none;
    }

</style>
<template>
    <div>
        <navbar></navbar>

        <br>
        <div id="div">
            <h1 class="mb-2 text-3xl font-medium leading-tight text-neutral-800">
                Carrito de Compras
            </h1>
            <br>

            <table class="min-w-full">
                <thead class="bg-gray-200 border-b text-center">
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="pRow in cartProducts" :key="pRow.cart_id" class="bg-white border-b ">
                        <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ pRow.product.Name }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{
                            pRow.product.Description }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ pRow.product.Price
                            }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <img :src="'http://localhost/storage/app/public/' + pRow.product.Image" alt="Product Image"
                                title="Imagen del producto" class="w-24 h-24 object-cover object-center">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <button @click="removeFromCart(pRow.cart_id)"
                                class="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="mt-4 flex justify-between">
                <p class="text-xl font-semibold">Total: ${{ cartTotal }}</p>
                <div>
                    <button @click="goToPayPal"
                        class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">Comprar
                        Todo</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import axios from 'axios';

export default {
    data() {
        return {
            token: localStorage.getItem('token'),
            userData: null,
            cartProducts: [],
            cartTotal: 0
        };
    },
    mounted() {
        this.getUserData();
    },
    components: {
        navbar,
    },
    methods: {
        getUserData() {
            axios.get("http://localhost/public/api/User", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET",
                    'Authorization': `Bearer ${this.token}`
                }
            })
                .then(response => {
                    this.userData = response.data;
                    this.getCartProducts();
                })
                .catch(error => {
                    console.error("Error al obtener datos del usuario:", error);
                });
        },
        getCartProducts() {
            axios.get(`http://localhost/public/api/Cart/${this.userData.id}/products`)
                .then(response => {
                    this.cartProducts = response.data;
                    this.calculateCartTotal();
                })
                .catch(error => {
                    console.error("Error al obtener productos del carrito:", error);
                });
        },
        calculateCartTotal() {
            this.cartTotal = this.cartProducts.reduce((total, pRow) => total + parseFloat(pRow.product.Price), 0);
        },
        removeFromCart(cartId) {
            axios.delete(`http://localhost/public/api/Cart/${cartId}/delete`)
                .then(() => {
                    this.getCartProducts();
                })
                .catch(error => {
                    console.error("Error al eliminar producto del carrito:", error);
                });
        },
        goToPayPal() {
            // Obtener solo los cart_id de los productos en el carrito

            // Redireccionar a la página de PayPal y pasar el cartTotal y los cart_id como parámetros de consulta
            this.$router.push({
                name: 'paypal',
                query: {
                    total: this.cartTotal,
                }
            });
        }
    }
};
</script>

<style scoped>
#button2 {
    display: none;
}
</style>
<template>
    <navbar></navbar>

        <div class="container flex m-5">

                    
                <div class="w-1/2 ml-20">
                    <img :src="producto && producto.imagen ? require(`@/assets/product_images/${producto.imagen}`) : ''"
                        alt="Product Image" title="Imagen del producto" class="w-full h-auto object-cover object-center">
                </div>
            

            <div class="w-1/2 mr-10 font-medium">
                <h1 class="text-4xl ml-5">{{ producto && producto.nombre ? producto.nombre : '' }}</h1>
                <p class="text-1xl ml-5 mt-6 ">$ {{ producto && producto.precio ? producto.precio : '' }} MXN</p>
                <p class="text-1xl ml-5 mt-6 ">{{ producto && producto.stock ? producto.stock : '' }}</p>

                <button class="my-5 mx-10 border-solid border-2 border-black w-80 h-10">Agregar al carrito</button>
                    <button class="mx-10 border-solid w-80 h-10">
                        <PayPalButton class=""></PayPalButton>
                    </button>

                <p class="mx-10 mt-15 font-medium text-justify">{{ producto && producto.descripcion ? producto.descripcion :
                    '' }}</p>
            </div>
            </div>

            <div>
                <StaticRatings></StaticRatings>
            </div>

        <div>
            <div class="text-center my-5">
                <h1 class="text-xl ml-5 text-center">¿Quieres recibir ofertas?</h1>
                <input class="w-50 border-solid border-2 border-gray-500 w-80 h-10" type="text"
                    placeholder="Correo electrónico">
            </div>
        </div>
</template>
  
<script>
import PayPalButton from './PayPalButton.vue';
import StaticRatings from './StaticRatings.vue';
import navbar from "./navbar.vue";
import products from '../../products.json';

export default {
    name: 'ProductoUNO',
    data() {
        return {
            producto: {}
        };
    },
    components: {
        PayPalButton,
        StaticRatings,
        navbar
    },
    created() {
        // Lógica para cargar los detalles del producto usando this.$route.params.id
        const productId = Number(this.$route.params.id); // Convertir a número
        console.log('productId:', productId);

        // Verifica si productId está definido y si el producto existe en el archivo JSON
        if (!isNaN(productId) && products.productos) {
            this.producto = products.productos.find(producto => producto.id === productId);
            console.log('Producto encontrado:', this.producto);
        }

        // Agrega una verificación adicional para asegurarte de que producto.nombre esté definido
        if (!this.producto || !this.producto.nombre) {
            console.error('Producto no encontrado o nombre no definido:', this.producto);
            // Puedes redirigir al usuario a una página de error o hacer algo más aquí
        }
    }
};
</script>

    
    
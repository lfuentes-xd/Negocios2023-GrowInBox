<template>
    <div class="container m-12">
        <h1 class="text-4xl">Productos</h1>

        <div v-for="(producto, index) in productos">
            <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-10">
            <div
                class="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">

            </div>
            <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {{ producto.nombre }}
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {{ producto.descripcion }}
                </p>
            </div>
            <div class="p-6 pt-0">
                <button
                    class="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40"
                    type="button">
                    Ver producto
                </button>
            </div>
        </div>
        </div>

    </div>
</template>
    
<script>

import productosData from '../../products.json';

export default {
    name: 'CatalogoProductos',
    props: {
        msg: String
    },
    data() {
        return {
            productos: productosData.productos
        };
    }
};
</script>
    
<style scoped></style>
    
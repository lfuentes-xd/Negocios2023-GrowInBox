<template>
    <navbar2></navbar2>
    <h1 class="mt-10 ml-20 my-3 text-2xl">Productos administración</h1>

    <button @click="isOpen = true"
        class="ml-20 middle none center rounded-lg bg-blue-500 hover:bg-blue-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white">
        Agregar.
    </button>

    <div class="flex flex-col my-5 mx-20">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="">
                            <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    id
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    Producto
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    Precio
                                </th>
                                
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    Descripcion
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr class="bg-white border-b" v-for="(Products, index) in Products" :key="index">
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {{ Products.id }}
                                </td>
                                <td class="text-sm text-gray-900  px-6 py-4 ">
                                    {{ Products.nombre }}
                                </td>
                                <td class="text-sm text-gray-900 px-6 py-4">
                                    {{ Products.precio }}
                                </td>
                                <td class="text-sm text-gray-900 px-6 py-4 ">
                                    {{ Products.descripcion }}
                                </td>
                                <td class="text-sm text-gray-900  px-6 py-4 ">
                                    <button
                                        class="middle none center rounded-lg bg-yellow-500 hover:bg-yellow-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white "
                                        @click="EditProduct(Products)">
                                        Modificar.
                                    </button>

                                    <button
                                        class="mx-2 middle none center rounded-lg bg-red-500 hover:bg-red-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white"
                                        @click="DeleteProduct(Products.id)">
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- V E N T A N A      M O D A L -->

    <div v-show="isOpen" class="fixed inset-0 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
        <div class="relative mx-6 my-8 bg-white rounded-lg shadow-lg lg:w-1/3 md:w-full">
            <div class="flex items-center p-6">
                <h3 class="text-2xl font-semibold text-gray-800">Agregar producto</h3>
            </div>
            <div class="px-6 py-4 text-lg text-gray-600">
                <label for="Producto">Producto</label>
                <input v-model="product" id="Producto" type="text" class="mt-3 block w-full p-2 border border-gray-500">
                <label for="precio">Precio</label>
                <input v-model="price" id="precio" type="number" class="mt-3 block w-full p-2 border border-gray-500">
                <label for="Descripcion">Descripcion</label>
                <input v-model="Desc" id="Descripcion" type="text" class="mt-3 block w-full p-2 border border-gray-500">
            </div>
            <div class="flex justify-end px-6 py-4 space-x-3">
                <button @click="cancelar()"
                    class="px-6 py-2 text-black border border-gray-300 rounded hover:bg-gray-500">Cancelar</button>
                <button v-if="isEditing" @click="UpdateProduct()"
                    class="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Actualizar</button>
                <button v-else @click="Addproduct()"
                    class="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Guardar</button>
            </div>

        </div>
    </div>
</template>

<script>

import Products from '../../products.json'
import navbar2 from "../../src/components/navbar2.vue"
export default {
    name: "Products_add",
    components: {
        navbar2
    },
    data() {
        return {
            Products: Products.productos,
            isOpen: false,
            price: "",
            product: "",
            isEditing: false,
            Desc: ""
        };
    },

    methods: {
        openModal() {
            this.isOpen = true;
        },
        Addproduct() {

            if (this.product != '' && this.price != ''  && this.Desc != '') {

                const nuevoProducto = {
                    id: this.Products[this.Products.length - 1].id + 1,
                    nombre: this.product,
                    precio: this.price, 
                    descripcion: this.Desc

                };

                this.Products.push(nuevoProducto);
                this.limpiar()
            } else {
                alert('Los campos no pueden ir vacios')
            }
            this.isOpen = false;
        },
        DeleteProduct(id) {

            // Buscar en el arreglo
            const index = this.Products.findIndex(Products => Products.id === id);

            // Si se encontró el producto, mostrar un mensaje
            if (index !== -1) {
                const confirmacion = window.confirm("¿Seguro deseas eliminar este producto?");

                if (confirmacion) {
                    // Si el usuario confirma, eliminar el producto del arreglo 
                    this.Products.splice(index, 1);
                }
            }
        },

        EditProduct(product) {
            this.product = product.nombre;
            this.price = product.precio;
            this.Desc = product.descripcion;
            this.currentProductId = product.id; // Guarda el ID del producto que se está editando
            this.isOpen = true;
            this.isEditing = true;
        },
        UpdateProduct() {
            let productToUpdate = this.Products.find(product => product.id === this.currentProductId);
            if (productToUpdate) {
                productToUpdate.nombre = this.product;
                productToUpdate.precio = this.price;
                productToUpdate.descripcion = this.Desc;
            }
            this.isOpen = false;
            this.isEditing = false;
            this.limpiar()
        },
        cancelar() {
            this.isOpen = false;
            this.limpiar();
        },
        limpiar() {
            this.product = " ";
            this.price = " ";
            this.Desc = "";
        }
    },
};
</script>
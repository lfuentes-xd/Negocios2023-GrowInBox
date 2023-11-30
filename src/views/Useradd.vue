<template>
    <h1 class="ml-10 my-3 text-2xl">Productos administración</h1>

    <button @click="isOpen = true"
        class="ml-10 middle none center rounded-lg bg-blue-500 hover:bg-blue-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white">
        Agregar.
    </button>

    <div class="flex flex-col my-5 mx-10">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="bg-gray-200 border-b text-center">
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
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr class="bg-white border-b ">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">

                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <button
                                        class="middle none center rounded-lg bg-yellow-500 hover:bg-yellow-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white ">
                                        Modificar.
                                    </button>
                                    <button
                                        class="mx-2 middle none center rounded-lg bg-red-500 hover:bg-red-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white">
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
                <h3 class="text-2xl font-semibold text-gray-800">Agregar usuario</h3>
            </div>
            <div class="px-6 py-4 text-lg text-gray-600">
                <label for="Producto">Producto</label>
                <input id="Producto" type="text" class="mt-3 block w-full p-2 border border-gray-500">
                <label for="precio">Precio</label>
                <input id="precio" type="text" class="mt-3 block w-full p-2 border border-gray-500">
            </div>
            <div class="flex justify-end px-6 py-4 space-x-3">
                <button @click="isOpen = false"
                    class="px-6 py-2 text-gray-500 border border-gray-300 rounded hover:text-gray-700">Cancelar</button>
                <button class="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Guardar</button>
            </div>
        </div>
    </div>
</template>

<script>
// import Modal from "../components/modal.vue"
export default {
    name: "Users_add",
    components: {
        // Modal,
    },
    data() {
        return {
            isOpen: false,
        };
    },

    methods: {
        openModal() {
            this.isOpen = true;
        },
    },
};
</script>
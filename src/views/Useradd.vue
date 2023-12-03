<template>
    <navBbar2></navBbar2>
    <h1 class="ml-20 my-3 text-2xl">Productos administración</h1>

    <button @click="isOpen = true"
        class="ml-20 middle none center rounded-lg bg-blue-500 hover:bg-blue-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white">
        Agregar.
    </button>

    <div class="flex flex-col my-5 mx-20">
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
                                    Nombre
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    Correo
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr class="bg-white border-b " v-for="(Usuarios, index) in Usuarios" :key="index">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {{ Usuarios.id }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ Usuarios.Nombre }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ Usuarios.Correo }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <button @click="EditUser(Usuarios)"
                                        class="middle none center rounded-lg bg-yellow-500 hover:bg-yellow-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white ">
                                        Modificar.
                                    </button>
                                    <button @click="DeleteUser(Usuarios.id)"
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
                <h3 class="text-2xl font-semibold text-gray-800">Agregar producto</h3>
            </div>
            <div class="px-6 py-4 text-lg text-gray-600">
                <label for="Nombre">Nombre</label>
                <input v-model="Nombre" id="Nombre" type="text" class="mt-3 block w-full p-2 border border-gray-500">
                <label for="Correo">Correo</label>
                <input v-model="Correo" id="Correo" type="email" class="mt-3 block w-full p-2 border border-gray-500">
            </div>
            <div class="flex justify-end px-6 py-4 space-x-3">
                <button @click="cancelar()"
                    class="px-6 py-2 text-black border border-gray-300 rounded hover:bg-gray-500">Cancelar</button>
                <button v-if="isEditing" @click="UpdateUser()"
                    class="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Actualizar</button>
                <button v-else @click="addUser()"
                    class="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Guardar</button>
            </div>

        </div>
    </div>
</template>

<script>
// import Modal from "../components/modal.vue"
import Usuarios from "../../users.json"
import navBbar2 from "../../src/components/navbar2.vue"
export default {
    name: "Users_add",
    components: {
        navBbar2,
    },
    data() {
        return {
            isOpen: false,
            Usuarios: Usuarios.Usuarios,
            Nombre: "",
            Correo: "",
            isEditing: false,
        };
    },

    methods: {
        openModal() {
            this.isOpen = true;
        },
        addUser() {
            if (this.Nombre != '' && this.Correo != '') {
                const nuevoUsuario = {
                    id: this.Usuarios[this.Usuarios.length - 1].id + 1,
                    Nombre: this.Nombre,
                    Correo: this.Correo
                };
                this.Usuarios.push(nuevoUsuario);
                this.limpiar()
            } else {
                alert('Los campos no pueden ir vacios')
            }
            this.isOpen = false;
        },

        DeleteUser(id) {

            // Buscar en el arreglo
            const index = this.Usuarios.findIndex(Usuarios => Usuarios.id === id);

            // Si se encontró el producto, mostrar un mensaje
            if (index !== -1) {
                const confirmacion = window.confirm("¿Seguro deseas eliminar este producto?");

                if (confirmacion) {
                    // Si el usuario confirma, eliminar el producto del arreglo 
                    this.Usuarios.splice(index, 1);
                }
            }
        },

        EditUser(Usuario) {
            this.Nombre = Usuario.Nombre;
            this.Correo = Usuario.Correo;
            this.currentProductId = Usuario.id; // Guarda el ID del producto que se está editando
            this.isOpen = true;
            this.isEditing = true;
        },

        UpdateUser() {
            let UsuariosToUpdate = this.Usuarios.find(Usuario => Usuario.id === this.currentProductId);
            if (UsuariosToUpdate) {
                UsuariosToUpdate.Nombre = this.Nombre;
                UsuariosToUpdate.Correo = this.Correo;
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
            this.Nombre = " ";
            this.Correo = " ";
        }
    },
};
</script>
<template>
    <navbar2></navbar2>
    <h1 class="mt-10 ml-20 my-3 text-2xl">Productos administración</h1>

    <button @click="isOpen = true"
        class="ml-20 middle none center rounded-lg bg-blue-500 hover:bg-red-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white">
        Agregar.
    </button>

    <div class="flex flex-col my-5 mx-20">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full border-blue-500 border-collapse border">
                        <thead class="">
                            <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    ID
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    Nombre del Producto
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    Imagen del Producto
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    Precio
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    Descripcion
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    Categoria
                                </th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr class="bg-white" v-for="(product, index) in products" :key="index">
                                <td class="text-center px-6 py-4 text-sm text-gray-900">
                                    {{ product.id }}
                                </td>
                                <td class="text-center text-sm text-gray-900 px-6 py-4">
                                    {{ product.Name }}
                                </td>
                                <td class="text-center text-sm text-gray-900 px-6 py-4">
                                    {{ product.Image }}
                                </td>
                                <td class="text-center text-sm text-gray-900 px-6 py-4">
                                    {{ product.Price }}
                                </td>
                                <td class="text-sm text-gray-900 px-6 py-4">
                                    {{ product.Description }}
                                </td>
                                <td class="text-center text-sm text-gray-900 px-6 py-4">
                                    {{ getCategoryName(product.IdcategoriesFK) }}
                                </td>
                                <td class="text-sm text-gray-900  px-6 py-4 ">
                                    <div class="flex justify-center items-center">
                                        <button
                                            class="middle none center rounded-lg bg-yellow-500 hover:bg-yellow-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white "
                                            @click="EditProduct(product)">
                                            Modificar
                                        </button>
                                        <button
                                            class="mx-2 middle none center rounded-lg bg-red-500 hover:bg-red-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white"
                                            @click="DeleteProduct(product.id)">
                                            Eliminar
                                        </button>
                                    </div>
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

                <label for="Producto">Nombre del Producto</label>
                <input v-model="product" id="Producto" type="text" class="mt-3 block w-full p-2 border border-gray-500">
                <label for="Imagen">Imagen</label>
                <input id="Imagen" type="file" class="mt-3 block w-full p-2 border border-gray-500"
                    @change="onFileChange">
                    <label for="Precio">Precio</label>
                <input v-model="price" id="Precio" type="number" class="mt-3 block w-full p-2 border border-gray-500">
                <input v-model="description" id="Descripcion" type="text"
                    class="mt-3 block w-full p-2 border border-gray-500">
                <label for="Categoria">Categoría</label>
                <select v-model="category" id="categoria" class="mt-3 block w-full p-2 border border-gray-500">
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.Name }}
                    </option>
                </select>
            </div>
            <div class="flex justify-end px-6 py-4 space-x-3">
                <button @click="Cancelar()"
                    class="px-6 py-2 text-black border border-gray-300 rounded hover:bg-gray-500">Cancelar</button>
                <button v-if="isEditing" @click="UpdateProduct()"
                    class="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Actualizar</button>
                <button v-else @click="AddProduct()"
                    class="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Guardar</button>
            </div>

        </div>
    </div>
</template>

<script>


import axios from 'axios';
import navbar2 from "../../src/components/navbar2.vue"
export default {
    name: "Products_add",
    components: {
        navbar2
    },
    data() {
        return {
            products: [],
            categories: [],
            image: null,
            isOpen: false,
            isEditing: false,
        };
    },
    mounted() {
        // Obtener los productos
        axios.get('http://localhost/public/api/indexProducts')
            .then(response => {
                this.products = response.data;
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
            });

        // Obtener las categorías
        axios.get('http://localhost/public/api/indexCategory')
            .then(response => {
                this.categories = response.data;
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error al obtener las categorías:', error);
            });
    },
    methods: {
        getCategoryName(categoryId) {
            const category = this.categories.find(cat => cat.id === categoryId);
            return category ? category.Name : 'Sin categoría';
        },
        openModal() {
            this.isOpen = true;
        },
        // Método para manejar el cambio en la selección de la imagen
        onFileChange(e) {
            const file = e.target.files[0]; // Obtener el archivo seleccionado
            this.image = file; // Guardar el archivo en una variable de datos (por ejemplo, 'image')
            const fileName = file.name;
            console.log("Nombre de la imagen:", fileName);
        },
        // Método para enviar los datos del producto al API para guardarlos
        AddProduct() {
            // Verificar si los campos no están vacíos
            if (this.product && this.price && this.description && this.image && this.category) {
                // Crear un objeto FormData para enviar los datos del producto, incluida la imagen
                const formData = new FormData();
                formData.append('Name', this.product);
                formData.append('Description', this.description);
                formData.append('Price', this.price);
                formData.append('Image', this.image); // Aquí sigue enviando el archivo completo
                formData.append('IdcategoriesFK', this.category); // Id de la categoría (puedes cambiarlo según tus necesidades)

                // Realizar la solicitud POST para guardar el producto
                axios.post('http://localhost/public/api/storeProducts', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data' // Especificar el tipo de contenido como 'multipart/form-data' para enviar archivos
                    }
                })
                    .then(response => {
                        // Manejar la respuesta
                        console.log(response.data);
                        // Cerrar la ventana modal y limpiar los campos del formulario
                        this.limpiar();
                        this.isOpen = false;
                        // Recargar los productos después de agregar uno nuevo
                        this.loadProducts();
                    })
                    .catch(error => {
                        console.error('Error al agregar el producto:', error);
                        alert('Ha ocurrido un error al agregar el producto. Por favor, inténtalo de nuevo.');
                    });
            } else {
                alert('Los campos no pueden ir vacíos');
            }
        },
        loadProducts() {
            axios.get('http://localhost/public/api/indexProducts')
                .then(response => {
                    this.products = response.data;
                    console.log(response.data)
                })
                .catch(error => {
                    console.error('Error al obtener los productos:', error);
                });
        },
        DeleteProduct(id) {
            // Comprobar si Products está definido
            if (!this.products) {
                console.log('Products es undefined!');
                return;
            }

            // Buscar en el arreglo
            const index = this.products.findIndex(product => product.id === id);

            // Si se encontró el producto, mostrar mensaje
            if (index !== -1) {
                const confirmacion = window.confirm("¿Seguro deseas eliminar este producto?");

                if (confirmacion) {
                    // Si el usuario confirma, eliminar el producto del arreglo 
                    this.products.splice(index, 1);

                    // Luego, hacer una petición DELETE a la API
                    axios.delete('http://localhost/public/api/Product/${id}')
                        .then(response => {
                            console.log(response);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            }
        }

        ,
        EditProduct(product) {
            this.product = product.nombre;
            this.price = product.precio;
            this.Desc = product.descripcion;
            this.currentProductId = product.id; // Guarda el ID del producto que se está editando
            this.isOpen = true;
            this.isEditing = true;
        },


        UpdateProduct() {
            // Comprueba si los valores son null o están vacíos
            if (!this.product || !this.price || !this.description) {
                console.log('Los campos del producto no pueden estar vacíos');
                return;
            }

            let productToUpdate = this.products.find(product => product.id === this.currentProductId);
            if (productToUpdate) {
                productToUpdate.Name = this.product;
                productToUpdate.Price = this.price;
                productToUpdate.Description = this.desccription;

                // Crear un objeto con los datos del producto
                const productData = {
                    Name: this.product,
                    Price: this.price,
                    Description: this.description
                };

                // Luego, hacer una petición PUT a la API para actualizar el producto
                axios.put(`http://localhost/public/api/UpdateProduct/${this.currentProductId}/update`, productData)
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
            this.isOpen = false;
            this.isEditing = false;
            this.limpiar()
        },




        Cancelar() {
            this.limpiar();
            this.isOpen = false;
        },
        limpiar() {
            this.product = "";
            this.price = "";
            this.description = "";
            this.image = null; // Limpiar la imagen seleccionada
            this.category = "";
        }

        ,
    },
};
</script>
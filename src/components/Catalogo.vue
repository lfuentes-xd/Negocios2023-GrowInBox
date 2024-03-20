<template>
  <navbar></navbar>

  <h1 class="text-4xl ml-10 mb-10">Catalogo de Invierno</h1>

  <div class="ml-20 mr-20 flex items-center justify-between">

    <form class="flex items-center space-x-2">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

      <div class="relative">

        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>

        <input type="search" id="default-search"
          class="w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="buscar" placeholder="Busca Productos...                                                  " required>

      </div>

    </form>

    <div>
      <select name="opciones" id="opciones" v-model="filtro"
        style="border-color: black ;border: 2px; border-style: solid;">
        <option value="" selected>Ordenar</option>
        <option value="AZ">A-Z</option>
        <option value="ZA">Z-A</option>
        <option value="mayor">Precio mayor a menor</option>
        <option value="menor">Precio menor a mayor </option>
      </select>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    <div v-for="(producto, index) in products" :key="index" class="grid">
      <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-10">

        <!-- <div
          class="relative mx-4 -mt-6 h-60 sm:h-72 md:h-80 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img :src="require({producto.Image})" alt="Product Image"
            title="Imagen del producto" class="w-full h-full object-cover object-center">
        </div> -->

        <div class="p-6 realtive">

          <h2
            class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {{ producto.Name }}
          </h2>
          <h1
            class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            ${{ producto.Price }}
          </h1>
          <div class="max-lines-2 overflow-ellipsis overflow-hidden">
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {{ producto.Description }}
            </p>
          </div>

          <br>
          <br>

          <div class="p-6 pt-0 absolute bottom-0">
            <router-link :to="{ name: 'Producto', params: { id: producto.id } }"
              class="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40"
              title="Producto">
              Ver producto
            </router-link>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
// import productosData from '../../products.json'
import navbar from "../components/navbar.vue"
import axios from 'axios';


export default {
  name: 'CatalogoProductos',
  components: {
    navbar
  },
  data() {
    return {
      products: [],
      buscar: '',
      filtro: ''
    };
  },

  mounted() {
    axios.get('http://localhost/public/api/indexProducts')
      .then(response => {
        this.products = response.data;
        console.log(response.data)
        console.log("que tine:: "+this.products)
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  },
  computed: {
    productosFiltrados() {
      let productosFiltrados = this.productos;
      console.log("aqui", this.filtro);


      if (this.buscar) {
        productosFiltrados = productosFiltrados.filter(producto =>
          producto.nombre.toLowerCase().includes(this.buscar.toLowerCase())
        );
      }

      if (this.filtro === 'AZ') {
        productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
      }
      if (this.filtro === 'ZA') {
        productosFiltrados.sort((a, b) => b.nombre.localeCompare(a.nombre));

      }
      if (this.filtro === 'mayor') {
        productosFiltrados.sort((a, b) => b.precio - a.precio);
      }
      if (this.filtro === 'menor') {
        productosFiltrados.sort((a, b) => a.precio - b.precio);
      }
      if (!this.filtro) { // Si es "Ordenar", no aplicar filtro
        console.log("Productos ordenar:", productosFiltrados);
        return productosFiltrados;
      }
      console.log("Productos filtrados después del filtro:", productosFiltrados);

      return productosFiltrados;
    }

  }
};
</script>

<style scoped>
/* Estilo del grid */
.grid {
  display: grid;
}

.max-lines-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 10rem;

}
</style>
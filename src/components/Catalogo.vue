<template>
    <div class="container m-12">
      <h1 class="text-4xl">Productos</h1>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="(producto, index) in productos" :key="index" class="card-container">
          <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-10">
            <div
              class="relative mx-4 -mt-6 h-80 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img :src="require(`@/assets/product_images/${producto.imagen}`)" alt="Product Image" title="Imagen del producto">
            </div>
            <div class="p-6">
              <h2 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {{ producto.nombre }}
              </h2>
              <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {{ producto.descripcion }}
              </p>
            </div>
            <div class="p-6 pt-0">
              <Router-link to="/Producto" class="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40"> Ver producto</Router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import productosData from '../../products.json';
  
  export default {
    name: 'CatalogoProductos',
    data() {
      return {
        productos: productosData.productos
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilo del grid */
  .grid {
    display: grid;
  }
  
  /* Contenedor de las Cards */
  .card-container {
    flex: 1;
    min-height: 300px; /* Tamaño mínimo de cada card? */
  }
  </style>
  
  
    
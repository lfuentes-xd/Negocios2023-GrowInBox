este código es de OrdenesCompra:

<template>
    <div>
      <navbar></navbar>
      <div class="container mx-auto p-4">
        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Productos comprados por {{ usuarioP.nombre }}
        </h5>
        <br>
  
        <div class="overflow-x-auto">
          <table class="min-w-full table-auto">
            <thead class="bg-gray-200 border-b text-center">
              <th class="w-1/4">ID</th>
              <th class="w-1/4">Nombre</th>
              <th class="w-1/4">Descripción</th>
              <th class="w-1/4">Precio</th>
            </thead>
            <tbody>
              <tr v-for="producto in usuarioP.productosuser" :key="producto.id" class="bg-white border-b">
                <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 max-w-xs">{{ producto.id }}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 max-w-xs">{{ producto.nombre }}</td>
                <td class="px-4 py-2 whitespace-normal text-gray-900 max-w-xs">{{ producto.descripcion }}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 max-w-xs">{{ producto.precio }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>

<script>
import navbar from "../components/navbar.vue"
import usuario from '../../products.json'
export default {
    components: {
        navbar
    },
    data() {
        return {
            usuarioP: usuario.productosusuario
        };
    }
}
</script>
<style>
#div {
    width: 85%;
    position: relative;
    left: 7.5%;
}
</style>
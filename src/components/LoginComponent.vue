<template>
  <div>
    <navbar></navbar>

    <div class="mt-20 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      <div class="px-6 py-4">
        <div class="flex justify-center mx-auto">
          <img src="../assets/logo.png" class="h-20" alt="imagen del logo" title="Grow in box logo">
        </div>

        <h3 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-0">
          BIENVENIDOS
        </h3>

        <p class="mt-1 text-center">
          Iniciar Sesión o
          <router-link to="/signup" class="text-blue-500 hover:underline">Crear cuenta</router-link>
        </p>

        <form @submit.prevent="signIn">
          <div class="w-full mt-4">
            <input
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email" placeholder="Correo electronico" aria-label="Email Address" />
          </div>

          <div class="w-full mt-4">
            <input
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password" placeholder="Contraseña" aria-label="Password" />
          </div>


          <div class="flex justify-between mt-4">

            <router-link to="/Productadd">
              <button router-link to="/Productadd" type="submit" @click="signIn"
                class="px-6 py-2 text-sm font-medium mr-5 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Solo Personal Autorizado
              </button>
            </router-link>

            <router-link to="/User">
              <button router-link to="/User" type="submit" @click="signIn"
                class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Iniciar Sesión
              </button>
            </router-link>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue"
export default {
  name: "LoginComponent",
  components: {
    navbar
  },
  methods: {
    signIn() {
      alert("sesion iniciada");

      // Redirige a la página principal (HomeView.vue)
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
/* Puedes agregar estilos específicos del componente aquí */
</style>

<template>
  <section class="bg-white">
    <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
      <form class="w-full max-w-md">
        <div class="flex justify-center mx-auto">
          <img src="../assets/logo.png" class="h-20" alt="imagen del logo" title="Grow in box logo">
        </div>

        <div class="flex items-center justify-center mt-6">
          <router-link to="/login" class="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b ">
            Iniciar Sesion
          </router-link>

          <span class="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 ">
            Crear cuentaa
          </span>
        </div>

        <!-- Username Input -->
        <div class="relative flex items-center mt-8">
          <span class="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />

            </svg>
          </span>
          <input type="text"
            class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Nombre de usuario" v-model="formData.username"/>
        </div>

        <!-- Email Address Input -->
        <div class="relative flex items-center mt-6">
          <span class="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <input type="email"
            class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Correo electronico" v-model="formData.email"/>
        </div>

        <!-- Password Input -->
        <div class="relative flex items-center mt-4">
          <span class="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </span>
          <input type="password"
            class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Contraseña" v-model="formData.password"/>
        </div>

        <!-- Confirm Password Input -->
        <div class="relative flex items-center mt-4">
          <span class="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </span>
          <input type="password"
            class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Confirmar contraseña" v-model="formData.confirmPassword"/>
        </div>

        <!-- Sign Up Button -->
        <div class="mt-6">
          <button @click="crearCuenta"
            class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            Crear cuenta
          </button>

          <!-- Success Message -->
          <div v-if="cuentaCreada" class="mt-4 text-green-600">
            ¡La cuenta se ha creado con éxito!
          </div>

          <!-- Already have an account link -->
          <div class="mt-6 text-center">
            <router-link to="/login" class="text-sm text-blue-500 hover:underline dark:text-blue-400">
              ¿Ya tienes cuenta?
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
  
<script>
import axios from 'axios';
export default {
  name: "SignUp",
  data() {
    return {
      cuentaCreada: false,
      formData: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  methods: {
    crearCuenta() {

      // axios.post('http://localhost/BackEnd-NegII/public/api/UserRegister', this.formData) // lemuel 
      // axios.post('http://localhost/public/api/UserRegister', this.formData) // torres
      axios.post('http://localhost/public/api/UserRegister', this.formData)
        .then(() => {
          console.log('registered');
          
          
          this.$router.push("/Login"); // Ajusta la ruta según tu configuración
        })
        .catch(error => {
          console.error( error);
          if (error.response && error.response.status === 422) {
          // Error de validación del lado del servidor (código 422)
          const errorMessage = error.response.data.message;
          if (errorMessage.includes('confirm password field must match password')) {
            // Si el error es debido a que las contraseñas no coinciden
            alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
          } else {
            // Otro tipo de error de validación
            alert('Ha ocurrido un error de validación. Por favor, revise los datos e inténtelo de nuevo.');
          }
        } else if (error.response && error.response.status === 500) {
          // Error interno del servidor
          const errorMessage = error.response.data.message;
          if (errorMessage.includes('Integrity constraint violation')) {
            // Si el error es debido a una violación de restricción de integridad,
            // es probable que sea porque el correo ya está registrado
            alert('El correo electrónico ya está registrado. Por favor, utilice otro correo.');
          } else {
            // Otro tipo de error interno del servidor
            alert('Ha ocurrido un error interno del servidor. Por favor, inténtelo de nuevo más tarde.');
          }
        } else {
          // Otro tipo de error (por ejemplo, error de red)
          alert('Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.');
        }
        });
    },
  },
  created(){

  },
};
</script>
  
<style scoped>
/* Puedes agregar estilos específicos del componente aquí */
</style>
  
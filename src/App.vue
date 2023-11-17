<template>
  <nav className="bg-White mt-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="flex items-center justify-between h-16">
        <img src="./assets/logo.png" class="h-20" alt="imagen del logo" title="Grow in box logo">
        <div className="flex items-baseline space-x-4">
          <router-link to="/" 
          class="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" title="home">Inicio</router-link>
          <router-link to="/Catalogo"
            className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" title="catalogo">Cátalogo</router-link>
          <router-link to=""
            className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" title="contacto">Contacto</router-link>
        </div>

        <div class="flex space-x-4"> 

          <router-link to="login" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" title="Buscar">
            <img class="w-6 h-6" src="../src/assets/Search.png" alt="search logo" title="logo search">
          </router-link>
          
          <router-link to="login" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" title="Usuario">
            <img class="w-6 h-6" src="../src/assets/User.png" alt="User logo" title="logo user">
          </router-link>
          
          <router-link to="login" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" title="Favoritos">
            <img class="w-6 h-6" src="../src/assets/Heart.png" alt="heart logo" title="logo heart">
          </router-link>
          
          <router-link to="login" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" title="Compras">
            <img class="w-6 h-6" src="../src/assets/shopbag.png" alt="bagshop logo" title="logo shopbag">
          </router-link>
          
        </div>

      </div>

    </div>
  </nav>
  <!-- <img src="/assets/User.png" alt=""> -->
  <router-view />


  <section id="cock" class="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl">
    <h2 class="font-semibold text-gray-800 dark:text-white">🍪 We use cookies!</h2>

    <p class="mt-4 text-sm text-gray-600 dark:text-gray-300">Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <a href="#" class="font-medium text-gray-700 underline transition-colors duration-300 dark:hover:text-blue-400 dark:text-white hover:text-blue-500" title="para escoger en las cookies">Permíteme elegir</a>. </p>
    
    <p class="mt-3 text-sm text-gray-600 dark:text-gray-300">Closing this modal default settings will be saved.</p>
    
    <div class="grid grid-cols-2 gap-4 mt-4 shrink-0">
        <button onclick="showMenu(true)" class=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Accept all
        </button>

        <button class=" text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Reject all
        </button>

        <button class=" text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Preferences
        </button>

        <button class=" text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Close
        </button>
    </div>
</section>

  <!-- component -->
  <section class="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl">
    <h2 class="font-semibold text-gray-800 dark:text-white">🍪 Esta pagina utiliza Cookies!</h2>

    <p class="mt-4 text-sm text-gray-600 dark:text-gray-300">Esta pagina web utiliza cookies que utilizaran servicios para la identificacion de tu navegador, ubicacion y para diferentes funciones dentro de la pagina web. <a href="#" class="font-medium text-gray-700 underline transition-colors duration-300 dark:hover:text-blue-400 dark:text-white hover:text-blue-500" title="para escoger en las cookies en español">Permíteme elegir</a>. </p>
    
    <p class="mt-3 text-sm text-gray-600 dark:text-gray-300">Al cerrar esta ventana aceptaras las cookies</p>
    
    <div class="grid grid-cols-2 gap-4 mt-4 shrink-0">
        <button class=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Aceptar todos
                  </button>

        <button class=" text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Rechazar todos
        </button>

        <button class=" text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Preferencias
        </button>

        <button class=" text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Cerrar
        </button>
    </div>
</section>

</template>

<script>
</script>

<style>
</style>

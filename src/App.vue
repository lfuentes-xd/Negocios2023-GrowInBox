<template>
  <nav className="bg-White mt-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="flex items-center justify-between h-16">
        <img src="./assets/logo.png" class="h-20" alt="imagen del logo" title="Grow in box logo">
        <div className="flex items-baseline space-x-4">
          <router-link to="/"
            class="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            title="home">Inicio</router-link>
          <router-link to="/Catalogo"
            className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            title="catalogo">Cátalogo</router-link>
          <router-link to=""
            className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            title="contacto">Contacto</router-link>
        </div>

        <div class="flex space-x-4">

          <router-link to="login" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            title="Buscar">
            <img class="w-6 h-6" src="../src/assets/Search.png" alt="search logo" title="logo search">
          </router-link>

          <router-link to="login" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            title="Usuario">
            <img class="w-6 h-6" src="../src/assets/User.png" alt="User logo" title="logo user">
          </router-link>

          <router-link to="login" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            title="Favoritos">
            <img class="w-6 h-6" src="../src/assets/Heart.png" alt="heart logo" title="logo heart">
          </router-link>

          <router-link to="login" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            title="Compras">
            <img class="w-6 h-6" src="../src/assets/shopbag.png" alt="bagshop logo" title="logo shopbag">
          </router-link>

        </div>

      </div>

    </div>
  </nav>
  <!-- <img src="/assets/User.png" alt=""> -->
  <router-view />

  <!-- component -->
  <section id="cookieSection"
    class="fixed w-11/12 sm:w-2/5 p-2 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-4 sm:left-12 bottom-4 sm:bottom-16 dark:border-gray-700 rounded-2xl text-sm sm:text-base">
    <!-- Ajustes en los tamaños, márgenes y posición -->

    <h2 class="font-semibold text-gray-800 dark:text-white text-lg sm:text-xl">🍪 Esta página utiliza Cookies!</h2>

    <p class="mt-2 text-gray-600 dark:text-gray-300">Esta página web utiliza cookies para identificar tu navegador,
      ubicación y realizar otras funciones. <a href="#"
        class="font-medium text-gray-700 underline transition-colors duration-300 dark:hover:text-blue-400 dark:text-white hover:text-blue-500"
        title="para escoger las cookies en español">Permíteme elegir</a>.</p>

    <p class="mt-1 text-gray-600 dark:text-gray-300">Al cerrar esta ventana aceptarás las cookies.</p>

    <div class="grid grid-cols-2 gap-2 mt-2 shrink-0">

      <button id="acceptAllButton"
        class="text-xs sm:text-sm bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-3 py-2 duration-300 transition-colors focus:outline-none">
        Aceptar todos
      </button>

      <button id="rejectAllButton"
        class="text-xs sm:text-sm border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-3 py-2 duration-300 transition-colors focus:outline-none">
        Rechazar todos
      </button>

      <button
        class="text-xs sm:text-sm border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-3 py-2 duration-300 transition-colors focus:outline-none">
        Preferencias
      </button>

      <button id="closeButton"
        class="text-xs sm:text-sm border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-3 py-2 duration-300 transition-colors focus:outline-none">
        Cerrar
      </button>
    </div>
  </section>
</template>


<script>
console.log("Script ejecutándose");

window.onload = function () {
  const cookieSection = document.getElementById("cookieSection");
  console.log("Script ejecutándose");

  function closeCookieSection() {
    cookieSection.classList.add("hidden");
  }

  const acceptButton = document.getElementById("acceptAllButton");
  const rejectButton = document.getElementById("rejectAllButton");
  const closeButton = document.getElementById("closeButton");

  console.log("Accept Button:", acceptButton);
  console.log("Reject Button:", rejectButton);
  console.log("Close Button:", closeButton);

  if (acceptButton) {
    acceptButton.addEventListener("click", function () {
      // Lógica cuando se hace clic en "Aceptar todos"
      // Puedes agregar lógica adicional aquí si es necesario
      console.log("Aceptado");
      closeCookieSection();
    });
  }

  if (rejectButton) {
    rejectButton.addEventListener("click", function () {
      // Lógica cuando se hace clic en "Rechazar todos"
      // Puedes agregar lógica adicional aquí si es necesario
      console.log("Rechazado");
      closeCookieSection();
    });
  }


  if (closeButton) {
    closeButton.addEventListener("click", function () {
      // Lógica cuando se hace clic en "Rechazar todos"
      // Puedes agregar lógica adicional aquí si es necesario
      console.log("Cerrado");
      closeCookieSection();
    });
  }
};

</script>

<style>
.hidden {
  display: none;
}
</style>

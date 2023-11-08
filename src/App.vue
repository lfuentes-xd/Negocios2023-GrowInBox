<template>
  <nav className="bg-White mt-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <img src="./assets/logo.png" class="h-20">
        <div className="flex items-baseline space-x-4">
          <router-link to="/" 
          class="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</router-link>
          <router-link to="/Catalogo"
            className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cátalogo</router-link>
          <router-link to=""
            className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contanto</router-link>
        </div>

        <div class="flex"> 

          <router-link to="login" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <img class="w-6 h-6" src="../src/assets/Search.png" alt="">
          </router-link>
          
          <router-link to="login" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <img class="w-6 h-6" src="../src/assets/User.png" alt="">
          </router-link>
          
          <router-link to="login" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <img class="w-6 h-6" src="../src/assets/Heart.png" alt="">
          </router-link>
          
          <router-link to="login" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <img class="w-6 h-6" src="../src/assets/shopbag.png" alt="">
          </router-link>
          
        </div>

      </div>
    </div>
  </nav>
  <!-- <img src="/assets/User.png" alt=""> -->
  <router-view />
</template>

<style>
</style>

<template>
  <nav className="bg-White">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <img src="../src/assets/logo.png" class="h-20">
        <div className="flex items-baseline space-x-4">
          <router-link class="ml-3 text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            to="/">Inicio</router-link>
          <router-link to="Cars"
            className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cátalogo</router-link>
          <router-link to="CarsAdmon"
            className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contanto</router-link>
          <Link to="SellsAdmon"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ventas
          </Link>
        </div>

        <div class="justify-end"> 

          <router-link to="login" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <img class="w-8 h-8" src="../src/assets/Search.png" alt="">
          </router-link>

        </div>

      </div>
    </div>
  </nav>
  <!-- <img src="/assets/User.png" alt=""> -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}</style>

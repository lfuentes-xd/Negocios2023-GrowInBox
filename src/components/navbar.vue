<template>
    <nav className="bg-White mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex items-center justify-between h-16">
                <router-link to="/" title="Ir a Inicio">
                    <img src="../assets/logo.png" class="h-20 cursor-pointer" alt="Imagen del logo"
                        title="Grow in Box logo">
                </router-link>
                
                <div className="flex items-baseline space-x-4">
                    <router-link to="/"
                        class="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="home">Inicio</router-link>
                    <router-link to="/Catalogo"
                        className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="catalogo">Cátalogo</router-link>
                </div>

                <div :class="{ 'hidden': !showMenuLargeScreen }" class="flex items-center space-x-4">
                    <router-link to="/User"
                        class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" title="Usuario">
                        <img class="w-6 h-6" src="../assets/User.png" alt="User logo" title="logo user" />
                    </router-link>

                    <router-link to="/Login"
                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="Login">
                        Inicio de sesión
                    </router-link>
                    <router-link to="/OrdenesCompra"
                        class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="OrdenesCompra">
                        Órdenes de compra
                    </router-link>
                    <router-link to="/Wishlist"
                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="Favoritos">
                        <img class="w-6 h-6" src="../assets/Heart.png" alt="heart logo" title="logo heart">
                    </router-link>

                    <router-link to="/Cart"
                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="Compras">
                        <img class="w-6 h-6" src="../assets/shopbag.png" alt="bagshop logo" title="logo shopbag">
                    </router-link>
                </div>

                <!-- Botón de menú de hamburguesa para pantallas pequeñas -->
                <div class="sm:hidden">
                    <!-- Añadir un botón para activar el menú en pantallas pequeñas -->
                    <button @click="toggleMobileMenu"
                        class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>

                    
                    <!-- Menú desplegable para pantallas pequeñas -->
                    <div v-if="mobileMenuOpen" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right">
                        <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <!-- Contenido del menú desplegable aquí -->
                            <router-link to="/User" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                title="Usuario">
                                Usuario
                            </router-link>

                            <router-link to="/Login"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                title="Login">
                                Inicio de sesión
                            </router-link>
                            <router-link to="/OrdenesCompra" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                title="OrdenesCompra">
                                Órdenes de compra
                            </router-link>

                            <router-link to="/Wishlist"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                title="Favoritos">
                                Lista de Deseos
                            </router-link>

                            <router-link to="/Cart"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                title="Compras">
                                Carrito de Compra
                            </router-link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navBbar-view",
    data() {
        return {
            mobileMenuOpen: false,
            showMenuLargeScreen: true, // Agregamos una propiedad para controlar la visibilidad del menú en pantallas grandes
        };
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        handleScreenSize() {
            this.showMenuLargeScreen = window.innerWidth >= 640; // Actualizamos la propiedad en función del tamaño de la pantalla
        },
    },
    mounted() {
        this.handleScreenSize(); // Llamamos a la función cuando se monta el componente
        window.addEventListener('resize', this.handleScreenSize); // Escuchamos el evento de redimensionamiento de la ventana
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleScreenSize); // Limpiamos el evento al destruir el componente
    },
};
</script>
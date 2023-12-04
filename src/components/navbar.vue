<template>
    <nav className="bg-White mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex items-center justify-between h-16">
                <img src="../assets/logo.png" class="h-20" alt="imagen del logo" title="Grow in box logo">
                <div className="flex items-baseline space-x-4">
                    <router-link to="/"
                        class="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="home">Inicio</router-link>
                    <router-link to="/Catalogo"
                        className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="catalogo">Cátalogo</router-link>
                </div>

                <div class="flex space-x-4">


                    <router-link to="/User"
                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="Usuario">
                        <img class="w-6 h-6" src="../assets/User.png" alt="User logo" title="logo user">
                    </router-link>
                    
                    <router-link to="/Login"
                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="Login">
                        Inicio de sesión
                    </router-link>

                    <router-link to="/OrdenesCompra"
                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="Usuario">
                        Órdenes de compra
                    </router-link>

                    <router-link to="login"
                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="Favoritos">
                        <img class="w-6 h-6" src="../assets/Heart.png" alt="heart logo" title="logo heart">
                    </router-link>

                    <router-link to="login"
                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="Compras">
                        <img class="w-6 h-6" src="../assets/shopbag.png" alt="bagshop logo" title="logo shopbag">
                    </router-link>
                </div>
            </div>
        </div>
    </nav>

</template>

<script>
export default{
    name: "navBbar-view"
}
</script>
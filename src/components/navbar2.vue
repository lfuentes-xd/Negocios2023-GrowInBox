<template>
    <nav className="bg-White mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex items-center justify-between h-16">
                <img src="../assets/logo.png" class="h-20" alt="imagen del logo" title="Grow in box logo">
                <div className="flex items-baseline space-x-4">
                    <router-link to="/"
                        class="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="home">Inicio</router-link>
                    <router-link to="/Useradd"
                        className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="catalogo">Usuarios</router-link>
                    <router-link to="/Productadd"
                        className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="contacto">Productos</router-link>
                </div>

            </div>

        </div>
    </nav>
</template>

<script>
export default {
    name: "navBbar2-view"
}
</script>
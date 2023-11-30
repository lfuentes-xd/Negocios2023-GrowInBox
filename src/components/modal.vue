<template>
    <div v-show="isOpen" class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
            <div class="flex items-center justify-between">
                <h3 class="text-2xl">Título del modal</h3>
                <svg @click="isOpen = false" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-red-900 cursor-pointer"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="mt-4">
                <p class="mb-4 text-sm">Contenido del modal</p>
                <button @click="isOpen = false"
                    class="px-6 py-2 text-blue-800 border border-blue-600 rounded">Cancelar</button>
                <button class="px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded">Guardar</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Modal_show",
    data() {
        return {
            isOpen: false,
        };
    },
};
</script>
  
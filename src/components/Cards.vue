<template>
    <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-10">
        <div
            class="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">

        </div>
        <div class="p-6">
            <h5
                class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                UI/UX Review Check
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                The place is close to Barceloneta Beach and bus stop just 2 min by walk
                and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
            </p>
        </div>
        <div class="p-6 pt-0">
            <button
                class="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40"
                type="button">
                Ver producto
            </button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CardsProductos',
    props: {
        msg: String
    }
}
</script>
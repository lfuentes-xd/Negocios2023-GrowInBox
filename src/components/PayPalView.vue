<template>
    <navbar></navbar>

    <br>
    <div id="div">
        <h1 class="mb-2 text-3xl font-medium leading-tight text-neutral-800">
            Confirmar compra
        </h1>
        <br>

        <h1 class="mb-2 text-3xl font-medium leading-tight text-neutral-800">
            Total: $ {{ total }}
        </h1>
        <button id="button2">
            <PayPalButton :precio="total"></PayPalButton>
        </button>

    </div>
</template>

<script>
import PayPalButton from './PayPalButton.vue';
import navbar from "../components/navbar.vue"
export default {
    name: 'PayPalView',
    components: {
        navbar,
        PayPalButton
    },
    methods: {
       
    },
    computed: {
        total() {
            return Number(this.$route.query.total);
        }
    },
}
</script>

<style scoped></style>
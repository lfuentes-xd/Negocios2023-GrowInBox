<template>
    <navbar></navbar>
    <div id="div"
        class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           Productos comprados por {{ usuarioP.nombre }}
        </h5>
        <br>

        <table>
            <thead>
                <th>id</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
            </thead>
            <tbody>
                <tr v-for="producto in usuarioP.productosuser" :key="producto.id">
                    <td>{{ producto.id }}</td>
                    <td>{{ producto.nombre }}</td>
                    <td>{{ producto.descripcion }}</td>
                    <td>{{ producto.precio }}</td>
                </tr>
            </tbody>
        </table>


    </div>
</template>

<script>
import navbar from "../components/navbar.vue"
import usuario from '../../products.json'

export default {
    components: {
        navbar
    },
    data() {
        return {
            usuarioP: usuario.productosusuario
        };

    }

}

</script>
<style>
#div {
    width: 85%;
    position: relative;
    left: 7.5%;
}
table{
    border: 2px black solid;
}
th{
    border: 2px black solid;
    background-color: rgb(105, 238, 149);
}
td{
    border: 2px black solid;
}

</style>
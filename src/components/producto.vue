<template>
    <div class="container flex m-5">
        <div class="w-1/2 ml-20">
            <img src="../assets/product_images/product_img_01.png" alt="">
        </div>
        <div class="w-1/2 mr-10  font-medium">
            <h1 class="text-4xl ml-5">GrowInBox- Kit de crecimiento de Espinacas</h1>
            <p class="text-1xl ml-5 mt-6 ">$ 1.00 MXN</p>
            <p class="text-1xl ml-5 mt-6 "> cantidad</p>


            <button class="mx-10 border-solid border-2  border-black w-80 h-10">Agregar al carrito</button>
            <button class="mx-10 mt-5 bg-black text-white w-80 h-10">Agregar al carrito</button>

            <p class="mx-10 mt-5 font-medium text-justify">Este producto es un kit de jardinería innovador y fácil de usar, diseñado para
                aquellos que desean cultivar
                sus propias espinacas en casa. Aquí está una descripción más detallada:
                El producto consiste en una caja de cartón que actúa como una maceta. Dentro de la caja, encontrarás
                semillas de espinaca y tierra. La caja ha sido diseñada para mantener las condiciones ideales para el
                crecimiento de las espinacas, proporcionando un ambiente controlado y protegido.
                Para usar el producto, simplemente tienes que agregar agua a la caja. La tierra dentro de la caja absorberá
                el agua y proporcionará la humedad necesaria para que las semillas germinen. Una vez que las semillas hayan
                germinado, las plántulas de espinaca comenzarán a crecer.
                La caja de cartón no sólo actúa como una maceta, sino que también protege las plántulas mientras crecen.
                Además, su diseño compacto y portátil hace que sea fácil colocarlo en cualquier lugar de tu casa donde las
                plantas puedan recibir suficiente luz solar.
            </p>

        </div>

    </div>
    <div>
        <div class="text-center my-5">
            <h1 class="text-xl ml-5 text-center">¿Quieres recibir ofertas?</h1>
            <input class="w-50  border-solid border-2 border-gray-500 w-80 h-10" type="text"
                placeholder="Correo electroníco">
        </div>

    </div>
</template>
    
<script>
export default {
    name: 'ProductoUNO',
    props: {
        msg: String
    }
}
</script>
    
    
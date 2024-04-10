en <template>
    <navbar></navbar>

    <div class="flex justify-center items-center mt-20">
        <div class="container flex items-center justify-center">

            <div
                class="flex-shrink-0 relative mx-4 -mt-6 h-custom mt-3 sm:h-108 md:h-120 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img :src="'http://localhost/BackEnd-NegII/storage/app/public/'+ producto.Image" alt="Product Image"
                    title="Imagen del producto" class="w-full h-full object-cover object-center">
            </div>

            <div class="w-1/2 mr-10 font-medium">
                <h1 class="text-4xl ml-5">{{ producto && producto.Name ? producto.Name : '' }}</h1>
                <p class="text-1xl ml-5 mt-6 ">$ {{ producto && producto.Price ? producto.Price : '' }} MXN</p>
                <!-- <p class="text-1xl ml-5 mt-6 ">Stock Disponible: {{ producto && producto.stock ? producto.stock : '' }}</p> -->

                <button class="my-5 mx-10 border-solid border-2 border-black w-80 h-10" @click="showAlert">Agregar al
                    carrito</button>
                <button class="mx-10 border-solid w-80 h-10">
                    <!-- <PayPalButton class=""></PayPalButton> -->
                    <PayPalButton :precio="producto && producto.Price ? producto.Price : 0"></PayPalButton>
                </button>

                <div class="wishlist">
                    <span class="heart" :class="{ 'clicked': isClicked }" @click="toggleWishlist"></span>
                </div>

                <p class="mx-10 mt-15 font-medium text-justify">{{ producto && producto.Description ?
                    producto.Description : '' }}</p>
            </div>
        </div>
    </div>


    <div>
        <StaticRatings :productId="producto.id" :userLoggedIn="userLoggedIn"></StaticRatings>
    </div>

    <div>
        <div class="text-center my-5">
            <h1 class="text-xl ml-5 text-center mb-10">¿Quieres recibir ofertas?</h1>
            <input class="w-50 border-solid border-2 border-gray-500 w-80 h-10" type="text"
                placeholder="Correo electrónico">
        </div>
    </div>
</template>

<script>
import PayPalButton from './PayPalButton.vue';
import StaticRatings from './StaticRatings.vue';
import navbar from "./navbar.vue";
// import products from '../../products.json';
import axios from 'axios';

export default {
    name: 'ProductoUNO',
    data() {
        return {
            producto: [],
            isClicked: false
        };
    },
    methods: {
        showAlert() {
            alert('Producto agregado al carrito');
        },
        toggleWishlist() {
            this.isClicked = !this.isClicked; // Cambia el estado del corazón al hacer clic
        }
    },
    components: {
        PayPalButton,
        StaticRatings,
        navbar
    },
    created() {
        // Lógica para cargar los detalles del producto usando this.$route.params.id
        const productId = Number(this.$route.params.id); // Convertir a número
        console.log('productId:', productId);

        this.currentId = productId;
        // axios.get(`http://localhost/BackEnd-NegII/public/api/ShowProduct/${this.currentId}`) //lemuel
        // axios.get(`http://localhost/public/api/ShowProduct/${this.currentId}`) // torres
        axios.get(`http://localhost/BackEnd-NegII/public/api/ShowProduct/${this.currentId}`)
            .then(response => {
                this.producto = response.data;
                console.log(response.data)
                console.log("que tiene:: " + this.producto)
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
            });

        // Verifica si productId está definido y si el producto existe en el archivo JSON
        // if (!isNaN(productId) && products.productos) {
        //     this.producto = products.productos.find(producto => producto.id === productId);
        //     console.log('Producto encontrado:', this.producto);
        // }

        // // Agrega una verificación adicional para asegurarte de que producto.nombre esté definido
        // if (!this.producto || !this.producto.nombre) {
        //     console.error('Producto no encontrado o nombre no definido:', this.producto);
        // }

    }
};
</script>






<style>
.heart {
    width: 20px;
    height: 20px;
    position: relative;
    transform: rotate(-45deg);
    background-color: rgba(0, 0, 0, 0.959);
    cursor: pointer;
    margin: 20px auto;
    margin-left: 50px;
    /* Mover hacia la derecha */
}

.heart::before,
.heart::after {
    content: '';
    width: 20px;
    height: 32px;
    border-radius: 20px 20px 0 0;
    position: absolute;
    background-color: rgb(0, 0, 0);
}

.heart::before {
    top: -20px;
    left: 0;
    transform: rotate(-45deg);
}

.heart::after {
    top: -20px;
    left: 10px;
    transform: rotate(45deg);
}

.heart.clicked {
    background-color: rgb(0, 0, 0);
}

.heart.clicked::before,
.heart.clicked::after {
    background-color: rgb(255, 0, 0);
}

/* CSS personalizado */
.h-custom {
  /* Media queries para hacerla reactiva */
  @media (min-width: 240px) {
    height: 208px; /* Altura para pantallas pequeñas (640px y superiores) */
  }

  @media (min-width: 668px) {
    height: 420px; /* Altura para pantallas medianas (768px y superiores) */
  }

  @media (min-width: 868px) {
    height: 620px; /* Altura para pantallas medianas (768px y superiores) */
  }

  @media (min-width: 1080px) {
    height: 820px; /* Altura para pantallas medianas (768px y superiores) */
  }

  @media (min-width: 2160px) {
    height: 940px; /* Altura para pantallas medianas (768px y superiores) */
  }
}
</style>

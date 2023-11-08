<template>
  <div class="home">
    <div @mousemove="onMousemoveA" :class="{ 'gray-bg': x < 5, 'blue-bg': x >= 5 }" class="BGAN gray-bg">
      <p :class="{ 'hiddenA-text': x < 5, 'hiddenB-text': x >= 5 }">.</p>
      <h1 :class="{ 'hiddenA-text': x < 5, 'visible-text': x >= 5 }">Revisa los productos mas vendidos</h1>
      <p :class="{ 'hiddenA-text': x < 5, 'hiddenD-text': x >= 5 }">.</p>
      <router-link to="/Catalogo">
      <button :class="{ 'hiddenD-button': x < 5, 'visible-button': x >= 5 }">Los Quiero</button>
    </router-link>
      <p :class="{ 'hiddenA-text': x < 5, 'hiddenC-text': x >= 5 }">.</p>
    </div>

    <div class="primaryBox">
      <div class="productContainer">
        <div style="margin-bottom: 50px;">
          <div class="relative w-full sm:flex sm:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div
              class="relative w-full sm:w-2/5 sm:shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img src="@/assets/GIB-Card1.jpg" alt="image" class="h-full w-full object-cover" />
            </div>
            <div class="p-6">
              <h6
                class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                Destacado
              </h6>
              <h4
                class="mb-2 block font-sans text-2xl sm:text-3xl font-semibold sm:font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Kit de Crecimiento
              </h4>
              <p class="mb-8 block font-sans text-base sm:text-lg font-normal leading-relaxed text-gray-700 antialiased">
                No te canses ni te ensucies tratando de hacer crecer una planta frutal, mejor compra este kit donde solo
                tendrás que darle agua y sol a tu planta para que pronto gustes de los frutos que esta da.
              </p>
              <a class="inline-block" href="#">
                <button
                  class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs sm:text-sm font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button">
                  Más información
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" aria-hidden="true" class="h-4 w-4 sm:h-6 sm:w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3">
                    </path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div class="relative w-full sm:flex sm:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div
              class="relative w-full sm:w-2/5 sm:shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img src="@/assets/GIB-Card2.jpg" alt="image" class="h-full w-full object-cover" />
            </div>
            <div class="p-6">
              <h6
                class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                Destacado
              </h6>
              <h4
                class="mb-2 block font-sans text-2xl sm:text-3xl font-semibold sm:font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Logra más con nuestras herramientas
              </h4>
              <p class="mb-8 block font-sans text-base sm:text-lg font-normal leading-relaxed text-gray-700 antialiased">
                Con estas herramientas olvídate de que te salgan ampollas en tus manos, pues estas son ergonómicas, de
                buena calidad y duraderas.
              </p>
              <a class="inline-block" href="#">
                <button
                  class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs sm:text-sm font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button">
                  Más información
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" aria-hidden="true" class="h-4 w-4 sm:h-6 sm:w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3">
                    </path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      x: ref(0)
    };
  },
  methods: {
    onMousemoveA(e) {
      this.x = e.clientX;
    }
  }
}
</script>

<style scoped>
/*Estilos para la animacion del banner*/
.BGAN:hover {
  transition: 5s background-color ease;
}

.gray-bg,
.blue-bg {
  background-color: hsl(0, 0%, 100%);
  background-image: url(~@/assets/GIB-HomeBanner.jpg);
  background-size: 60% auto;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-color 5s ease;
}

.blue-bg {
  background-color: hsla(0, 0%, 100%, 0.575);
}

.hiddenA-text {
  color: hsla(0, 0%, 0%, 0);
  text-align: center;
  font-weight: bold;
  font-size: 1px;
  transition: color 2s ease, font-size 5s ease;
}

.hiddenB-text {
  color: hsla(0, 0%, 0%, 0);
  text-align: right;
  font-size: 350px;
  transition: color 2s ease, font-size 5s ease;
}

.hiddenC-text {
  color: hsla(0, 0%, 0%, 0);
  text-align: right;
  font-size: 110px;
  transition: color 2s ease, font-size 5s ease;
}

.hiddenD-text {
  color: hsla(0, 0%, 0%, 0);
  text-align: right;
  font-size: 20px;
  transition: color 2s ease, font-size 5s ease;
}

.visible-text {
  color: hsl(0, 0%, 100%);
  font-weight: bold;
  font-size: 50px;
  transition: color 3s ease, font-size 5s ease;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.hiddenD-button {
  border: 0px;
  background: transparent;
  font-size: 0px;
  color: transparent;
}


.visible-button {
  display: block;
  padding: 15px 30px;
  border: 2px solid #ffffff;
  background: transparent;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  margin: 0 auto;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  transition: all 3s ease;
}

.visible-button:hover {
  background: rgba(255, 255, 255, 0.473);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.05);
  transition: all 0.3s ease; 
}

.primaryBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 0px solid rgb(0, 0, 0);
  margin: 0 auto;
  max-width: 80%;
}

.productContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;  
  max-width: 45%;
}


</style>

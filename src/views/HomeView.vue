<template>
  <div class="home">


    <div @mousemove="onMousemoveA" :class="{ 'gray-bg': x < 5, 'blue-bg': x >= 5 }" class="BGAN gray-bg"
      style="border-top: 0px solid #666666;border-bottom: 0px solid #666666">

      <p :class="{ 'hiddenA-text': x < 5, 'hiddenB-text': x >= 5 }">.</p>
      <h1 :class="{ 'hiddenA-text': x < 5, 'visible-text': x >= 5 }">Revisa los productos mas vendidos</h1>
      <p :class="{ 'hiddenA-text': x < 5, 'hiddenD-text': x >= 5 }">.</p>
      <button :class="{ 'hiddenD-button': x < 5, 'visible-button': x >= 5 }">Los Quiero</button>
      <p :class="{ 'hiddenA-text': x < 5, 'hiddenC-text': x >= 5 }">.</p>

    </div>

    <div class="primaryBox">

      <div style="margin-bottom: 50px;">
        <div class="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          style="width: fit-content;height: 300px;">
          <div
            class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src="@/assets/GIB-Card1.jpg" alt="image" class="h-full w-full object-cover" />
          </div>
          <div class="p-6">
            <h6
              class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              Destacado
            </h6>
            <h4
              class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Kit de Crecimiento
            </h4>
            <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              No te canses ni te ensucies tratando de hacer crecer una planta frutal, mejor compra este kit donde solo
              tendras que darle agua y sol a tu planta para que pronto gustes de los frutos que esta da.
            </p>
            <a class="inline-block" href="#">
              <button
                class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                Más información
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3">
                  </path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div>
        <div
          class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div
            class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src="@/assets/GIB-Card1.jpg" alt="image" class="h-full w-full object-cover" />
          </div>
          <div class="p-6">
            <h6
              class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              Destacado
            </h6>
            <h4
              class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Kit de Crecimiento
            </h4>
            <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              No te canses ni te ensucies tratando de hacer crecer una planta frutal, mejor compra este kit donde solo
              tendras que darle agua y sol a tu planta para que pronto gustes de los frutos que esta da.
            </p>
            <a class="inline-block" href="#">
              <button
                class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                Más información
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" class="h-4 w-4">
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
  transition: color 5s ease, font-size 5s ease;
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
  display: inline-block;
  padding: 15px 30px;
  border: 2px solid #ffffff;
  background: transparent;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  transition: all 5s ease;
}

.visible-button:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.primaryBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 418px;
  margin-left: 418px;
  padding: 10px;
  border: 10px solid rgb(0, 0, 0)
}

</style>

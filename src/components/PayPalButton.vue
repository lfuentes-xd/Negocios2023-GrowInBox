<template>
  <div>
    <div id="paypal-button-container"></div>
  </div>
</template>
<script>
import { loadScript } from "@paypal/paypal-js";
import axios from 'axios';

let paypal;

try {
  paypal = await loadScript({ clientId: 'ARCm_a63Vg5nHPwvF1hsss9jUAxVmUTwLuX0EH316Syn2RCeRim7xHezUi_tetxSrZgmQPOZlioW695Z', currency: 'MXN' });
} catch (error) {
  console.error("failed to load the PayPal JS SDK script", error);
}

export default {
  props: {
    precio: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      token: localStorage.getItem('token'),
      userData: null,
      cartProducts: [],
      cartTotal: 0
    };
  },
  mounted() {
    this.loadPayPalScript();
  },
  methods: {
    async procesarCompra() {
      // Obtener los cartIds del localStorage
      const cartIdsJSON = localStorage.getItem('cartIds');
      const cartIds = JSON.parse(cartIdsJSON);

      // Iterar sobre cada cartId en orden inverso
      for (let i = cartIds.length - 1; i >= 0; i--) {
        const cartId = cartIds[i];
        console.log(cartId);
        try {
          // Enviar una solicitud al controlador para mover el registro de Cart a Shopping
          await axios.post(`http://localhost/BackEnd-NegII/public/api/moveCartsToShoppings/${cartId}`);

          // Eliminar el cartId del localStorage una vez que se haya procesado
          cartIds.splice(i, 1);
          localStorage.setItem('cartIds', JSON.stringify(cartIds));
        } catch (error) {
          console.error(`Error al mover el producto del carrito con el ID ${cartId} a compras:`, error);
        }
      }
      this.$router.push('/OrdenesCompra');
    },
    async loadPayPalScript() {
      try {
        // Carga el script del SDK de PayPal con el ID de PayPal
        await loadScript({ clientId: 'ARCm_a63Vg5nHPwvF1hsss9jUAxVmUTwLuX0EH316Syn2RCeRim7xHezUi_tetxSrZgmQPOZlioW695Z', currency: 'MXN' });
        this.setupPayPalButton();
      } catch (error) {
        console.error("Failed to load the PayPal JS SDK script", error);
        // Maneja el error de carga del script de PayPal de manera más elegante si es necesario
      }
    },
    setupPayPalButton() {
      const { precio } = this;

      paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: precio.toFixed(2), // Formatea el precio como número de punto flotante con dos decimales
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            console.log(details); // Maneja el pago exitoso
            this.procesarCompra();
          });
        },
        onError: (err) => {
          console.error(err);
          // Maneja errores de PayPal de manera más elegante si es necesario
        },
      }).render('#paypal-button-container');
    },
  },
};
</script>

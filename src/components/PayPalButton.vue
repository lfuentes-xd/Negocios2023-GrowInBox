<template>
  <div>
    <div id="paypal-button-container"></div>
  </div>
</template>

<script>
import { loadScript } from "@paypal/paypal-js";

let paypal;

try {
    paypal = await loadScript({ clientId: 'ARCm_a63Vg5nHPwvF1hsss9jUAxVmUTwLuX0EH316Syn2RCeRim7xHezUi_tetxSrZgmQPOZlioW695Z' });
} catch (error) {
    console.error("failed to load the PayPal JS SDK script", error);
}

export default {
  data() {
    return {
      clientId: 'ARCm_a63Vg5nHPwvF1hsss9jUAxVmUTwLuX0EH316Syn2RCeRim7xHezUi_tetxSrZgmQPOZlioW695Z',
      currency_code: 'MXN',
    };
  },
  mounted() {
    this.setupPayPalButton();
  },
  methods: {
    setupPayPalButton() {
      paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '16.51', // set the amount you want to charge
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            console.log(details); // handle the successful payment
          });
        },
        onError: (err) => {
          console.error(err);
        },
      }).render('#paypal-button-container');
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

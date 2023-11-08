<template>
    <div
        style="position: absolute; align-items: center; text-align: center; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <!-- Tu marcado HTML aquí -->
        <form class="w-full max-w-sm" @submit.prevent="login">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        email
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="emailInput" type="text" placeholder="email@*******.com">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Password
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="passwordInput" type="password" placeholder="******************">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3"></div>
                <label class="md:w-2/3 block text-gray-500 font-bold">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-sm">
                        Send me your newsletter!
                    </span>
                </label>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                    <button
                        class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit">
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
  
<script>
export default {
    name: 'LoginComponent', // Cambiado a un formato multi-palabra
    props: {
        msg: String
    },
    data() {
        return {
            emailInput: '',
            passwordInput: '',
        };
    },
    methods: {
        login() {
            const xhttp = new XMLHttpRequest();
            xhttp.open('GET', 'uusers.json', true);
            xhttp.send();
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    let datos = JSON.parse(this.responseText);
                    let usuarios = datos.usuarios;

                    const emailInput = document.getElementById("emailInput");
                    const passwordInput = this.passwordInput;
                    console.log("em", passwordInput);
                    console.log("em", emailInput);
                    for (let usuario of usuarios) {
                        console.log(usuario);

                        if (emailInput === usuario.email) {
                            console.log("Email correcto");
                            if (passwordInput == usuario.password) {
                                console.log("Contraseña correcta");
                                ///  this.$emit("login-success");
                            } else {
                                console.log("Contraseña incorrecta");
                            }
                            return;
                        }
                    }



                }
            }
        }
    }

}
</script>
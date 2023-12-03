<template>
    <div class="modal-overlay" @click.self="closeModal">
        <div class="modal">
            <span class="close" @click="closeModal">&times;</span>
            <h2 class="text-center text-gray-800 text-3xl font-semibold mb-4">Deja tu reseña</h2>
            <form @submit.prevent="submitReview">

                <div class="form-group flex flex-col items-center mb-4">
                    <label for="userName" class="sr-only">Nombre de usuario:</label>
                    <input type="text" v-model="userName" required placeholder="Nombre de usuario"
                        class="w-full p-2 border rounded">
                </div>

                <div class="form-group flex flex-col items-center mb-4">
                    <label for="rating" class="sr-only">Calificación:</label>
                    <div class="items-center">
                        <div class="flex space-x-2">

                            <i v-for="star in 5" :key="star" @click="setRating(star)"
                                :class="star <= selectedRating ? 'w-14 h-14 text-yellow-500 fas fa-star mt-5' : 'w-14 h-14 text-gray-500 far fa-star mt-5'"></i>
                        </div>
                    </div>
                </div>

                <div class="form-group flex flex-col items-center mb-4">
                    <label for="comment" class="sr-only">Comentario:</label>
                    <textarea rows="3" v-model="comment" placeholder="Cuentanos que te ha parecido el producto"
                        class="w-full p-2 border rounded resize-none"></textarea>
                </div>

                <button
                    class="form-group py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white"
                    type="submit">Calificar ahora</button>
            </form>
        </div>
    </div>
</template>
  
  
<script>
export default {
    props: ['productId', 'reviews'],
    data() {
        return {
            userName: '',
            selectedRating: 0,
            comment: ''
        };
    },
    methods: {
        setRating(star) {
            this.selectedRating = star;
        },
        submitReview() {
            if (this.userName && this.selectedRating > 0 && this.comment) {
                const newReview = {
                    productId: this.productId,
                    userName: this.userName,
                    rating: this.selectedRating,
                    comment: this.comment
                };

                this.$emit('addReview', newReview);
                this.closeModal();
            } else {
                alert('Por favor, completa todos los campos.');
            }
        },
        closeModal() {
            this.$emit('close');
        }
    }
};
</script>
  
<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal {
    background: rgb(255, 255, 255);
    max-width: 600px;
    padding: 20px;
    border-radius: 8px;
    position: relative;
    z-index: 1001;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
}

.form-group {
    width: 100%;
    max-width: 400px;
    margin-bottom: 5px;
}

.modal h2 {
    margin: 0 auto;
    margin-bottom: 15px;
}
</style>
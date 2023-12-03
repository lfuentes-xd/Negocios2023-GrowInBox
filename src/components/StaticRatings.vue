<template>
  <div class="user-ratings">
    <div v-for="review in productReviews" :key="review.id" class="user-comment">
      <b>{{ review.userName }}</b>
      <p>{{ review.comment }}</p>
      <div class="rating-stars">
        <i v-for="star in Math.floor(review.rating)" :key="star" class="fas fa-star"></i>
        <i v-for="emptyStar in 5 - Math.floor(review.rating)" :key="'empty' + emptyStar" class="far fa-star"></i>
      </div>
      <span class="rating-value">{{ review.rating }}/5</span>
    </div>

    <!--Modal de reseña-->
    <review-form v-if="showReviewForm" :productId="productId" :reviews="reviews" @addReview="addReview"
      @close="showReviewForm = false"></review-form>

    <button  class="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white" @click="showReviewForm = true">Dejar reseña</button>
  </div>
</template>

<script>
import ReviewForm from "../components/reviewForm.vue"
import reviewsData from '../../reviews.json';

export default {
  components: {
    ReviewForm
  },
  props: ['productId', 'userLoggedIn'],
  data() {
    return {
      reviews: reviewsData.reviews,
      showReviewForm: false,
    };
  },
  methods: {
    addReview(newReview) {
      this.reviews.push(newReview);
    }
  },
  computed: {
    productReviews() {
      return this.reviews.filter(review => review.productId === this.productId);
    }
  }
};
</script>

<style scoped>
.user-ratings {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
  margin: 20px;
}

.rating-stars {
  color: gold;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.rating-value {
  font-size: 1rem;
  color: #555;
}

.user-comment {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>
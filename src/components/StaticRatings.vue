<template>
  <div class="user-ratings">
    
    <div class="user-comment">
      <b>{{ userName }}</b>
      <p>{{ userComment }}</p>
      <div class="rating-stars">
      <i v-for="star in Math.floor(userRating)" :key="star" class="fas fa-star"></i>
      <i v-for="emptyStar in 5 - Math.floor(userRating)" :key="'empty' + emptyStar" class="far fa-star"></i>
    </div>
      <span class="rating-value">{{ userRating }}/5</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userRating: 1, // Change this to your desired hardcoded user rating
      userComment: "No compren, me llegó un jabón >:(", // Add the user comment here
      userName: "Jesús Rodríguez:"
    };
  },
};
</script>

<style scoped>
.user-ratings {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rating-stars {
  color: gold; /* Change the color to your desired rating color */
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.rating-value {
  font-size: 1rem;
  color: #555; /* Change the color to your desired text color */
}

.user-comment {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin-top: 10px;
}

.user-name {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin-top: 10px;
}
</style>

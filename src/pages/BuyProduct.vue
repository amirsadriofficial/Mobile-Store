<template>
  <div>
    <div class="container mt-5">
      <div class="row g-3">
        <div v-for="product in products" :key="product.id" class="col-md-3">
          <div class="card">
            <img class="card-img-top" :src="product.image" alt="" />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">
                {{ product.description }}
              </p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
              <button @click="addToCart(product)" class="btn btn-outline-primary btn-sm">Add To Cart</button>
              <span>${{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const products = computed(() => store.getters["product/allProducts"]);

    function addToCart(product){
      store.dispatch('cart/addToCart' , product)
    }

    return {
      products,
      addToCart
    };
  },
};
</script>
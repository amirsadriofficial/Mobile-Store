<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-Portfolio shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Mobile Store</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item ms-5">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item ms-5">
            <router-link class="nav-link" to="/buyproduct">Buy Product</router-link>
          </li>
          <li class="nav-item ms-5">
            <router-link class="nav-link" to="/addproduct">Add Product</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link p-1 me-3" to="/cart">
                <span class="badge rounded-pill bg-success me-1">{{ countCartItems }}</span>
                <i class="bi bi-basket-fill" style="font-size:23px"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {

  setup(){
    const store = useStore();
    const countCartItems = computed(() => store.getters['cart/count'])

    return{
      countCartItems
    }
  }
};
</script>

<style>
.router-link-active {
  color: rgba(0, 0, 0, 0.9) !important;
  border-bottom: 2px solid rgba(17, 0, 255, 0.9) !important;
}

.bg-Portfolio
{
  background-color: rgb(253, 249, 7);
}
</style>
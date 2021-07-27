<template>
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col">
        <h2 class="text-center">Add Product</h2>
        <div class="underline"></div>
      </div>
    </div>
    <form @submit.prevent="validate">
      <div class="row g-3 align-items-center justify-content-center mb-3">
        <div class="col-2">
          <label for="ProductImageURL" class="col-form-label">Product Image URL :</label>
        </div>
        <div class="col-6">
          <input id="ProductImageURL" type="text" class="form-control" style="width:485px;" v-model.lazy.trim="form.ImageURL">
          <div class="form-text text-danger">
            {{ form.ImageURLErrorText }}
          </div>
        </div>
      </div>
      <div class="row g-3 align-items-center justify-content-center mb-3">  
        <div class="col-2">
          <label for="ProductName" class="col-form-label">Product Name :</label>
        </div>
        <div class="col-6">
          <input id="ProductName" type="text" class="form-control" style="width:485px;" v-model.lazy.trim="form.Name">
          <div class="form-text text-danger">
            {{ form.NameErrorText }}
          </div>
        </div>
      </div>
      <div class="row g-3 align-items-center justify-content-center mb-3">  
        <div class="col-2">
          <label for="ProductSpecifications" class="col-form-label">Product Specifications :</label>
        </div>
        <div class="col-6">
          <textarea id="ProductSpecifications" cols="50" rows="3" v-model.lazy.trim="form.Specifications"></textarea>
          <div class="form-text text-danger">
            {{ form.SpecificationsErrorText }}
          </div>
        </div>
      </div>
      <div class="row g-3 align-items-center justify-content-center mb-3">  
        <div class="col-2">
          <label for="ProductPrice" class="col-form-label">Product Price :</label>
        </div>
        <div class="col-6">
          <input id="ProductPrice" type="text" class="form-control" style="width:485px;" v-model.lazy.trim="form.Price">
          <div class="form-text text-danger">
            {{ form.PriceErrorText }}
          </div>
        </div>
      </div>
      <div class="row g-3 align-items-center justify-content-center mt-5 mb-5">
        <button type="submit" class="btn btn-outline-primary" style="width:350px;" :disabled="loading">
          <div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div>
          Add
        </button>
      </div>  
    </form>  
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import Swal from "sweetalert2";

export default {
  setup() {
    const form = reactive({
      ImageURL: "",
      ImageURLErrorText: "",
      Name: "",
      NameErrorText: "",
      Specifications: "",
      SpecificationsErrorText: "",
      Price: "",
      PriceErrorText: ""
    });
    
    const loading = ref(false);

    function validate() {
      if (form.ImageURL === "") {
        form.ImageURLErrorText = "Product Image URL is required";
      } else {
        form.ImageURLErrorText = "";
      }
      if (form.Name === "") {
        form.NameErrorText = "Product Name is required";
      } else {
        form.NameErrorText = "";
      }
      if (form.Specifications === "") {
        form.SpecificationsErrorText = "Product Specifications is required";
      } else {
        form.SpecificationsErrorText = "";
      }
      if (form.Price === "") {
        form.PriceErrorText = "Product Price is required";
      } else {
        form.PriceErrorText = "";
      }

      if (form.ImageURL !== "" && form.Name !== "" && form.Specifications !== "" && form.Price !== "") {
        loading.value = true;
        createPost();
      }
    }

    function createPost() {
    loading.value = false;

    Swal.fire({
      title: "Thanks!",
      text: "Product added successfully",
      icon: "success",
      confirmButtonText: "Ok",
    });
    }

    return { form, validate, loading };
  },
};
</script>

<style>

</style>
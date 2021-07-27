import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import BuyProduct from './pages/BuyProduct.vue';
import Cart from './pages/Cart.vue';
import AddProduct from './pages/AddProduct.vue';

const routes = [
    { name: 'home', path: '/', component: Home },
    { name: 'buyproduct', path: '/buyproduct', component: BuyProduct },
    { name: 'cart', path: '/cart', component: Cart },
    { name: 'addproduct', path: '/addproduct', component: AddProduct }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
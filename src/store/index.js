import { createStore } from 'vuex'
import product from './modules/product.js'
import cart from './modules/cart.js'

const store = createStore({
    modules: {
        product,
        cart
    }
});

export default store;
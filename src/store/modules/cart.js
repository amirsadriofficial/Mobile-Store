import Swal from 'sweetalert2'

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

const cart = {
    namespaced: true,

    state: {
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },
    getters: {
        count(state) {
            return state.cart.length
        },
        allItems(state) {
            return state.cart
        },
        totalAmount(state) {
            return state.cart.reduce((total, p) => {
                return total + p.price * p.quantity
            }, 0)
        }
    },
    mutations: {
        add(state, product) {
            const item = state.cart.find(p => p.id == product.id)
            if (!item) {
                state.cart.push({
                    ...product,
                    quantity: 1
                })
            } else {
                item.quantity++
            }
            updateLocalStorage(state.cart)
        },
        increment(state, id) {
            const item = state.cart.find(p => p.id == id)
            if (item) {
                item.quantity++
            }
            updateLocalStorage(state.cart)
        },
        decrement(state, id) {
            const item = state.cart.find(p => p.id == id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                }
            }
            updateLocalStorage(state.cart)
        },
        remove(state, id) {
            state.cart = state.cart.filter(cart => cart.id != id)
            updateLocalStorage(state.cart)
        },
        clear(state) {
            state.cart = []
            updateLocalStorage(state.cart)
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit('add', product);
            Swal.fire({
                title: "Product added",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top',
            });
        },
        increment({ commit }, id) {
            commit('increment', id);
            Swal.fire({
                title: "Product Updated",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top',
            });
        },
        decrement({ commit }, id) {
            commit('decrement', id);
            Swal.fire({
                title: "Product Updated",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top',
            });
        },
        remove({ commit }, id) {
            commit('remove', id);
            Swal.fire({
                title: "Product Deleted",
                icon: "warning",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top',
            });
        },
        clear({ commit }) {
            commit('clear');
            Swal.fire({
                title: "Cart Empty",
                icon: "warning",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top',
            });
        }
    }
}

export default cart;
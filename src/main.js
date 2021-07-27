import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router.js';
import store from './store/index.js';

const app = createApp(App);
app.use(router)
app.use(store)
app.mount('#app')
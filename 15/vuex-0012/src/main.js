import { createApp } from 'vue';
import router from './router.js';
import storage from './store.js';
import App from './App.vue';
const app = createApp(App);
app.use(router);
app.use(storage);
app.mount('#app');

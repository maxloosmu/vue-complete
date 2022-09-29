import { createApp } from 'vue';
import { createStore  } from 'vuex';

// Create a new store instance.
const store = createStore({
  state () {
    return {
      storedData: [],
    }
  },
  mutations: {
    updateStore (state, data) {
      state.storedData = data;
    }
  },
})

import App from './App.vue';

const app = createApp(App);
app.use(store);
app.mount('#app');

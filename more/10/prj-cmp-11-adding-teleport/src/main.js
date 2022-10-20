import { createApp } from 'vue';
// import { createStore  } from 'vuex';

// Create a new store instance.
// const store = createStore({
//   state () {
//     return {
//       storedResources: [],
//     }
//   },
//   mutations: {
//     updateStore (state, data) {
//       state.storedResources = data;
//     }
//   }
// })

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App)

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

// must use store before mount app
// app.use(store);
app.mount('#app');


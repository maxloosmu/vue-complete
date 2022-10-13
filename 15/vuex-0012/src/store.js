import { createStore } from 'vuex';
// import productsModule from './products.js';
const products = createStore({
  namespaced: true,
  state() {
    return {
      allProducts: [
        {
          id: 'p1',
          image: "",
          title: 'Books',
          description: 'Books collection.',
          price: 20
        },
      ]
    };
  },
  getters: {
    products(state) {
      return state.allProducts;
    }
  }
})
const store = createStore({
  modules: {
    prods: products,
  },
});
export default store;

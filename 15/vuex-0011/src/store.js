import { createStore } from 'vuex';
import productsModule from './products.js';
import cartModule from './cart.js';

// const products = createStore({
//   namespaced: true,
//   state() {
//     return {
//       allProducts: [
//         {
//           id: 'p1',
//           image: '',
//           title: 'Book Collection',
//           description:
//             'A collection of must-read books. All-time classics included!',
//           price: 99.99
//         },
//         {
//           id: 'p2',
//           image: '',
//           title: 'Mountain Tent',
//           description: 'A tent for the ambitious outdoor tourist.',
//           price: 129.99
//         },
//         {
//           id: 'p3',
//           image: '',
//           title: 'Food Box',
//           description:
//             'May be partially expired when it arrives but at least it is cheap!',
//           price: 6.99
//         },
//       ],
//     };
//   },
//   getters: {
//     products(state) {
//       return state.allProducts;
//     }
//   },
// });

// const cart = createStore({
//   namespaced: true,
//   state() {
//     return { items: [], total: 0, qty: 0 };
//   },
//   mutations: {
//     addProductToCart(state, payload) {
//       const productData = payload;
//       const productInCartIndex = state.items.findIndex(
//         (ci) => ci.productId === productData.id
//       );

//       if (productInCartIndex >= 0) {
//         state.items[productInCartIndex].qty++;
//       } else {
//         const newItem = {
//           productId: productData.id,
//           title: productData.title,
//           image: productData.image,
//           price: productData.price,
//           qty: 1,
//         };
//         state.items.push(newItem);
//       }
//       state.qty++;
//       state.total += productData.price;
//     },

//     removeProductFromCart(state, payload) {
//       const prodId = payload;
//       const productInCartIndex = state.items.findIndex(
//         (cartItem) => cartItem.productId === prodId
//       );
//       const prodData = state.items[productInCartIndex];
//       state.items.splice(productInCartIndex, 1);
//       state.qty -= prodData.qty;
//       state.total -= prodData.price * prodData.qty;
//     },
//   },
//   actions: {
//     addToCart(context, payload) {
//       const prodId = payload.id;
//       const products = context.rootGetters['prods/products'];
//       const product = products.find(prod => prod.id === prodId);
//       context.commit('addProductToCart', product);
//     },
//     removeFromCart(context, payload) {
//       context.commit('removeProductFromCart', payload);
//     }
//   },
//   getters: {
//     products(state) {
//       return state.items;
//     },
//     totalSum(state) {
//       return state.total;
//     },
//     quantity(state) {
//       return state.qty;
//     }
//   }
// });

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;
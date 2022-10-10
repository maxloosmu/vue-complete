import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  actions: {
    increment(context) {
      setTimeout(function() {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      console.log(context);
      context.commit('increase', payload);
    }
  },
  getters: {
    // testAuth(state, getters, rootState, rootGetters)
    testAuth(_, _2, rootState) {
      return rootState.isLoggedIn;
    },
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    }
  }
};

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isLoggedIn: false
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
    // Even though this module encompass the other module, meaning that this parent module has a child module, it still cannot get the state of the child module. Even rootState fails.
    testCount(state, _2, rootState) {
      console.log("state.counter: " + state.counter);
      console.log("rootState.counter: " + rootState.counter);
      return rootState.counter;
    },
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');

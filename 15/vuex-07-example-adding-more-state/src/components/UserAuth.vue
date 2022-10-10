<template>
  <input v-model='inputPassword' v-if="!isAuth" />
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
</template>

<script>
export default {
  data() {
    return {
      inputPassword: '',
    };
  },
  methods: {
    login() {
      if (this.inputPassword == this.$store.getters.getPassword) {
        this.$store.dispatch('login');
      }
      else {
        alert('WRONG Password');
      }
      this.inputPassword = '';
    },
    logout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  }
}
</script>
<template>
  <section v-if="compIsLoggedIn">
    <h2>Shop Admin</h2>
    <p>There isn't much to do at the moment - sorry ...</p>
  </section>
  <section v-else>
    <p>Please click the "Products" or "Cart" links above.</p>
  </section>
</template>

<script>
export default {
  computed: {
    compIsLoggedIn() {
      // console.log("inside compIsLoggedIn()");
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>

<style scoped>
section {
  text-align: center;
  margin: 3rem auto;
  max-width: 40rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 2rem;
}
</style>
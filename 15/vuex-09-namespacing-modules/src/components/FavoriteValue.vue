<template>
  <h3>{{ counter }}</h3>
  <p>We do more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      // Here, numbers is the namespace.
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>
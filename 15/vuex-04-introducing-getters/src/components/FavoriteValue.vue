<template>
  <h3>this.$store.getters.normalizedCounter: {{ counter }}</h3>
  <p>We do more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>
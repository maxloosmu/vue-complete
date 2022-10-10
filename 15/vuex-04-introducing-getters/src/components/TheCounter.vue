<template>
  <h3>this.$store.getters.finalCounter: {{ counter }}</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
  },
};
</script>
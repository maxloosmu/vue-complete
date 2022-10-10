<template>
  <h3>{{ finalCnt }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    // mapGetters automatically creates all the computed properties listed in the array below, with the help of the spread ... operator, and merges them to the computed properties object.
    // ...mapGetters(['finalCounter'])
    ...mapGetters({
      finalCnt: 'finalCounter',
    })
  },
};
</script>
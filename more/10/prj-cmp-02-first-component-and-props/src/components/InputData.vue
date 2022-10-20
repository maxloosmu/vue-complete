<template>
  <form>
    <input type="text" @keypress.enter="$emit('fruitEvent', this.newFruit)" v-model="newFruit" />
  </form>
</template>

<script>
  export default {
    data() {
      return {
        newFruit: '',
      };
    },
    emits: ['fruitEvent'],
  }
  </script>
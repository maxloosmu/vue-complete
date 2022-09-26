<template>
  <form @submit.prevent="addFriend">
    <input type="text" @keypress.enter="createId" v-model="inputName" />
    <button type="submit">Click to Add Friend</button>
  </form>
</template>

<script>
export default {
  // props: {
  //   inputId2: {
  //     type: String,
  //     required: true,
  //   },
  //   inputName2: {
  //     type: String,
  //     required: true,
  //   },
  // },
  emits: ['add-friend'],
  data() {
    return {
      inputId: '',
      inputName: '',
    };
  },
  methods: {
    createId(event) {
      this.inputId = event.target.value;
    },
    addFriend() {
      // https://renatello.com/prevent-multiple-form-submissions-in-vue-js/
      this.inputId = this.inputName;
      this.$emit('add-friend', this.inputId, this.inputName);
    }
  }
};
</script>
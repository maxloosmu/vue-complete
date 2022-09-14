const app = Vue.createApp({
  data() {
    return {
      keydowntext: '',
    };
  },
  methods: {
    showalert() {
      alert("Show Alert");
    },
    keydowntextinput(event) {
      this.keydowntext = event.target.value;
    }
  }
});

app.mount('#assignment');

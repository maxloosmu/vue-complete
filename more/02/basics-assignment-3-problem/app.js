const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    number(value) {
      if (value > 0) {
        that = this;
        setTimeout(function() {
          that.number = 0;
        }, 5000);
      };
    },
  },
  computed: {
    message() {
      if (this.number < 37) return "Not there yet"; 
      else if (this.number > 37) { return "Too much!"; }
      else return "YAY, it's 37!"; 
    },
  },
  methods: {
    add(num) {
      this.number = this.number + num;
    }
  }
})

app.mount('#assignment');

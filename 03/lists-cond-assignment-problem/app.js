const app = Vue.createApp({
  data() {
    return {
      taskvalue: '',
      tasklist: [],
      showhide: true,
    };
  },
  computed: {
    inlinehide() {
      return (this.showhide ? 'block' : 'none');
    },
    buttoncaption() {
      return ((this.showhide && this.tasklist.length > 0) ? 'Hide Tasklist' : 'Show Tasklist');
    }
  },
  methods: {
    addtask() {
      this.tasklist.push(this.taskvalue);
    },
    removetask(idx) {
      this.tasklist.splice(idx, 1);
    },
    togglevisible() {
      this.showhide = !this.showhide;
    },
  },
});

app.mount('#assignment');
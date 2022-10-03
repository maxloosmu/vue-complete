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
      if (this.tasklist.length == 0) return 'No tasks yet';
      else if (this.tasklist.length > 0) {
        return ((this.showhide) ? 'Hide Tasklist' : 'Show Tasklist');
      }
    },
  },
  methods: {
    addtask() {
      this.tasklist.push(this.taskvalue);
    },
    removetask(idx) {
      this.tasklist.splice(idx, 1);
      if (this.tasklist.length == 0) {
        this.showhide = true;
      }
    },
    togglevisible() {
      if (this.tasklist.length > 0) {
        this.showhide = !this.showhide;
      }
    },
  },
});

app.mount('#assignment');
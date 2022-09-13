const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  computed: {
    fullname() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + '8757 1561';
    },
  },
  methods: {
    outputFullname() {
      console.log('Running again due to interpolation...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + '8757 1561';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      console.log('add runs...');
      this.counter = this.counter + num;
    },
    reduce(num) {
      console.log('reduce runs...');
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');

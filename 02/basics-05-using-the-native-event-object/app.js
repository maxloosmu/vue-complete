const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      buttonText: 'Test Me'
    };
  },
  methods: {
    resetButtonValue() {
      this.buttonText = 'Test Me';
    },
    setButtonText(event) {
      this.buttonText = event.target.value;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert("Submitted!  " + event.target.value);
    },
    setName(event, phone) {
      this.name = event.target.value + ' ' + phone;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  },
  beforeMount(){
    this.name = 'Max Loo';
    this.confirmedName = 'Max Loo';
  }
});

app.mount('#events');

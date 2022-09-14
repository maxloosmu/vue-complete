const app = Vue.createApp({
  data() {
    return {
      myname: 'Max',
      myage: 46,
      sporepic: "https://www.planetware.com/wpimages/2020/03/singapore-in-pictures-beautiful-places-to-photograph-marina-bay-sands.jpg",
    }
  },
  computed: {
    myageplus5() {
      return this.myage + 5;
    },
    randomnum() {
      return Math.random();
    },
  }
})

app.mount('#assignment');
const app = Vue.createApp({
  data() {
    return {
      cssclass: '',
      cssclasses: ['blue', 'red', 'green'],
      bgcolour: '',
      showhide: true,
    };
  },
  computed: {
    selectCSS() {
      // if (this.cssclass == 'user1') 
      return { 
        user1: this.cssclass == 'user1', 
        user2: this.cssclass == 'user2',
        visible: this.showhide,
        hidden: !this.showhide
      };
      // else if (this.cssclass == 'user2') return { 
      //   user1: false, 
      //   user2: true, 
      //   visible: this.showhide,
      //   hidden: !this.showhide
      // };
    },
    // showorhide() {
    //   return { visible: true };
    //   // if (this.showhide) {
    //   //   this.showhide = false;
    //   //   return { hidden: true };
    //   // }
    //   // else {
    //   //   this.showhide = true;
    //   //   return { visible: true };
    //   // }
    // },
  },
  methods: {
    showorhide() {
      this.showhide = !this.showhide;
    },
  },
});

app.mount('#assignment');

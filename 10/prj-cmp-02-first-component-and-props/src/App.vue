<template>
  <a href="http://www.google.com">Go Google</a>
  <ul>
    <learning-resource
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
  <br/>
  <input-data @fruit-event="addFruit"></input-data>
  <br/>
  <keep-alive>
    <ol>
      <test-data
        v-for="(fruit, index) in this.someData"
        :key="index"
        :name="fruit"
      ></test-data>
    </ol>
  </keep-alive>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue';
import TestData from './components/TestData.vue';
import InputData from './components/InputData.vue';

export default {
  components: {
    LearningResource,
    TestData,
    InputData,
},
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
  computed: {
    someData2() {
      let someArray = ['apple', 'orange'];
      console.log(this.$store.state.storedData);
      let storeLength = this.$store.state.storedData.length;
      if (!(storeLength > 2)) return someArray;
      else return this.$store.state.storedData;
    },
    someData() {
      let someArray = ['apple', 'orange'];
      let storedData;
      if (localStorage.storedData) {
        storedData = localStorage.storedData.split(',');
      }
      else {
        storedData = someArray;
        localStorage.storedData = someArray;
      }
      // localStorage.getItem('storedData');
      // if (!storedData) localStorage.setItem('storedData', someArray);
      console.log(localStorage.storedData.split(','));
      let storeLength = storedData.length;
      if (!(storeLength > 2)) return someArray;
      else return storedData;
    },
  },
  methods: {
    addFruit2(item) {
      this.someData.push(item);
      console.log(this.someData);
      this.$store.commit('updateStore', this.someData);
    },
    addFruit(item) {
      this.someData.push(item);
      console.log(this.someData);
      localStorage.storedData = this.someData;
      // localStorage.setItem('storedData', this.someData);
      window.location.reload();
    },
  },
  mounted() {
    localStorage.storedData = ['apple', 'orange'];
  },
};
</script>
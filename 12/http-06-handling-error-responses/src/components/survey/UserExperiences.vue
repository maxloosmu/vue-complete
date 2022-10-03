<template>
  <section>
    <keep-alive>
      <base-card>
        <h2>Submitted Experiences</h2>
        <div>
          <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
        </div>
        <p v-if="isLoading">Loading...</p>
        <p v-else-if="!isLoading && error">{{ error }}</p>
        <p
          v-else-if="!isLoading && (!results || results.length === 0)"
        >No stored experiences found. Start adding some survey results first.</p>
        <ul v-else-if="!isLoading && !error && results">
          <survey-result
            v-for="result in results"
            :key="result.id"
            :name="result.name"
            :rating="result.rating"
          ></survey-result>
        </ul>
      </base-card>
    </keep-alive>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  // Injecting 'results', 'isLoading', 'error' doesn't work.
  inject: ['newEntry'],
  data() {
    return {
      // oldEntry: {},
      results: [],
      isLoading: false,
      error: null,
    };
  },
  watch: {
    // Watch and Computed oldEntry does not work.  Endless repetitive triggering.
    // oldEntry: {
    //   handler: function(newEntry, oldValue) {
    //     if (newEntry != oldValue) {
    //       this.loadExperiences();
    //     }
    //   }
    // }
  },
  computed: {
    // oldEntry() {
    //   let resultsLen = this.results.length;
    //   console.log(resultsLen);
    //   if (resultsLen == 0) {
    //     return {};
    //   }
    //   else {
    //     let data = this.results[resultsLen - 1];
    //     return {
    //       name: data.name,
    //       rating: data.rating,
    //     };
    //   }
    // },
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      // Use Google Firebase Realtime Database.
      fetch('https://vue-complete-12-2-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const storedResults = [];
          for (const id in data) {
            storedResults.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = storedResults;
          console.log(this.results);
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = 'Failed to fetch data - please try again later.';
        });
    },
  },
  mounted() {
    // https://stackoverflow.com/questions/44983349/what-is-the-difference-between-updated-hook-and-watchers-in-vuejs
    this.loadExperiences();
    // window.location.reload();
  },
  updated() {
    // this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
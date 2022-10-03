<template>
  <div>
    <learning-survey></learning-survey>
    <user-experiences></user-experiences>
  </div>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
  provide() {
    return {
      newEntry: {},
      // results: [],
      // isLoading: false,
      // error: null,
    };
  },
  // data() {
  //   return {
  //     savedSurveyResults: [],
  //   };
  // },
  // methods: {
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
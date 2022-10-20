<template>
  <!-- keep alive fails for added link after page reload, so use https://stackoverflow.com/questions/43027499/vuex-state-on-page-refresh -->
  <keep-alive>
    <ul>
      <learning-resource
        v-for="res in resources"
        :key="res.id"
        :id="res.id"
        :title="res.title"
        :description="res.description"
        :link="res.link"
      ></learning-resource>
    </ul>
  </keep-alive>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  inject: ['resources'],
  components: {
    LearningResource
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
<template>
  <ul>
    <knowledge-element
      v-for="topic in topics9"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  inject: ['topics9'],
};
</script>
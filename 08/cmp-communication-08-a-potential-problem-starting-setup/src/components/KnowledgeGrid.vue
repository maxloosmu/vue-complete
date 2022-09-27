<template>
  <ul>
    <knowledge-element
      v-for="topic in topics3"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic2', $event)"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  props: ['topics3'],
  emits: ['select-topic2']
};
</script>
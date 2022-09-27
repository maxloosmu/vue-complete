<template>
  <section>
    <h2>Select a Topic</h2>
    <knowledge-grid :topics3="topics" @select-topic2="$emit('select-topic3', $event)"></knowledge-grid>
  </section>
</template>

<script>
export default {
  props: ['topics'],
  emits: ['select-topic3'],
};
</script>
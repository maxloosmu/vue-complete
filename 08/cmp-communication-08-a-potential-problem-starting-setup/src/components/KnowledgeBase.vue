<template>
  <section>
    <h2>Select a Topic</h2>
    <knowledge-grid :topics3="topics2" @select-topic2="$emit('select-topic3', $event)"></knowledge-grid>
  </section>
</template>

<script>
export default {
  props: ['topics2'],
  emits: ['select-topic3'],
};
</script>
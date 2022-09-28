<template>
  <div>
    <header>Goals</header>
    <ul>
      <li v-for="goal in goals" :key="goal">
        <slot :item="goal" another-prop="..."></slot>
      </li>
    </ul>
  </div>
  <div>
    <header>Things to do</header>
    <ul>
      <li v-for="(value, key) in tasks" :key="key">
        <slot :item="key" :value="value" :anotherProp="prop"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goals: ['Finish the course', 'Learn Vue'],
      tasks: {
        'sleep': 'needed, important', 
        'work': 'needed, important',
        'study': 'want, important',
        'marriage': 'want, not important',
      },
      prop: '...',
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
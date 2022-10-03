<template>
  <div>
    <the-header></the-header>
    <TheHeader />
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  // if register as 'the-header': TheHeader, can only use <the-header>
  components: {
    TheHeader,
    BadgeList: BadgeList,
    'user-info': UserInfo
  },
  data() {
    return {
      activeUser: {
        name: 'Max Loo',
        description: 'Site owner and admin',
        role: 'admin and amender',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
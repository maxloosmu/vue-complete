<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
    >Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
  </base-card>
  <!-- keep alive fails for added link after page reload, so use https://stackoverflow.com/questions/43027499/vuex-state-on-page-refresh -->
  <!-- Vuex also failed. -->
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
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
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  },
  computed: {
    // storedResources2() {
    //   const resource1 = {
    //     id: 'official-guide',
    //     title: 'Official Guide',
    //     description: 'The official Vue.js documentation.',
    //     link: 'https://vuejs.org',
    //   };
    //   let startupResources = [
    //     resource1,
    //     {
    //       id: 'google',
    //       title: 'Google',
    //       description: 'Learn to google...',
    //       link: 'https://google.org',
    //     },
    //   ];
    //   let lengthOfStore = this.$store.state.storedResources.length;
    //   console.log({'lengthOfStore': lengthOfStore});
    //   if (lengthOfStore > 2) {
    //     startupResources = this.$store.state.storedResources;
    //   }
    //   return startupResources;
    // },
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      let resourceArray = this.storedResources;
      // resourceArray.unshift(newResource);
      this.selectedTab = 'stored-resources';
      // this.$store.commit('updateStore', resourceArray);
      console.log(resourceArray);
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>
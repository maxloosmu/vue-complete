<template>
  <div>
    <section v-if="this.selectedTeam">
      <h2>{{ teamName }}</h2>
      <ul>
        <user-item
          v-for="member in members"
          :key="member.id"
          :name="member.fullName"
          :role="member.role"
        ></user-item>
      </ul>
      <router-link to="/teams/t2">Go to Team 2</router-link>
    </section>
    <section v-else-if="!this.selectedTeam && this.teamId">
      <team-not-found></team-not-found>
    </section>
  </div>
</template>

<script>
import UserItem from '../users/UserItem.vue';
import TeamNotFound from '../nav/TeamNotFound.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem,
    TeamNotFound,
  },
  data() {
    return {
      teamName: '',
      members: [],
      selectedTeam: '',
    };
  },
  computed: {
  },
  methods: {
    checkTeamName(teamId) {
      this.selectedTeam = this.teams.find((team) => team.id === teamId);
      if (!this.selectedTeam) {
        this.teamName = teamId;
        console.log(this.teamName);
        return this.teamName;
      }
      return teamId;
    },
    loadTeamMembers(teamId) {
      this.selectedTeam = this.teams.find((team) => team.id === teamId);
      if (this.selectedTeam) {
        const members = this.selectedTeam.members;
        const selectedMembers = [];
        for (const member of members) {
          const selectedUser = this.users.find((user) => user.id === member);
          selectedMembers.push(selectedUser);
        }
        this.members = selectedMembers;
        this.teamName = this.selectedTeam.name;
      }
      // else
    },
  },
  created() {
    // this.$route.path // /teams/t1
    this.loadTeamMembers(this.teamId);
    this.checkTeamName(this.teamId);
  },
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
      this.checkTeamName(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
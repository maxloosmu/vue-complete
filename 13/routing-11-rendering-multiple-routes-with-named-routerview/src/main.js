import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: {
        default: TeamsList,
        default3: UsersFooter, // default3 is placed in App.vue, which is the parent.
        footer: TeamsFooter,
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          components: {
            default: TeamMembers,
            default2: NotFound, // default2 is placed in TeamsList, which is the parent.
          },
          props: true
        } // /teams/t1
      ]
    }, // our-domain.com/teams => TeamsList
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');

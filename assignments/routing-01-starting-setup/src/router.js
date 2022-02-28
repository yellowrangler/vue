import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './pages/TeamsList.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './pages/UsersList.vue';
import UsersFooter from './pages/UsersFooter.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { path: '/teams', 
      name: 'teams',
      meta: { needsAuth:true },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        { 
          path: ':teamId', 
          name: 'team-members', 
          component: TeamMembers, 
          props: true 
        },
      ] 
    },
    { path: '/users', 
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);

    if (savedPosition)
    {
      return savedPosition;
    }

    return { left: 0, top: 0 };
  }
});

// this gets called before router transitoins from one page to another
// you can also pass a navigation object eg to login page
router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth){
    console.log('Needs auth');
  }

  // pass false to next to cancel route
  next();
});

router.afterEach(function(to, from) {
  console.log('Global afterEach');
  console.log(to, from);
  // good for sending analitics to log information
});

export default router;
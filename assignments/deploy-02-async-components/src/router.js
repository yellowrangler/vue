import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { publicPath } from '../vue.config.js';

// import CoachDetail from './pages/coaches/CoachDetail.vue';
// import CoachesList from './pages/coaches/CoachesList.vue';
// import CoachRegistration from './pages/coaches/CoachRegistration.vue';
// import ContactCoach from './pages/requests/ContactCoach.vue';
// import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
// import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

// const CoachDetail = defineAsyncComponent(() =>
//   import('./pages/coaches/CoachDetail.vue')
// );
const CoachRegistration = defineAsyncComponent(() =>
  import('./pages/coaches/CoachRegistration.vue')
);
// const ContactCoach = defineAsyncComponent(() =>
//   import('./pages/requests/ContactCoach.vue')
// );
const RequestsReceived = defineAsyncComponent(() =>
  import('./pages/requests/RequestsReceived.vue')
);
const UserAuth = defineAsyncComponent(() =>
  import('./pages/auth/UserAuth.vue')
);

const router = createRouter({
  history: createWebHashHistory(),
  base: publicPath,
  routes: [
    { path: '/', redirect: '/coaches' },
    { 
      path: '/coaches', 
      component: () => import('./pages/coaches/CoachesList.vue') 
    },
    { 
      path: '/coaches/:id', 
      component: () => import('./pages/coaches/CoachDetail.vue'), 
      props: true,
      children: [
        { 
          path: 'contact', 
          component: () => import('./pages/requests/ContactCoach.vue') 
        }
      ] 
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true }
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: { requiresAuth: true }
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;

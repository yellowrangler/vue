// import defineAsyncComponent from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { publicPath } from '../vue.config.js';

// import CoachesList from './pages/coaches/CoachesList.vue';
// import CoachDetail from './pages/coaches/CoachDetail.vue';
// import CoachRegistration from './pages/coaches/CoachRegistration.vue';
// import ContactCoach from './pages/requests/ContactCoach.vue';
// import RequestsReceived from './pages/requests/RequestsReceived.vue';
// import UserAuth from './pages/auth/UserAuth.vue';
// import NotFound from './pages/NotFound.vue';
import store from './store/index.js'

// const CoachDetail = defineAsyncComponent(() => import('./pages/coaches/CoachDetail.vue'));

const router = createRouter({
  history: createWebHashHistory(),
  base: publicPath,
  routes: [
    { 
      path: '/', 
      redirect: '/coaches' 
    },
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
      component: () => import('./pages/coaches/CoachRegistration.vue'),
      meta: {
        requiresAuth: true
      } 
    },
    { 
      path: '/requests', 
      component: () => import('./pages/requests/RequestsReceived.vue'), 
      meta: {
        requiresAuth: true
      } 
    },
    { 
      path: '/auth', 
      component: () => import('./pages/auth/UserAuth.vue'), 
      meta: {
        requiresUnauth: true
      } 
    },
    { 
      path: "/:notFound(.*)", 
      component: () => import('./pages/NotFound.vue')
     },
  ]
});

router.beforeEach(function(to, from, next){
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    console.log('in router '+store.getters.IsAuthenticated);
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.IsAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
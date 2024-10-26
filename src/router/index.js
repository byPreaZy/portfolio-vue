import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import HomeNotFound from '@/views/HomeNotFound.vue';
import AppAbout from '@/components/AppAbout.vue';
import AppFolio from '@/components/AppFolio.vue';
import AppContact from '@/components/AppContact.vue';

const routes = [
  { path: '/', component: HomeView,
    children: [
      { path: '', component: AppAbout },
      { path: 'about', component: AppAbout },
      { path: 'folio', component: AppFolio },
      { path: 'contact', component: AppContact }
    ]
  },
  { path: '/:catchAll(.*)', component: HomeNotFound }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

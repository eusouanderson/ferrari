import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/pages/AppFerrari.vue';  // Certifique-se de que esse caminho está correto
import AppSpritesFerrari from '../components/sprites/AppSpritesFerrari.vue';  // Certifique-se de que esse caminho está correto
import AppCanvas from '../view/pages/AppCanvas.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/daytona',
    name: 'AppSpritesFerrari',
    component: AppSpritesFerrari
  },
  {
    path: '/3d',
    name: 'AppCanvas',
    component: AppCanvas
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

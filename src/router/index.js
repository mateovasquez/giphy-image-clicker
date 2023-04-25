import { createRouter, createWebHistory } from 'vue-router'
import ImageClickerView from '../views/ImageClickerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/image-clicker',
    },
    {
      path: '/image-clicker',
      name: 'image-clicker',
      component: ImageClickerView,
    },
  ]
})

export default router

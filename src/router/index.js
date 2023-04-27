import { createRouter, createWebHistory } from 'vue-router'
import ImageClickerView from '../views/ImageClickerView.vue'
import CouponsAnalyzerView from '../views/CouponsAnalyzerView.vue'

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
    {
      path: '/coupons-analyzer',
      name: 'coupons-analyzer',
      component: CouponsAnalyzerView,
    },
  ]
})

export default router

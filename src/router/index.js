import { createRouter, createWebHistory } from 'vue-router'
import { front_routes } from '@/zems/Front/router/front_router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...front_routes],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router

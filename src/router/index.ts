import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/app',
      name: 'app',
      component: () => import('@/views/app/AppLayoutView.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/views/app/DashboardView.vue'),
        },
        {
          path: 'leaderboard',
          name: 'leaderboard',
          component: () => import('@/views/app/LeaderboardView.vue'),
        },
      ],
    },
  ],
})

export default router

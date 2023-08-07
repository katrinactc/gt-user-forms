import { createRouter, createWebHistory } from 'vue-router'

export enum RouteName {
  home = "home",
  userForms = "user-forms",
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.home,
      component: () => import('../views/home/index.vue')
    },
  ]
})

export default router

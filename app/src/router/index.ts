import { createRouter, createWebHistory } from 'vue-router'

export enum RouteName {
  home = "home",
  userForms = "user-forms",
}

const routes = [
  {
    path: '/',
    name: RouteName.home,
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/user-forms',
    name: RouteName.userForms,
    component: () => import('../views/user-forms/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

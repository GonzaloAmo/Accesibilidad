import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/Accesibilidad/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/inicioView.vue')
    },
    {
      path: '/dislexia',
      name: 'dislexia',
      component: () => import('@/views/DislexiaView.vue')
    },
    {
      path: '/daltonismo',
      name: 'daltonismo',
      component: () => import('@/views/DaltonismoView.vue')
    },
    {
      path: '/problemas-cognitivos',
      name: 'problemas-cognitivos',
      component: () => import('@/views/CognitivosView.vue')
    }
  ]
})

export default router

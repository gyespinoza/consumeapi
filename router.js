import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './src/views/home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HelloWorld,
    },
    {
        path: '/countries',
        name: 'countries',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('./src/views/countries/index.vue')
      }
  ],
})

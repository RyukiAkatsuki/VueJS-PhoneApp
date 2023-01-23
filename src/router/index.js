import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dial',
    name: 'dial',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/DialView.vue')
  },
  {
    path: '/contactlist',
    name: 'contactlist',
    component: () => import(/* webpackChunkName: "about" */ '@/views/ContactListView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

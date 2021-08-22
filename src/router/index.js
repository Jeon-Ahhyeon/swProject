import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import ('../views/Join.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import ('../views/Login.vue')
  },
  {
    path: '/read',
    name: 'Read',
    component: () => import ('../views/NewsRead.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import ('../views/News.vue')
  },
  {
    path: '/detail',
    name: 'ShopDetail',
    component: () => import ('../views/ShopDetail.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import ('../views/Shop.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

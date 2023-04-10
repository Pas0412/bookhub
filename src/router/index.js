import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import User from '@/views/User.vue'
import Cart from '@/components/Cart.vue'
import Favorites from '@/components/Favorites.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: 'cart',
          name: 'cart',
          component: Cart,
        },
        {
          path: 'favorites',
          name: 'favorites',
          component: Favorites,
        },
      ],
    },
  ]
})

export default router
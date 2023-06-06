import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import User from '@/views/User.vue'
import Cart from '@/components/Cart.vue'
import Favorite from '@/components/Favorite.vue'
import Search from '@/views/Search.vue'
import Detail from '@/views/Detail.vue'
import Signup from '@/views/Signup.vue'

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
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
      props: true
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
          path: 'favorite',
          name: 'favorite',
          component: Favorite,
        },
      ],
    },
  ]
})

export default router
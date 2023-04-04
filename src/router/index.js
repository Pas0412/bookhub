import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
          },
          {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
              index: 1
            }
          },
          {
            path: '/login',
            name: 'login',
            component: Login
          }
    ]
})

export default router
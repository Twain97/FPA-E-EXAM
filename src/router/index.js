import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home-page.vue'
import login from '@/pages/log-in.vue'
import signup from '@/pages/sign-up.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/signup',
      name:"signup",
      component:signup
    }
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/log-in.vue')
  //   }
  ]
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import landingPage from '@/pages/landingPage.vue'
import login from '@/pages/login.vue'
import signup from '@/pages/signup.vue'
import home from "@/pages/homePage.vue"
import examPage from "@/pages/examPage.vue"
import scorePage from "@/pages/scorePage.vue"
import confirmSignup from '@/views/confirmSignup.vue'
import confirmScore from '@/views/confirmScore.vue'
import manualLogin from '@/pages/manualLogin.vue'
import admin from '@/pages/admin.vue'
import adminLogin from '@/pages/adminLogin.vue'
import {auth} from '../firebase/firebase.js'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: landingPage
    },
    {
      path:'/adminLogin',
      name:'adminLogin',
      component:adminLogin
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
    },
    {
      path:'/manualLogin',
      name:"manualLogin",
      component:manualLogin
    },
    {
      path:'/confirmSignup',
      name:"confirmSignup",
      component:confirmSignup
    },
    {
      path:'/confirmScore',
      name:"confirmScore",
      component:confirmScore,
      meta:{
        requiresAuth : true,
      }
    },
    {
      path:'/admin',
      name:"admin",
      component:admin,
      meta:{
        requiresAuth : true,
      }
    },
    {
      path:"/home",
      name:"home",
      component:home,
      meta:{
        requiresAuth : true
      }
    },
    {
      path:"/scorePage",
      name:"scorePage",
      component:scorePage,
      meta:{
        requiresAuth : true,
      }
    },
    {
      path:"/examPage",
      name:"examPage",
      component:examPage,
      meta:{
        requiresAuth : true,
      }
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

auth.onAuthStateChanged((user)=>{
  if(!user){
    return router.push('/')
   }
  

  router.beforeEach(async(to)=>{
    
    if(to.path == '/' && auth.currentUser){
      return router.push(router.currentRoute)
    }
    if(to.path == '/login' && auth.currentUser){
      return router.push(router.currentRoute)
    }
    if(to.path == '/adminLogin' && auth.currentUser){
      return router.push(router.currentRoute)
    }
    if(to.path == '/signup' && auth.currentUser){
      return router.push(router.currentRoute)
    }
    if(to.path == '/admin' && !auth.currentUser){
      return router.push('/')
    }
    // if(to.path == '/admin' && auth.currentUser){
    //   if(auth.currentUser.displayName != 'admin'){
    //     console.log("Authenticated user intruding to admin page")
    //     return router.push('/home') // Ha! Nobody goes into the admin page but the admin alone(*_*)
    //   }
    // }
    if(to.path == '/Home' && !auth.currentUser){
      return router.push('/')
    }
    if(to.path == '/scorePage' && !auth.currentUser){
      return router.push('/')
    }
    if(to.path == '/examPage' && !auth.currentUser){
      return router.push('/')
    }
    if(to.path == '/confirmScore' && !auth.currentUser){
      return router.push('/')
    }
  })
})

export default router

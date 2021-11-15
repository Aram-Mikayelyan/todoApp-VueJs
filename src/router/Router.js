import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default  new Router({
  routes: [
    { 
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    { 
      path: '/about-us',
      name: 'about-us',
      component: () => import('@/views/AboutUs.vue'),
    },
    { 
      path: '/info',
      name: 'info',
      component: () => import('@/views/Info.vue'),
    },
    
  ]
})
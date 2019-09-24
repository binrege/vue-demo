import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./views/Demo.vue')
    },
    {
      path: '/about',
      name: 'about',
     
      component: () => import('./views/About.vue')
    },
    {
      path: '/test',
      name: 'test',
     
      component: () => import('./views/Test.vue')
    },
    {
      path: '/parent',
      name: 'parent',
     
      component: () => import('./views/Parent.vue')
    },
    {
      path: '/content',
      name: 'content',
     
      component: () => import('./views/Content.vue')
    },
    {
      path: '/axios',
      name: 'axios',
     
      component: () => import('./views/Axios.vue')
    }
  ]
})

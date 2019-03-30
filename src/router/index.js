import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
        keepAlive:false,
      },
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      meta:{
        keepAlive:true,
      },
      component: () => import('../views/About.vue')
    }
  ]
})
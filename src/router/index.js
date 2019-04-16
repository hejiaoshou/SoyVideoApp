import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/', 
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      meta:{
        keepAlive:true,
      },
      component: Home,
    },//首页
    {
      path: '/classify',
      name: 'classify',
      meta:{
        keepAlive:true,
      },
      component: () => import('../views/classify/classify.vue')
    },//分类
    {
      path: '/discover',
      name: 'discover',
      meta:{
        keepAlive:true,
      },
      component: () => import('../views/discover/discover.vue')
    },//发现
    {
      path: '/my',
      name: 'my',
      meta:{
        keepAlive:true,
      },
      component: () => import('../views/my/my.vue')
    },//我的
    {
      path:'/login',
      name:'login',
      meta:{
        keepAlive:true,
      },
      component: () => import('../views/user/login/login.vue')
    },//登录
    {
      path:'/protocol',
      name:'protocol',
      meta:{
        keepAlive:true,
      },
      component: () => import('../views/user/protocol/protocol.vue')
    },//用户协议
  ]
})
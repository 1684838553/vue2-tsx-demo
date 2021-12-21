import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { IRoute } from '../types/interface'

Vue.use(VueRouter)

// 匹配路由
export const routes: Array<any > = [
  {
    path: '/',
    redirect:'/home',
    private:false,
  },
  {
    path: '*',
    name: '404',
    private:false,
    component: ()=>import('../views/error/404')
  },
  {
    path: '/home',
    name: '首页',
    private:true,
    icon:'home',
    component: ()=>import('../views/home/home')
  },
  {
    path: '/login',
    name: '登录',
    private:false,
    component: ()=>import('../views/login/login')
  },
  {
    path: '/account',
    name: '个人页',
    icon:'user',
    private:true,
    component:()=>import('../views/account/index'),
    children:[
      {
        path: '/account/personSet',
        name: '个人设置',
        private:true,
        icon:'user',
        component: ()=>import('../views/account/personSet/personSet')
      },
      {
        path: '/account/baseInfo',
        name: '个人中心',
        private:true,
        icon:'user',
        component: ()=>import('../views/account/baseInfo/baseInfo')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

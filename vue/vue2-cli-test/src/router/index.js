/*
 * @Author: xujintai
 * @Date: 2021-01-22 16:06:21
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-22 20:01:51
 * @Description: file content
 * @FilePath: \CoreCode\vue\vue2-cli-test\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/List',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../components/List')
  },  {
    path: '/slot-test',
    name: 'slot-test',
    component: () => import(/* webpackChunkName: "about" */ '../components/slot-test')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

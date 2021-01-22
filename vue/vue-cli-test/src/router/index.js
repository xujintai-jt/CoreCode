/*
 * @Author: xujintai
 * @Date: 2021-01-22 15:18:49
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-22 15:34:49
 * @Description: file content
 * @FilePath: \CoreCode\vue\vue-cli-test\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/List',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../components/List')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

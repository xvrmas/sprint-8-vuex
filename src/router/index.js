import Vue from 'vue'
import VueRouter from 'vue-router'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/AuthView'
  },
  {
    path: '/ListStarships',
    redirect: '/AuthView'
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/ListStarships',
    name: 'ListStarships',
    component: () => import('../views/ListStarships.vue'),
    meta: {
      auntentificado: true
    }
  },
  {
    path: '/panell',
    name: 'panell',
    component: () => import('../views/panell.vue')
  },
  {
    path: '/AuthView',
    name: 'AuthView',
    component: () => import('../views/AuthView.vue'),

  },
  {
    path: '/RegPage',
    name: 'RegPage',
    component: () => import('../views/RegPage.vue'),

  }

]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router

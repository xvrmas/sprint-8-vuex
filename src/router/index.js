import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/ListStarships',
    name: 'ListStarships',
    component: () => import('../views/ListStarships.vue')
  },
  {
    path: '/InfoStarship',
    name: 'InfoStarship',
    component: () => import('../views/InfoStarship.vue')
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: () => import('../views/LoginPage.vue')
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

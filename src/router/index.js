import Vue from 'vue'
import VueRouter from 'vue-router' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'chart', 
    redirect: '/chart'
  },
  {
    path: '/chart',
    name: 'chart', 
    redirect: '/chart/line',
    component: () => import('../views/main/index.vue'),
    children: [{
      path: 'line',
      name: 'line', 
      component: () => import('../views/chart/line/index.vue')
    },
    {
      path: 'bar',
      name: 'bar', 
      component: () => import('../views/chart/bar/index.vue')
    },
    {
      path: 'pie',
      name: 'pie', 
      component: () => import('../views/chart/pie/index.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

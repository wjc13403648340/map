import Vue from 'vue'
import VueRouter from 'vue-router'
import Production from '@/views/production'

const routes = [
  
  {
    path:'/',
    name:'Production',
    component:Production
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})



export default router







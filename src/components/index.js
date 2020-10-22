import Vue from 'vue';
import Chart from './chart'
const ECharts = () => import('./echarts')
const Map = () => import('./map')
const Swiper = () => import('./swiper')

Vue.component('JChart',Chart)
Vue.component('JECharts',ECharts)
Vue.component('JMap',Map)
Vue.component('JSwiper',Swiper)
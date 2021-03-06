import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Mock from './mock'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import echarts from 'echarts'
import './components'

import utils from './utils'

Vue.prototype.$utils = utils

Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

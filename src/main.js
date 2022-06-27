import Vue from 'vue'
import App from './App.vue'

import * as echarts from 'echarts'; //引入echarts
Vue.prototype.$echarts = echarts //全局引用echarts

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';1
import axios from 'axios';
import jquery from 'jquery';
Vue.config.productionTip = false


import ajax from '@/api/request.js'

axios.defaults.withCredentials=true //跨域访问session同步
Vue.use(ElementUI)
Vue.prototype.$axios=axios
Vue.prototype.$jquery=jquery

Vue.prototype.$ajax=ajax

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

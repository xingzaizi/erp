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

//cors
// var cors=require('cors');
// Vue.use(cors({
//     origin:['http://localhost:8080'],  //指定接收的地址
//     methods:['GET','POST'],  //指定接收的请求类型
//     alloweHeaders:['Content-Type','Authorization']  //指定header
// }))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 手机300ms延时问题
import fastClick from 'fastclick'
//css样式初始化
import './assets/styles/border.css'
import './assets/styles/reset.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//router:router
  components: { App },
  template: '<App/>'
})

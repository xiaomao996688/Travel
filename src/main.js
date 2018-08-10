// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 手机300ms延时问题
import fastClick from 'fastclick'
//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 公用数据
import store from './store/index'
import 'swiper/dist/css/swiper.css'
//css样式初始化
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//router:router
  store,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import 'lib-flexible/flexible.js';
import 'lib-flexible';
import './css/public.css';
// 引入vuex
import store from './store/index';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 必须在根实例下注册store
  store,
  components: { App},
  template: '<App/>'
})



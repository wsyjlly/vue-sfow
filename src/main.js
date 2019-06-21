// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'

import Vue from '../static/frames/vue';
import axios from '../static/frames/axios';
import jquery from '../static/frames/jquery';
import swiper from '../static/frames/swiper/swiper';
import store from './store';
import router from './router';
import "../static/frames/swiper/swiper.css"
import "../static/frames/flex.css"

Vue.prototype.axios = axios;
Vue.prototype.$ = jquery;
Vue.prototype.swiper = swiper;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

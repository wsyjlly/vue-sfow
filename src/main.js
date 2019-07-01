// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import iView from "iview"
import "iview/dist/styles/iview.css"
import Vue from '../static/frames/vue';
import axios from '../static/frames/axios';
import jquery from '../static/frames/jquery';
import swiper from '../static/frames/swiper/swiper';
import map from '../static/frames/baidu-map';
import store from './store';
import router from './router';

import "../static/frames/swiper/swiper.css"
import "../static/frames/flex.css"
import "../static/frames/animate.css"

axios.defaults.baseURL = 'http://47.102.210.175:8080';
Vue.prototype.axios = axios;
Vue.prototype.$ = jquery;
Vue.prototype.map = map;
Vue.prototype.swiper = swiper;
Vue.config.productionTip = false;


Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

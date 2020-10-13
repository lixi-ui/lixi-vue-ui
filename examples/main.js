import Vue from "vue";
import App from "./app.vue";

import router from './router/index.js';

import dome from "./compoments/demo.vue";

import demoBlock from './compoments/demo-block';
import MainHeader from './compoments/main-header';
import MainContent from './compoments/main-content';
import MainFooter from './compoments/main-footer';

import '../src/style/src/index.scss';
import './style/index.scss';

import Lxv from "../src/index.js";

Vue.use(Lxv);
Vue.component(dome.name, dome);
Vue.component('demo-block', demoBlock);
Vue.component('main-header', MainHeader);
Vue.component('main-content', MainContent);
Vue.component('main-footer', MainFooter);


new Vue({
  el: "#app",
  render: function(h) { return h(App); },
  router
});
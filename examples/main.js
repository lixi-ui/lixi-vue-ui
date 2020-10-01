import Vue from "vue";
import App from "./app.vue";
// import router from "vue-router";


// import routerConf from "./router/index.js";
// import compoment from "./compoment/index.js";
// import Store from "./store/index.js";


// router(routerConf);

// vue.use(compoment);
// router,
// Store

import Lxv from "../src/index.js";

console.log(Lxv);

Vue.use(Lxv);

new Vue({
  // render: h => h(App),
  el: "#app",
  render: function(h) { return h(App); },
});
import LxvButton from "./compoments/button/package/index.ts";
import LxvDropdown from "./compoments/dropdown/package/index.ts";
import LxvDemo from "./compoments/button/demo/index.vue";
import LxveButton from "../extend/project/lixi-extend/src/compoments/button/demo/index.vue";
import LxveDemo from "../extend/project/lixi-extend/src/compoments/button/demo/index.vue";

var install = function(Vue){
  Vue.component(LxvButton.name, LxvButton);
  Vue.component(LxvDropdown.name, LxvDropdown);
  Vue.component(LxvDemo.name, LxvDemo);
  Vue.component(LxveButton.name, LxveButton);
  Vue.component(LxveDemo.name, LxveDemo);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  LxvButton
}
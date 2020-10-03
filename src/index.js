import LxvButton from "./button/package/index.ts"
import LxvDemo from "./button/demo/index.vue"

var install = function(Vue){
  Vue.component(LxvButton.name, LxvButton)
  Vue.component(LxvDemo.name, LxvDemo)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  LxvButton
}
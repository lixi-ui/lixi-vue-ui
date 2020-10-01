import LxvButton from "./button/package/index.ts"

var install = function(Vue){
  Vue.component(LxvButton.name, LxvButton)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  LxvButton
}
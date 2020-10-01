import LxvButton from './index.vue';

/* istanbul ignore next */
LxvButton.install = function(Vue) {
  Vue.component(LxvButton.name, LxvButton);
};

export default LxvButton;
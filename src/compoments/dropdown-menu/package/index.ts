import ElDropdownItem from '../../dropdown/package/dropdown-menu.vue';

/* istanbul ignore next */
ElDropdownItem.install = function(Vue) {
  Vue.component(ElDropdownItem.name, ElDropdownItem);
};

export default ElDropdownItem;

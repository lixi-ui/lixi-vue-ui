import 'jsdom-global/register';
import { createVue } from "../../../../test/unit.js";
import { mount } from '@vue/test-utils';

import Component from '../package/index.ts';
import buttonDemo from '../demo/index.vue';

describe('Component', () => {
  test('button click', () => {
    const wrapper = mount(buttonDemo);
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})
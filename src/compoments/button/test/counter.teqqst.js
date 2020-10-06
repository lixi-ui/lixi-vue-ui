import 'jsdom-global/register';
import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Counter from '../package/counter.vue'

describe('Counter.vue', () => {
  it('increments count when button is clicked', async () => {
    const wrapper = shallowMount(Counter)
    wrapper.find('button').trigger('click')
    await Vue.nextTick()
    expect(wrapper.find('div').text()).toMatch('1')
  })
})
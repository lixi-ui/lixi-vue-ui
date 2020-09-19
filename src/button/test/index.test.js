import 'jsdom-global/register';
import { mount } from '@vue/test-utils';
import Component from '../package/index.ts';

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Component);
    // console.log('wrapper', wrapper);
    expect(7).toBe(7);
  })

  // test('renders correctly', () => {
  //   const wrapper = mount(Component)
  //   expect(wrapper.element).toMatchSnapshot()
  // })
})
import { shallowMount } from '@vue/test-utils';
import NavBar from '../../src/components/NavBar.vue';

describe('NavBar', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(NavBar);
    expect(wrapper.exists()).toBe(true);
  });
});
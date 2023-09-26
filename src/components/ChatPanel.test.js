import { mount } from '@vue/test-utils';
import ChatPanel from './ChatPanel.vue';

describe('ChatPanel', () => {
  it('Renderiza correctamente', () => {
    const wrapper = mount(ChatPanel);
    expect(wrapper.exists()).toBe(true);
  });
});
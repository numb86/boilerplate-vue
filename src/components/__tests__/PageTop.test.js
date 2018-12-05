import {shallowMount} from '@vue/test-utils';

import PageTop from '../PageTop.vue';

const assert = require('assert');

describe('PageTop', () => {
  it('text', () => {
    const wrapper = shallowMount(PageTop);
    assert.equal(wrapper.text(), 'This is top page.');
  });
});

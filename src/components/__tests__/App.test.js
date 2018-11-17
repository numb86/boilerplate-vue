import {shallowMount} from '@vue/test-utils';

import App from '../App.vue';

const assert = require('assert');

describe('PowerAssert', () => {
  describe('Object', () => {
    it('test01', () => {
      const obj = {a: 1, b: 2};
      const ary = ['first', 9, obj];
      const index = 2;
      assert.equal(ary[index].a, 1);
    });
  });
  describe('Vue', () => {
    it('shallowMount', () => {
      const wrapper = shallowMount(App);
      assert.equal(wrapper.text(), 'Hello Vue!');
    });
  });
});

const assert = require('assert');

describe('PowerAssert', () => {
  describe('Object', () => {
    it('test01', () => {
      const obj = {a: 1, b: 2};
      const ary = ['first', 9, obj];
      const index = 2;
      assert.equal(ary[index].a, 3);
    });
  });
});

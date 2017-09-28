var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-chunk');

describe('next/chunk', function () {

  it('nx.chunk [1,2,3,4,5,6,7,8,9] ', function () {
    var arr = [1,2,3,4,5,6,7,8,9];
    var res = nx.chunk(arr, 3);

    assert.equal(res.length, 3);
    assert.deepEqual(res[2], [7,8,9]);
  });


  it('nx.chunk [1,2,3,4,5,6,7,8] ', function () {
    var arr = [1,2,3,4,5,6,7,8];
    var res = nx.chunk(arr, 3);

    assert.equal(res.length, 3);
    assert.deepEqual(res[2], [7,8]);
  });


});

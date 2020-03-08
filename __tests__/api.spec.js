const nx = require('@feizheng/next-js-core2');
require('../src/next-chunk');

describe('api.basic test', () => {
  test('nx.chunk [1,2,3,4,5,6,7,8,9] ', function() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var res = nx.chunk(arr, 3);

    expect(res.length).toBe(3);
    expect(res[2]).toEqual([7, 8, 9]);
  });

  test('nx.chunk [1,2,3,4,5,6,7,8] ', function() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8];
    var res = nx.chunk(arr, 3);

    expect(res.length).toBe(3);
    expect(res[2]).toEqual([7, 8]);
  });

  test('nx.chunk split small array size === limit', function() {
    var arr = [1, 2, 3];
    var res = nx.chunk(arr, 3);
    expect(res.length).toBe(1);
    expect(res[0]).toEqual([1, 2, 3]);
  });

  test('nx.chunk split small array size < limit', function() {
    var arr = [1, 2];
    var res = nx.chunk(arr, 3);
    expect(res.length).toBe(1);
    expect(res[0]).toEqual([1, 2]);
  });
});

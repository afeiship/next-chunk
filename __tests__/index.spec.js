(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.chunk [1,2,3,4,5,6,7,8,9] ', function () {
      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      var res = nx.chunk(arr, 3);

      expect(res.length).toBe(3);
      expect(res[2]).toEqual([7, 8, 9]);
    });

    test('nx.chunk [1,2,3,4,5,6,7,8] ', function () {
      var arr = [1, 2, 3, 4, 5, 6, 7, 8];
      var res = nx.chunk(arr, 3);

      expect(res.length).toBe(3);
      expect(res[2]).toEqual([7, 8]);
    });

    test('nx.chunk split small array size === limit', function () {
      var arr = [1, 2, 3];
      var res = nx.chunk(arr, 3);
      expect(res.length).toBe(1);
      expect(res[0]).toEqual([1, 2, 3]);
    });

    test('nx.chunk split small array size < limit', function () {
      var arr = [1, 2];
      var res = nx.chunk(arr, 3);
      expect(res.length).toBe(1);
      expect(res[0]).toEqual([1, 2]);
    });

    test('support buffer/file target', function () {
      var buf = Buffer.from('buffer');
      var res = nx.chunk(buf, 2);
      expect(res[0].toString()).toBe('bu');
      expect(res[1].toString()).toBe('ff');
      expect(res[2].toString()).toBe('er');
    });
  });
})();

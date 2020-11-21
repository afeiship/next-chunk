/*!
 * name: @jswork/next-chunk
 * description: Creates an array of elements split into groups the length of size.
 * homepage: https://github.com/afeiship/next-chunk
 * version: 1.0.0
 * date: 2020-11-21 09:19:47
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.chunk = function (inArray, inChunk) {
    var size = Math.ceil(inArray.length / inChunk);
    var list = [];

    //generate chunkList:
    for (var index = 0; index < size; index++) {
      list.push([index * inChunk, (index + 1) * inChunk]);
    }

    return list.map(function (item) {
      return inArray.slice.apply(inArray, item);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.chunk;
  }
})();
/*!
 * name: @jswork/next-chunk
 * description: Creates an array of elements split into groups the length of size.
 * homepage: https://github.com/afeiship/next-chunk
 * version: 1.0.2
 * date: 2021-03-18 09:30:01
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var FUNC = 'function';

  nx.chunk = function (inTarget, inChunk) {
    if (!inTarget || typeof inTarget.slice !== FUNC) return inTarget;
    var length = inTarget.length || inTarget.size;
    var size = Math.ceil(length / inChunk);
    var list = [];

    //generate chunkList:
    for (var index = 0; index < size; index++) {
      list.push([index * inChunk, (index + 1) * inChunk]);
    }

    return list.map(function (item) {
      return inTarget.slice.apply(inTarget, item);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.chunk;
  }
})();

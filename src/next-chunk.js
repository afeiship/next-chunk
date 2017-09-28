(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var ARRAY_PROTO = Array.prototype;

  nx.chunk = function (inArray, inOffset) {
    var maxSize = Math.ceil(inArray.length / inOffset);
    var sliceList = [],
      chunkList = [];

    //generate chunkList:
    for (var index = 0; index < maxSize; index++) {
      sliceList.push([
        index * inOffset,
        (index + 1) * inOffset
      ]);
    }

    sliceList
      .forEach(function (item) {
        chunkList.push(inArray.slice.apply(inArray, item))
      });

    return chunkList;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.chunk;
  }

}());

(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.chunk = function (inArray, inOffset) {
    var size = Math.ceil(inArray.length / inOffset);
    var list = [];

    //generate chunkList:
    for (var index = 0; index < size; index++) {
      list.push([
        index * inOffset,
        (index + 1) * inOffset
      ]);
    }

    return list.map(function (item) {
      return inArray.slice.apply(inArray, item);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.chunk;
  }

}());

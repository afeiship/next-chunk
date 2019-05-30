# next-chunk
> Creates an array of elements split into groups the length of size If array can&#39;t be split evenly, the final chunk will be the remaining elements

## installation
```bash
npm install -S afeiship/next-chunk --registry=https://registry.npm.taobao.org
```

## usage:
```js
var arr = [1,2,3,4,5,6,7,8];
var res = nx.chunk(arr, 3);

/*
  [ 
    [ 1, 2, 3 ], 
    [ 4, 5, 6 ], 
    [ 7, 8 ] 
  ]
*/
```

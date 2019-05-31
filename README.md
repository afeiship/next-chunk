# next-chunk
> Creates an array of elements split into groups the length of size If array can&#39;t be split evenly, the final chunk will be the remaining elements

## installation
```bash
npm install -S afeiship/next-chunk --registry=https://registry.npm.taobao.org
```

## apis
| api      | type              | description          |
| -------- | ----------------- | -------------------- |
| nx.chunk | (inArray,inChunk) | Create split chunks |

## usage
```js
// es6
import nxChunk from 'next-chunk';

// es5
const nxChunk from 'next-chunk';


const arr = [1,2,3,4,5,6,7,8];
const res = nxChunk(arr, 3);

/*
  [ 
    [ 1, 2, 3 ], 
    [ 4, 5, 6 ], 
    [ 7, 8 ] 
  ]
*/
```

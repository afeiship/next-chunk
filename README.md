# next-chunk
> Creates an array of elements split into groups the length of size.

## installation
```bash
npm install -S @feizheng/next-chunk
```

## apis
| api      | type              | description         |
| -------- | ----------------- | ------------------- |
| nx.chunk | (inArray,inChunk) | Create split chunks |

## usage
```js
import '@feizheng/next-chunk';

const arr = [1,2,3,4,5,6,7,8];
const res = nx.chunk(arr, 3);

/*
  [ 
    [ 1, 2, 3 ], 
    [ 4, 5, 6 ], 
    [ 7, 8 ] 
  ]
*/
```

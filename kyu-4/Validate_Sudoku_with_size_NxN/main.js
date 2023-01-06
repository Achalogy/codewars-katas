function isValid(data) {

  let blockSize = Math.sqrt(data[0].length);
  if(!Number.isInteger(blockSize)) {
    return false
  }

  let rows = data
  let columns = data[0].map((x, i) => data.map((x) => x[i]));

  
  let blocks = new Array(rows.length).fill([])

  data.map((x, i) => {
    let pos = Math.floor(i / blockSize) * blockSize;
    
    x.reduce((acc, curr, i) => {
      acc[Math.floor(i / blockSize)] =
      acc[Math.floor(i / blockSize)].concat(curr);
      
      return acc
    }, new Array(blockSize).fill([]))
    .map((y, a) => {
      blocks[pos + a] = blocks[pos + a].concat(y)
    })
  });
  
  let checkRange = [...Array(rows.length).keys()].map(n => ++n)
  
  console.log(blocks[0])
  return [rows, columns, blocks].flat().every((row) => {
    return checkRange.every((n) => row.includes(n));
  });

}

isValid([
  [7, 8, 4, 1, 5, 9, 3, 2, 6],
  [5, 3, 9, 6, 7, 2, 8, 4, 1],
  [6, 1, 2, 4, 3, 8, 7, 5, 9],

  [9, 2, 8, 7, 1, 5, 4, 6, 3],
  [3, 5, 7, 8, 4, 6, 1, 9, 2],
  [4, 6, 1, 9, 2, 3, 5, 8, 7],

  [8, 7, 6, 3, 9, 4, 2, 1, 5],
  [2, 4, 3, 5, 6, 1, 9, 7, 8],
  [1, 9, 5, 2, 8, 7, 6, 3, 4],
]);
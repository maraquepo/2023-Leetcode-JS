/*
@param {number[][]} matrix
@return {void} Do not return anything, modify matrix in-place instead
*/

let setZeroes = (matrix) => {
  let rows = new Set()
  let columns = new Set()

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        columns.add(j)
      }
    }
  }

  for (let i of rows) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[i][j] = 0;
    }
  }

  for (let j of columns) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][j] = 0
    }
  }
}

// O(1)

let setZeroes2 = (matrix) => {
  let firstRowHasZero = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
        if (i === 0) {
          firstRowHasZero = true;
        }
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  if (firstRowHasZero) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0
    }
  }
}

/*
[   0  1  2
0  [1, 2, 3],
1  [3, 0, 0],
2  [6, 2, 1]
]
[   0  1  2
0  [1, 2, 3],
1  [0, 0, 0],
2  [6, 2, 1]
]
[   0  1  2
0  [1, 0, 3],
1  [0, 0, 0],
2  [6, 0, 1]
]
[   0  1  2
0  [1, 0, 0],
1  [0, 0, 0],
2  [6, 0, 0]
]
matrix [1,1] === 0
rows: { 1 }
cols: { 1, 2}

1
matrix[1][0] = 0
matrix[1][1] = 0
matrix[1][2] = 0

1 , 2
matrix[0][1] = 0
matrix[1][1] = 0
matrix[2][1] = 0
matrix[0][2] = 0
matrix[1][2] = 0
matrix[2][2] = 0


[   0  1  2
0  [0, 2, 3],
1  [3, 0, 0],
2  [6, 2, 1]
]

[   0  1  2
0  [1, 0, 0],
1  [0, 0, 0],
2  [6, 0, 0]
]

i - row { 1 }
j - col { 1, 2}


*/
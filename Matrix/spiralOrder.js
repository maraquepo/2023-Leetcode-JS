let spiralOrder = (matrix) => {
  let result = []

  let rowBegin = 0
  let rowEnd = matrix.length - 1;
  let colBegin = 0
  let colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // add going right
    for (let i = colBegin; i <= colEnd; i++) {
      result.push(matrix[rowBegin][i]);
    }

    rowBegin++;
    // add going down
    for (let i = rowBegin; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd])
    }

    colEnd--;
    // add going left
    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        result.push(matrix[rowEnd][i])
      }
    }

    rowEnd--;
    // add going up
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        result.push(matrix[i][colBegin])
      }
    }

    colBegin++;
  }
  return result;
}

/*
[ [1,2,3],
  [4,5,6],
  [7,8,9]
]

rowBegin = 1
rowEnd = 1
colBegin = 1
colEnd = 1

i = 1 to i = 2
i = 1 to i
  [,5,]


result = [1,2,3,6,9, 8, 7, 5]


*/
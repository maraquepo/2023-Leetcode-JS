let rotate = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[0].length - 1 - j]
      matrix[i][matrix[0].length - j - 1] = temp;
    }
  }
}

/*
[a, b, c, d, e]
length = 5
0 -> 4
4 -> 0
1 -> 3
3 -> 1

matrix[0,0] =matrix[0, length - 1 - 0]
matrix[0,1] =matrix[0, length - 1 - 1]


[ [a,b,c]
  [e,f,g]
  [i,j,k]
]
[ [i,e,a]
  [j,f,b]
  [k,g,c]
]

temp = b [0,1]
matrix[0,1] = matrix[1,0]
matrix[1,0] = b

temp = c [0,2]
matrix[0,2] = matrix[2,0]
matrix[2,0] = c

temp = g [1,2]
matrix[1,2] = matrix[2,1]
matrix[2,1] = temp
i = 1

i = 0 to 2
j = 0 to 1.5

temp = a [0,0]
matrix[0,0] = matrix[0,3 - 0 - 1]
matrix[0,0] = matrix[0, 2]
matrix[0,2] = temp
*/
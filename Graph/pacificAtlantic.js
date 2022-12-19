const pacificAtlantic = (matrix) => {
  if (matrix.length === 0) return [];
  let rows = matrix.length;
  let cols = matrix[0].length;

  // used to store boolean values indicating whether a cell can be reached by water from the respective ocean
  let atlantic = []
  let pacific = []

  // stores cells that can reach both oceans
  let result = []


  // intialize each cell with false for both oceans
  for (let i = 0; i < rows; i++) {
    atlantic.push(new Array(cols).fill(false))
    pacific.push(new Array(cols).fill(false))
  }

  // iterates over the columns of the matrix,
  for (let col = 0; col < matrix[0].length; col++) {
    // top border
    dfs(matrix, 0, col, 0, pacific)
    // bottom border
    dfs(matrix, rows - 1, col, 0, atlantic)
  }

  for (let row = 0; row < matrix.length; row++) {
    // left border
    dfs(matrix, row, 0, 0, pacific)
    // right border
    dfs(matrix, row, cols - 1, 0, atlantic)
  }

  // iterate through each cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // if given cell can reach both oceans
      if (atlantic[i][j] && pacific[i][j]) {
        // push to results
        result.push([i, j])
      }
    }
  }

  return result;
}

// marks the cell as reachable by water on the provided ocean, and then recursively calls itself on the cells that are directly adjacent to the current cell.
const dfs = (matrix, i, j, prev, ocean) => {
  // make sure that current coordingate is within bounds of the matrix
  if (i < 0 || i > matrix.length - 1 || j < 0 || j > matrix[i].length - 1) return;

  // if previous cell is higher than current cell, return
  if (matrix[i][j] < prev) return;

  // ocean is already marked as true, return
  if (ocean[i][j]) return

  // at this point, current cell is higher or same level as the prev cell
  // mark it as true
  ocean[i][j] = true

  // move down
  dfs(matrix, i+1, j, matrix[i][j], ocean)
  // move up
  dfs(matrix, i - 1, j, matrix[i][j], ocean)
  // move right
  dfs(matrix, i, j + 1, matrix[i][j], ocean)
  // move left
  dfs(matrix, i, j-1, matrix[i][j], ocean)
}
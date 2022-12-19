/**
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = (grid) => {

  // store number of islands count
  let numIslands = 0;

  // iterate through each cell
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // if curren cell is 1
      if (grid[i][j] === '1') {
        // add to number of island counter as we dfs the island
        numIslands += dfs(grid, i, j)
      }
    }
  }

  return numIslands
}

const dfs = (grid, i, j) => {
  // makes sure that we're withing bounderies of matrix, and if current cell is 0, return 0
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
    return 0;
  }

  // mark current cell as 0
  grid[i][j] = '0';

  // traverse right
  dfs(grid, i + 1, j);
  // traverse left
  dfs(grid, i - 1, j);
  // traverse down
  dfs(grid, i, j + 1);
  // traverse up
  dfs(grid, i, j - 1);

  return 1;
}
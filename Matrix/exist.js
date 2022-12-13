/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const exist = (board, word) => {
  const height = board.length;
  const width = board[0].length;

  const dfs = (row, col, i) => {
    // check if cell we are on is within the bounds of the board and if current cell we are on matches the current character of the word we're on
    if (row >= height || row < 0 || col >= width || col < 0 || board[row][col] !== word[i]) {
      return false;
    }
    // we have reached the end of the word
    if (i === word.length - 1) {
      return true;
    }

    // mark cell we visit as null if it exists in 'word'
    board[row][col] = null;

    // used to store the result of the recursive search for the word in the adjacent cells
    const found =
      // down
      dfs(row + 1, col, i + 1) ||
      // up
      dfs(row - 1, col, i + 1) ||
      // right
      dfs(row, col + 1, i + 1) ||
      // left
      dfs(row, col - 1, i + 1);

    // debugger goes between 25 and 27 as each letter is restored
    board[row][col] = word[i];

    return found;
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0)) {
          return true;
        }
      }
    }
  }
  return false;
}
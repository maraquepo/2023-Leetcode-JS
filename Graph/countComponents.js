/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

const countComponents = function(n, edges) {
  let adjacencyList = new Map();
  for (let i = 0; i < n; i++) {
    adjacencyList.set(i, [])
  }

  for (let [u, v] of edges) {
    adjacencyList.get(u).push(v)
    adjacencyList.get(v).push(u)
  }

  let visited = new Set()

  let units = 0;

  let dfs = (node) => {
    // mark current node as visited
    visited.add(node)
    // iterate through neighbors of the current node
    for (const neighbor of adjacencyList.get(node)) {
      // if that neighbor hasn't been visited
      if (!visited.has(neighbor)) {
        // recursively calls itself w/ neighbor as current node to traverse to the next node
        dfs(neighbor)
      }
    }
  }

  // iterate through nodes
  for (let i = 0; i < n; i++) {
    // if node hasn't been visited
    if (!visited.has(i)) {
      // increment units by 1
      units++;
      // search down graph
      dfs(i)
    }
  }
  return units;
};

/*


*/
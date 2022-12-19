/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

let validPath = (n, edges, source, destination) => {
  let adjList = new Map();
  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }

  for (const [u, v] of edges) {
    adjList.get(u).push(v);
    adjList.get(v).push(u);
  }

  let visited = new Set();

  let dfs = (node) => {
    visited.add(node);

    if (adjList.has(node)) {
      for (const neighbor of adjList.get(node)) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    }
  };

  dfs(source);

  return visited.has(destination);
};

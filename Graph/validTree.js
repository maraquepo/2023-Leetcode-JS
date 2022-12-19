/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

const validTree = (n, edges) => {
  if (edges.length === 0) {
    return n === 1;
  }

  // node = key, values = neightbors
  let adjacencyList = new Map();
  for (let i = 0; i < n; i++) {
    adjacencyList.set(i, [])
  }

  for (let i = 0; i < edges.length; i++) {
    let [u, v] = edges[i];
    adjacencyList.get(u).push(v);
    adjacencyList.get(v).push(u);
  }

  let visited = new Set();

  const hasCycle = (curr, parent) => {
    // mark current node as visited
    visited.add(curr);
    // for each neighbor
    for (let neighbor of adjacencyList.get(curr)) {
      // if visited set does not have neigbhor
      // if neighbor exists in visited, skip to else
      if (!visited.has(neighbor)) {
        // recursively calls iteself w/ neighbor as the current node and curr as the parents
        // if it returns true at any point, it meants that a cycle has been detected
        if (hasCycle(neighbor, curr)) return true;
      } else {
        // if the neighbor has been visited and parent is not same are neighbor, there is a cycle, if its the same, it indicates they are connected
        if (neighbor !== parent) return true;
      }
    }
    // if all the neighbors have been visited w/o detecting a cycle, the function returns false
    return false;
  }

  // if graph has a cycle, it is not a true, 0 as current, -1 as parent
  if (hasCycle(0, -1)) return false;

  return visited.size === n
};

/*
adjList
0 - [1,2,3]
1 - [0,4]
2 - [0]
3 - [0]
4 - [1]

visited = {0, 1, 4, 2}

hasCycle(0, -1);
neigbhor = 1, 2, 3
hasCycle(1, 0)
neighbor = 0, 4
if (neighbor !== parent) 0, 0
hasCycle(4, 1)
neighbor = 1
if (n !== p) 1, 1

neighbor = 2
hasCycle(2, 0)
neigh = 0
if (n !== p) 0,0
returns false

~~~~~~~~~~
adjList
0 - [1]
1 - [2,3,4]
2 - [1,3]
3 - [1,2]
4 - [1]

visited = {0,1,2,3}
hasCycle(0, -1)
add(0)
neigh = 1
hasCycle(1, 0)
add(1)
neig = 2, 3, 4
hasCycle(2,1)
add(2)
neig = 1, 3
if (n !== p) 1 1
hasCycle(3,2)
add(3)
neigh = 1, 2
if (n != p)  1, 2 => true

3 extends from 2
if neighbors of 3 is something else other than 2 and has been visited, its a cycle

*/
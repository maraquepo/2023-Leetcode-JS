/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

const canFinish = (numCourses, prerequisites) => {

  const graph = new Map();
  for (const [v, u] of prerequisites) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    graph.get(u).push(v);
  }

  const visited = new Set();
  const visiting = new Set();

  for (const [u] of graph) {
    if (!visited.has(u) && hasCycle(graph, u, visited, visiting)) return false;
  }
  return true;
};

const hasCycle = (graph, u, visited, visiting) => {
  visiting.add(u);

  for (const v of graph.get(u) || []) {
    if (visiting.has(v)) return true;
    if (!visiting.has(v) && hasCycle(graph, v, visited, visiting)) return true;
  }

  visiting.delete(u);
  visited.add(u);

  return false;
}
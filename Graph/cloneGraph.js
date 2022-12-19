/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

const cloneGraph = (node) => {
  if (!node) return null;

  // use a Map to store the cloned nodes, original node as key and cloned node as value
  // same as visited map, stores original nodes and their corresponding cloned node
  const clonedNodes = new Map();

  // use a queue to perform a breadth-first traversal of the graph
  const queue = [node]

  // create clone of the input node
  const clone = new Node(node.val)

  // clone gets stored in clonedNodes map
  clonedNodes.set(node, clone)

  while (queue.length > 0) {
    const currentNode = queue.shift()

    // iterate through the neighbors of the current node
    for (const neighbor of currentNode.neighbors) {
      // if neighbor does not exist in our map
      if (!clonedNodes.has(neighbor)) {
        // create a clone of that neighbor
        const clonedNeighbor = new Node(neighbor.val);
        // store it into the map, using the original value and its corresponding cloned node
        clonedNodes.set(neighbor, clonedNeighbor);
        // push original neighbor nodes into the queue
        queue.push(neighbor);
      }
      //get cloned nodes, it it's neighbor array, push cloned neighbor into it
      clonedNodes.get(currentNode).neighbors.push(clonedNodes.get(neighbor))
    }
  }
  // return the cloned version of the original
  return clone;
}
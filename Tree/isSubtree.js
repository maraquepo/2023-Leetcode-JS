/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

const isSubtree = (root, subRoot) => {
  // helper function to compare the two trees rooted at node1 and node2
  const areEqual = (node1, node2) => {
    // true if both null, false if one of the nodes are null
    if (!node1 || !node2) return !node1 && !node2;
    // false if node1 and node2 values are diff
    if (node1.val !== node2.val) return false;
    // recursively compares the left and right subtrees of n1 and n2, returns true if they are equal
    return areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right)
  }

  // helper function to traverse the tree rooted at a given node
  const dfs = (node) => {
    // if node is null return false
    if (!node) return false;
    // return true if node and subRoot are equal
    if (areEqual(node, subRoot)) return true;
    // recursively check left and right node
    return dfs(node.left) || dfs(node.right);
  }
  return dfs(root);
};

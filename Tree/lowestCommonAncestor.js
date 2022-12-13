/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const lowestCommonAncestor = (root, p, q) => {

  // if both p and q are less than the root, traverse to the left side
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q)
  }

  // if both p and q are greater than the root, traverse to the left side
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q)
  }

  // if neither conditions are met, root is the lowest common ancestor
  // p is less than root while q is greater than root, or vice verca,
  // this indicates a divergence, meaning we have found the LCA
  return root;
}
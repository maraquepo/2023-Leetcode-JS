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
 * @param {number} k
 * @return {number}
 */

const kthSmallest = (root, k) => {
  const values = []

  const inOrder = (node, values) => {
    if (!node) {
      return null;
    }

    inOrder(node.left, values)
    values.push(node.val)
    inOrder(node.right, values)
  }

  inOrder(root, values)

  return values[k - 1]
}
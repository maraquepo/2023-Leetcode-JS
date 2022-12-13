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
 * @return {number}
 */

const maxDepth2 = (root) => {
  if (root === null) {
    return 0;
  }

  let stack = [];
  let depths = [];

  stack.push(root);
  depths.push(1);

  let maxDepth = 0;

  while (stack.length > 0) {
    let current = stack.pop();
    let depth = depths.pop(1);

    maxDepth = Math.max(maxDepth, depth);

    if (current.left !== null) {
      stack.push(current.left);
      depths.push(depth + 1)
    }

    if (current.right !== null) {
      stack.push(current.right)
      depths.push(depth + 1);
    }
  }

  return maxDepth;
}

const maxDepth = (root) => {
  if (root === null) {
    return 0
  }

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
}

/*

[3,9,20,null,null,15,7]


max(3)
  left = max(9) = 1
  max(9) = 0 + 1
    left = max(null) = 0
    right = max(null) = 0

  right = max(20)
    max(20)
      left = max(15)
        max(15) = 0 + 1
          left = max(null) = 0
          right = max(null) = 0
      right = max(7)
        max(7) = 0 + 1
          left = max(null) = 0
          right = max(null) = 0
  right = max(20) = 2
    max(20) 1 + 1
      left = max(15) = 1
      right = max(7) = 1

max(3) => 2 + 1 = 3
  left = 1
  right = 2
*/
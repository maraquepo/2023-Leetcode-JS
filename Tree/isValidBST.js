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
 * @return {boolean}
 */

const isValidBST = (root) => {


  const values = []

  // inOrder => left, root, right, should return array in ascending order
  const inOrder = (node, values) => {
    if (!node) {
      return null;
    }

    inOrder(node.left, values);
    values.push(node.val);
    inOrder(node.right, values)
  }

  inOrder(root, values)

  // if current values is less than thre previous value, return false
  for (let i = 1; i < values.length; i++) {
    if (values[i] <= values[i - 1]) {
      return false;
    }
  }

  return true;
}

const isValidBST2 = (root, min = null, max = null) => {
  if (!root) return true;
  if (min && root.val <= min.val) return false;
  if (max && root.val >= max.val) return false;
  return isValidBST2(root.left, min, root) && isValidBST2(root.right, root, max);
}

/*
      2
    1  3

isValidBST(1, null, 2)   isValidBST(3, 2, max);
2 <= 1
iVB(null, null, 1) iVB(null, null, 1)


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

const buildTree = (preorder, inorder) => {
  // base case
  if (!preorder.length || !inorder.length) return null;

  // the first element in the preorder array is the root of the tree
  // we can use this value to find the root in the inorder array
  const rootValue = preorder[0];
  const rootIndex = inorder.indexOf(rootValue)

  // the left subtree of the root is the part of the inorder array that comes before
  // the root value, the right is the part after the root value
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  //the left subtree starts at the second element in the preorder array and ends 1 after the location of the rootValue
  // the right subtree starts one after the location of the rootValue
  const leftPreorder = preorder.slice(1, 1 + rootIndex);
  const rightPreorder = preorder.slice(1 + rootIndex)


  // construct new Treenode
  const root = new TreeNode(rootValue)
  root.left = buildTree(leftPreorder, leftInorder)
  root.right = buildTree(rightPreorder, rightInorder)

  return root;
}
/*
        3
    9      20
        15   7
preorder = [3,9,20,15,7] root, left, right
inorder = [9,3,15,20,7] left, root, right

[3,9,20,15,7]
[9] [15,20,17]
      we see 20 first in preorder
    [15] [17]
*/
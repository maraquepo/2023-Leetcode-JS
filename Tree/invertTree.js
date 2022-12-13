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
 * @return {TreeNode}
 */

let invertTree = (root) => {
  if (!root) {
    return root;
  }

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}

//DFS
let invertTree2 = (root) => {
  const stack = [root];

  while (stack.length) {
    let current = stack.pop();
    if (current !== null) {
      [current.left, current.right] = [current.right, current.left];
      stack.push(current.left, current.right)
    }
  }

  return root;
}

//BFS
let invertTree3 = (root) => {
  const queue = [root];

  while (queue.length) {
    let current = queue.shift();
    if (current !== null) {
      [current.left, current.right] = [current.right, current.left]
      queue.push(current.left, current.right)
    }
  }

  return root;
}

/*

      4
    2   7
  1  3 6  9


invert(4)

[2, 7] = [invert(7), invert(2)]

invert(7)

[6, 9] = [invert(9), invert(6)]

invert (9)

[null, null] = [null, null]
return root

intert (9) => 9 // invert(6) => 6

[6, 9] = [9, 6]

return (7)

[2, 7] = [7, invert(2)]

invert (2)

[1, 3] = [invert(3), invert(1)]

invert (3) => 3 // invert (1) => 1

[1, 3] = [3, 1]

return 2

invert (2) => 2

[2, 7] = [7, 2]

return 4

      4
    7   2
  9  6 3  1

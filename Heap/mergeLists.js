/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeKLists = (lists) => {
  if (lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    let a = lists.shift();
    let b = lists.shift();
    const h = mergeLists(a, b);
    lists.push(h);
  }

  return lists[0]
};

// time: O (n * k * log(k))
// space: O (n)

const mergeLists = (a, b) => {
  const dummy = new ListNode(0);
  let head = dummy;

  while (a && b) {
    if (a.val < b.val) {
      head.next = a;
      a = a.next;
    } else {
      head.next = b;
      b = b.next;
    }
    head = head.next;
  }

  if (a) {
    head.next = a;
  } else {
    head.next = b;
  }
  return dummy.next;
};

// Time: O(n)
// Space: O (1)

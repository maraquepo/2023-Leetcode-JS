/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

let removeNthFromEnd = (head, n) => {
  const dummy = new ListNode()
  let fast = dummy;
  let slow = dummy;

  for (let i = 1; i < n; i++) {
    fast = fast.next
  }

  if (!fast) {
    return head.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next
  }

  slow.next = slow.next.next;

  return dummy.next
}

/*
[1,2,3,4,5]

i = 0
fast = 1
i = 1
fast = 2

while (fast.next)
fast.next = 3
fast = 3
slow = 1
fast.next = 4
fast = 4
slow = 2
fast.next = 5
fast = 5
slow = 3
fast.next = null

slow.next = slow.next.next
3 --> 5
*/
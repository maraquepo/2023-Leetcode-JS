/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

const reorderList = (head) => {
  if (!head || !head.next) return;

  // find middle, results in slow pointer arriving at middle when fast point hits end
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next;
  }

  // reverse the second half of the list
  let prev = null
  let curr = slow.next;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp
  }
  slow.next = prev;

  // merge the two halves
  let first = head
  let second = slow.next

  while (first && second) {
    // slow pointer points to second's next
    slow.next = second.next
    // second pointer points to first's next
    second.next = first.next;
    // first pointer points to second
    first.next = second;
    // reassign first to second's next
    first = second.next;
    // ressign second to slow's next
    second = slow.next;
  }
}
/*
first = head
second = slow.next
1 -> 2 -> 3 -> 5 -> 4 -> N
F        Sl   S

slow.next = second.next
3 points to second's next (4)
3 -> 4

second.next = first.next
5 points to first's next (2)
5 -> 2

first.next = second
1 points to second(5)
1 -> 5

first = second.next;
first pointer is now second's next (2)
second = slow.next
second pointer is now slow's next (4)

1 -> 5 -> 2 -> 3 -> 4 -> N
          F    Sl   S

slow.next = second.next
3 -> N

second.next = first.next
4 -> 3

first.next = second
2 -> 4

first = null;
second = 4

1 -> 5 -> 2 -> 4 -> 3 -> N

slow.next = second.next
second.next = first.next
first.next = second
first = second.next
second = slow.next
*/
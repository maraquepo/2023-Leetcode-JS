function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null: next)
}

// iterative
let reverseList = (head) => {
  let prev = null
  let current = head
  let next = null

  while (current !== null) {
    next = current.next
    current.next = prev
    previous = current
    current = next
  }
  return prev;
}

//recursive

let reverseList2 = (head) => {
  if (head == null || head.next == null) {
    return head;
  }

  let reversedListHead = reverseList2(head.next)
  head.next.next = head;
  head.next = null
  return reversedListHead
};